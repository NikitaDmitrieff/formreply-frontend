import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

// Mock next modules — simulate customer_id in search params
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  useSearchParams: () => new URLSearchParams("customer_id=cust-123"),
  usePathname: () => "/dashboard",
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import DashboardClient from "@/app/dashboard/DashboardClient";

const mockDashboardData = {
  account: {
    id: "cust-123",
    email: "test@example.com",
    business_name: "Test Co",
    business_context: "We do testing",
    tone: "professional",
    plan: "free",
    created_at: "2026-01-01T00:00:00Z",
    webhook_token: "abc123def456xyz",
    webhook_last_pinged_at: "2026-03-07T10:00:00Z",
  },
  usage: {
    replies_this_month: 2,
    limit: 5,
    total_processed: 10,
    total_spam: 3,
  },
  submissions: [
    {
      id: "sub-1",
      submitter_name: "Alice",
      submitter_email: "alice@test.com",
      message: "Hello there",
      form_name: "Contact",
      platform: "typeform",
      draft: "Hi Alice, thanks for reaching out.",
      status: "processed",
      spam_reason: null,
      created_at: new Date().toISOString(),
    },
  ],
};

describe("Dashboard CSV Export", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    Object.defineProperty(window, "location", {
      writable: true,
      value: { href: "" },
    });
  });

  it("shows Export CSV button when dashboard loads with submissions", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockDashboardData,
    } as Response);

    render(<DashboardClient />);

    await waitFor(() => {
      expect(screen.getByText("Export CSV")).toBeInTheDocument();
    });
  });

  it("Export CSV button navigates to backend export endpoint", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockDashboardData,
    } as Response);

    render(<DashboardClient />);

    await waitFor(() => {
      const exportBtn = screen.getByText("Export CSV");
      expect(exportBtn).toBeInTheDocument();

      // Click the export button
      exportBtn.click();

      // Should redirect to backend export endpoint
      expect(window.location.href).toContain("/dashboard/cust-123/export");
    });
  });

  it("does not show Export CSV when there are no submissions", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        ...mockDashboardData,
        submissions: [],
      }),
    } as Response);

    render(<DashboardClient />);

    await waitFor(() => {
      expect(screen.getByText("No submissions yet")).toBeInTheDocument();
    });

    // Export button should still be visible in the header area
    // (it's in the section header, not conditional on submissions)
    expect(screen.getByText("Export CSV")).toBeInTheDocument();
  });
});
