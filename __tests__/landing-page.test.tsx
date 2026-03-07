import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock next/link as a plain anchor
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock next/image as a plain img
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
}));

// Mock NavBar to avoid its useEffect (scroll listener)
vi.mock("@/app/components/NavBar", () => ({
  NavBar: () => <nav data-testid="navbar">NavBar</nav>,
}));

import LandingPage from "@/app/page";

describe("Landing Page", () => {
  it("renders the hero headline", () => {
    render(<LandingPage />);
    expect(
      screen.getByText(/Every form lead gets a reply in 10 seconds/i)
    ).toBeInTheDocument();
  });

  it("renders primary CTAs linking to onboarding", () => {
    render(<LandingPage />);
    const ctas = screen.getAllByRole("link", { name: /get started free/i });
    expect(ctas.length).toBeGreaterThanOrEqual(2);
    for (const cta of ctas) {
      expect(cta).toHaveAttribute("href", "/onboarding");
    }
  });

  it("renders the How it works section with 3 steps", () => {
    render(<LandingPage />);
    expect(screen.getByText("How it works")).toBeInTheDocument();
    expect(screen.getByText("Connect your form")).toBeInTheDocument();
    expect(screen.getByText("Someone fills your form")).toBeInTheDocument();
    expect(screen.getByText("Review and send")).toBeInTheDocument();
  });

  it("renders the pricing section with Free and Starter tiers", () => {
    render(<LandingPage />);
    expect(screen.getByText("Simple pricing")).toBeInTheDocument();
    // Free tier
    expect(screen.getByText("Start for free")).toBeInTheDocument();
    // Starter tier
    expect(screen.getByText("Start free 14-day trial")).toBeInTheDocument();
  });

  it("renders the FAQ section", () => {
    render(<LandingPage />);
    expect(screen.getByText("Common questions")).toBeInTheDocument();
    expect(
      screen.getByText("Which forms does this work with?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Does it send replies automatically?")
    ).toBeInTheDocument();
  });

  it("renders pricing amounts correctly", () => {
    render(<LandingPage />);
    const zeroPrices = screen.getAllByText("$0");
    expect(zeroPrices.length).toBeGreaterThanOrEqual(1);
    const nineteenPrices = screen.getAllByText("$19");
    expect(nineteenPrices.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the feature comparison table", () => {
    render(<LandingPage />);
    expect(screen.getByText("Why not just use Zapier?")).toBeInTheDocument();
    expect(screen.getByText("AI-personalized replies")).toBeInTheDocument();
    expect(screen.getByText("Spam filtering")).toBeInTheDocument();
  });

  it("renders the footer with copyright", () => {
    render(<LandingPage />);
    expect(screen.getByText(/2026 FormReply/)).toBeInTheDocument();
  });
});
