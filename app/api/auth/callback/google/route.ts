import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://formreply-backend-production.up.railway.app";

// Google redirects here after OAuth authorization.
// We proxy the code+state to the backend callback, which handles
// token exchange and form discovery, then redirects to /success.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const params = new URLSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  if (code) params.set("code", code);
  if (state) params.set("state", state);
  if (error) params.set("error", error);

  const backendCallback = `${BACKEND_URL}/oauth/google/callback?${params.toString()}`;
  return NextResponse.redirect(backendCallback);
}
