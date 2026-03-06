import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getServiceClient } from "@/lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: NextRequest) {
  try {
    const { email, business_name, business_context, tone } = await req.json();

    if (!email || !business_name || !business_context || !tone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = getServiceClient();

    // Upsert customer record (pending payment)
    const { data: customer, error: dbError } = await supabase
      .from("formreply_customers")
      .upsert(
        {
          email,
          business_name,
          business_context,
          tone,
          is_active: false,
        },
        { onConflict: "email", ignoreDuplicates: false }
      )
      .select()
      .single();

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      customer_email: email,
      metadata: {
        customer_id: customer.id,
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?customer_id=${customer.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/onboarding`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Checkout error:", err);
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
