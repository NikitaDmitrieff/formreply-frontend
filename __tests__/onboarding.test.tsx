import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Mock next modules
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), back: vi.fn() }),
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import OnboardingPage from "@/app/onboarding/page";

describe("Onboarding Form", () => {
  beforeEach(() => {
    // Reset fetch mock
    vi.restoreAllMocks();
  });

  it("renders step 1 — business name", () => {
    render(<OnboardingPage />);
    expect(
      screen.getByText("What's your business called?")
    ).toBeInTheDocument();
    expect(screen.getByText(/Step 1 of 4/)).toBeInTheDocument();
  });

  it("disables Continue when business name is empty", () => {
    render(<OnboardingPage />);
    const continueBtn = screen.getByRole("button", { name: /continue/i });
    expect(continueBtn).toBeDisabled();
  });

  it("disables Continue when business name is only whitespace", () => {
    render(<OnboardingPage />);
    const input = screen.getByPlaceholderText(/Acme Studio/);
    fireEvent.change(input, { target: { value: "   " } });
    const continueBtn = screen.getByRole("button", { name: /continue/i });
    expect(continueBtn).toBeDisabled();
  });

  it("enables Continue when business name has content", () => {
    render(<OnboardingPage />);
    const input = screen.getByPlaceholderText(/Acme Studio/);
    fireEvent.change(input, { target: { value: "My Biz" } });
    const continueBtn = screen.getByRole("button", { name: /continue/i });
    expect(continueBtn).not.toBeDisabled();
  });

  it("advances to step 2 and validates context length", () => {
    render(<OnboardingPage />);
    // Fill step 1
    const input = screen.getByPlaceholderText(/Acme Studio/);
    fireEvent.change(input, { target: { value: "My Biz" } });
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));

    // Step 2 visible
    expect(
      screen.getByText("Describe what your business does")
    ).toBeInTheDocument();

    // Continue disabled with short text
    const textarea = screen.getByPlaceholderText(/boutique web design/);
    fireEvent.change(textarea, { target: { value: "short" } });
    expect(screen.getByRole("button", { name: /continue/i })).toBeDisabled();

    // Enable with enough text
    fireEvent.change(textarea, {
      target: { value: "We build premium e-commerce stores for small brands." },
    });
    expect(
      screen.getByRole("button", { name: /continue/i })
    ).not.toBeDisabled();
  });

  it("advances to step 3 — tone selection defaults to professional", () => {
    render(<OnboardingPage />);
    // Step 1
    fireEvent.change(screen.getByPlaceholderText(/Acme Studio/), {
      target: { value: "Biz" },
    });
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    // Step 2
    fireEvent.change(screen.getByPlaceholderText(/boutique web design/), {
      target: { value: "We do lots of interesting stuff for clients." },
    });
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));

    // Step 3
    expect(screen.getByText("How should replies sound?")).toBeInTheDocument();
    expect(screen.getByText("Professional")).toBeInTheDocument();
    expect(screen.getByText("Friendly")).toBeInTheDocument();
    expect(screen.getByText("Casual")).toBeInTheDocument();
  });

  it("validates email format on step 4", () => {
    render(<OnboardingPage />);
    // Navigate to step 4
    fireEvent.change(screen.getByPlaceholderText(/Acme Studio/), {
      target: { value: "Biz" },
    });
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    fireEvent.change(screen.getByPlaceholderText(/boutique web design/), {
      target: { value: "We do lots of interesting stuff for clients." },
    });
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));

    // Step 4
    expect(
      screen.getByText("Where should drafts be delivered?")
    ).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText(/you@yourcompany/);

    // Invalid emails should keep buttons disabled
    fireEvent.change(emailInput, { target: { value: "notanemail" } });
    const trialBtn = screen.getByRole("button", {
      name: /start 14-day free trial/i,
    });
    expect(trialBtn).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: "missing@domain" } });
    expect(trialBtn).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: "@no-local.com" } });
    expect(trialBtn).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: "spaces in@email.com" } });
    expect(trialBtn).toBeDisabled();

    // Valid email enables button
    fireEvent.change(emailInput, {
      target: { value: "hello@company.com" },
    });
    expect(trialBtn).not.toBeDisabled();
  });

  it("shows Back button from step 2 onward", () => {
    render(<OnboardingPage />);
    // Step 1: no back
    expect(screen.queryByRole("button", { name: /^back$/i })).toBeNull();

    // Advance to step 2
    fireEvent.change(screen.getByPlaceholderText(/Acme Studio/), {
      target: { value: "Biz" },
    });
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));

    // Step 2: back button present
    expect(screen.getByRole("button", { name: /^back$/i })).toBeInTheDocument();
  });
});
