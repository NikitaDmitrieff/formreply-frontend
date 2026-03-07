import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock supabase before importing the route
const mockUpsert = vi.fn();
const mockSelect = vi.fn();
const mockSingle = vi.fn();

vi.mock("@/lib/supabase", () => ({
  getServiceClient: () => ({
    from: () => ({
      upsert: (...args: any[]) => {
        mockUpsert(...args);
        return {
          select: (...sArgs: any[]) => {
            mockSelect(...sArgs);
            return { single: mockSingle };
          },
        };
      },
    }),
  }),
}));

import { POST } from "@/app/api/signup-free/route";

function makeRequest(body: Record<string, any>): Request {
  return new Request("http://localhost/api/signup-free", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validBody = {
  email: "test@example.com",
  business_name: "Test Biz",
  business_context: "We do testing things for testers.",
  tone: "professional",
};

describe("POST /api/signup-free", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 when required fields are missing", async () => {
    const cases = [
      { email: "a@b.com" },
      { email: "a@b.com", business_name: "X" },
      { email: "a@b.com", business_name: "X", business_context: "Y" },
      {},
    ];

    for (const body of cases) {
      const res = await POST(makeRequest(body) as any);
      expect(res.status).toBe(400);
      const json = await res.json();
      expect(json.error).toBe("Missing required fields");
    }
  });

  it("returns customer_id on successful signup", async () => {
    mockSingle.mockResolvedValueOnce({
      data: { id: "cust_123" },
      error: null,
    });

    const res = await POST(makeRequest(validBody) as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.customer_id).toBe("cust_123");
  });

  it("upserts with plan=free and is_active=true", async () => {
    mockSingle.mockResolvedValueOnce({
      data: { id: "cust_456" },
      error: null,
    });

    await POST(makeRequest(validBody) as any);

    expect(mockUpsert).toHaveBeenCalledWith(
      {
        email: "test@example.com",
        business_name: "Test Biz",
        business_context: "We do testing things for testers.",
        tone: "professional",
        is_active: true,
        plan: "free",
      },
      { onConflict: "email", ignoreDuplicates: false }
    );
  });

  it("returns 500 on database error", async () => {
    mockSingle.mockResolvedValueOnce({
      data: null,
      error: { message: "DB down", code: "500" },
    });

    const res = await POST(makeRequest(validBody) as any);
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(json.error).toBe("Database error");
  });

  it("returns 500 when request body is not valid JSON", async () => {
    const req = new Request("http://localhost/api/signup-free", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "not json",
    });

    const res = await POST(req as any);
    expect(res.status).toBe(500);
  });
});
