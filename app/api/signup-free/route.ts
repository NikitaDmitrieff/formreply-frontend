export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";
import { getServiceClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, business_name, business_context, tone } = await req.json();

    if (!email || !business_name || !business_context || !tone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = getServiceClient();

    // Check if customer already exists
    const { data: existing } = await supabase
      .from("formreply_customers")
      .select("id, plan, is_active")
      .eq("email", email)
      .single();

    if (existing?.is_active && existing.plan !== "free") {
      // Already has a paid account -- just return their ID, don't downgrade
      return NextResponse.json({ customer_id: existing.id });
    }

    const { data: customer, error: dbError } = await supabase
      .from("formreply_customers")
      .upsert(
        {
          email,
          business_name,
          business_context,
          tone,
          is_active: true,
          plan: "free",
        },
        { onConflict: "email", ignoreDuplicates: false }
      )
      .select("id")
      .single();

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ customer_id: customer.id });
  } catch (err: unknown) {
    console.error("Free signup error:", err);
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
