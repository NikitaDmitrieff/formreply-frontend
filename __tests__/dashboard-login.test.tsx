import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// Mock next modules
const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush, replace: vi.fn(), back: vi.fn() }),
  useSearchParams: () => new URLSearchParams(""),
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

describe("Dashboard Email Login", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    // Mock window.location
    Object.defineProperty(window, "location", {
      writable: true,
      value: { href: "" },
    });
  });

  it("shows email login form when no customer_id", () => {
    render(<DashboardClient />);
    expect(screen.getByText("Welcome back")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("you@yourcompany.com")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /access dashboard/i })
    ).toBeInTheDocument();
  });

  it("email input accepts text", () => {
    render(<DashboardClient />);
    const input = screen.getByPlaceholderText("you@yourcompany.com");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(input).toHaveValue("test@example.com");
  });

  it("disables submit button when email is empty", () => {
    render(<DashboardClient />);
    const btn = screen.getByRole("button", { name: /access dashboard/i });
    expect(btn).toBeDisabled();
  });

  it("disables submit button when email is only whitespace", () => {
    render(<DashboardClient />);
    const input = screen.getByPlaceholderText("you@yourcompany.com");
    fireEvent.change(input, { target: { value: "   " } });
    const btn = screen.getByRole("button", { name: /access dashboard/i });
    expect(btn).toBeDisabled();
  });

  it("does not submit when email is empty whitespace", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    render(<DashboardClient />);
    const input = screen.getByPlaceholderText("you@yourcompany.com");
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.submit(input.closest("form")!);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("calls lookup API and redirects on success", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => ({ customer_id: "cust_abc123" }),
    } as Response);

    render(<DashboardClient />);
    const input = screen.getByPlaceholderText("you@yourcompany.com");
    fireEvent.change(input, { target: { value: "hello@company.com" } });
    fireEvent.click(
      screen.getByRole("button", { name: /access dashboard/i })
    );

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith(
        expect.stringContaining("/dashboard/lookup-by-email?email=hello%40company.com")
      );
    });

    await waitFor(() => {
      expect(window.location.href).toBe(
        "/dashboard?customer_id=cust_abc123"
      );
    });
  });

  it("shows error message on failed lookup (404)", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Account not found" }),
    } as Response);

    render(<DashboardClient />);
    const input = screen.getByPlaceholderText("you@yourcompany.com");
    fireEvent.change(input, { target: { value: "nobody@example.com" } });
    fireEvent.click(
      screen.getByRole("button", { name: /access dashboard/i })
    );

    await waitFor(() => {
      expect(screen.getByText("Account not found")).toBeInTheDocument();
    });
  });

  it("shows error message on network failure", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(
      new Error("Network error")
    );

    render(<DashboardClient />);
    const input = screen.getByPlaceholderText("you@yourcompany.com");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(
      screen.getByRole("button", { name: /access dashboard/i })
    );

    await waitFor(() => {
      expect(screen.getByText("Network error")).toBeInTheDocument();
    });
  });

  it("shows loading state while looking up", async () => {
    let resolvePromise: (value: Response) => void;
    const pending = new Promise<Response>((resolve) => {
      resolvePromise = resolve;
    });
    vi.spyOn(globalThis, "fetch").mockReturnValueOnce(pending);

    render(<DashboardClient />);
    const input = screen.getByPlaceholderText("you@yourcompany.com");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(
      screen.getByRole("button", { name: /access dashboard/i })
    );

    await waitFor(() => {
      expect(screen.getByText("Looking up...")).toBeInTheDocument();
    });

    // Resolve to clean up
    resolvePromise!({
      ok: true,
      json: async () => ({ customer_id: "cust_123" }),
    } as Response);
  });

  it("shows sign-up link for new users", () => {
    render(<DashboardClient />);
    const link = screen.getByText("Sign up free");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/onboarding");
  });
});
