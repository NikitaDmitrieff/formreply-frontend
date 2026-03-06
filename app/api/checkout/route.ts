export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getServiceClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe not configured — contact support" }, { status: 503 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!.trim(), {
    apiVersion: "2026-02-25.clover",
  });

  try {
    const { email, business_name, business_context, tone } = await req.json();

    if (!email || !business_name || !business_context || !tone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = getServiceClient();

    const { data: customer, error: dbError } = await supabase
      .from("formreply_customers")
      .upsert(
        { email, business_name, business_context, tone, is_active: false },
        { onConflict: "email", ignoreDuplicates: false }
      )
      .select()
      .single();

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "FormReply Starter",
              description: "AI-drafted replies for every contact form submission",
            },
            unit_amount: 1900,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      metadata: { customer_id: customer.id },
      subscription_data: {
        trial_period_days: 14,
      },
      success_url: `${appUrl}/success?customer_id=${customer.id}`,
      cancel_url: `${appUrl}/onboarding`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Checkout error:", err);
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
