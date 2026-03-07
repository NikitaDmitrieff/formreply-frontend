import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import OAuthSuccessBanner from "@/app/success/OAuthSuccessBanner";

describe("OAuthSuccessBanner", () => {
  it("renders nothing when status is null", () => {
    const { container } = render(<OAuthSuccessBanner status={null} />);
    expect(container.innerHTML).toBe("");
  });

  // ── Typeform (default provider) ──

  it("renders success state when status=done", () => {
    render(<OAuthSuccessBanner status="done" />);
    expect(screen.getByText("Typeform connected!")).toBeInTheDocument();
    expect(
      screen.getByText(/Webhooks have been created on all your Typeform forms/)
    ).toBeInTheDocument();
  });

  it("renders error state", () => {
    render(<OAuthSuccessBanner status="error" />);
    expect(screen.getByText("Connection failed")).toBeInTheDocument();
    expect(
      screen.getByText(/Something went wrong connecting to Typeform/)
    ).toBeInTheDocument();
  });

  it("renders denied state", () => {
    render(<OAuthSuccessBanner status="denied" />);
    expect(
      screen.getByText("Typeform authorization cancelled")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/you can connect manually using the webhook URL below/)
    ).toBeInTheDocument();
  });

  it("renders partial state with forms_fetch reason", () => {
    render(<OAuthSuccessBanner status="partial" reason="forms_fetch" />);
    expect(screen.getByText("Partially connected")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Typeform connected, but we couldn\u2019t fetch your forms/
      )
    ).toBeInTheDocument();
  });

  it("renders partial state with webhooks reason", () => {
    render(<OAuthSuccessBanner status="partial" reason="webhooks" />);
    expect(screen.getByText("Partially connected")).toBeInTheDocument();
    expect(
      screen.getByText(/some webhooks couldn\u2019t be created/)
    ).toBeInTheDocument();
  });

  it("renders partial state with default reason", () => {
    render(<OAuthSuccessBanner status="partial" reason="other" />);
    expect(screen.getByText("Partially connected")).toBeInTheDocument();
    expect(
      screen.getByText(/setup didn\u2019t fully complete/)
    ).toBeInTheDocument();
  });

  it("renders partial without reason uses default message", () => {
    render(<OAuthSuccessBanner status="partial" />);
    expect(screen.getByText("Partially connected")).toBeInTheDocument();
  });

  // ── Google Forms provider ──

  it("renders Google Forms success state", () => {
    render(<OAuthSuccessBanner status="done" provider="google" />);
    expect(screen.getByText("Google Forms connected!")).toBeInTheDocument();
    expect(
      screen.getByText(/automatically check for new responses every 5 minutes/)
    ).toBeInTheDocument();
  });

  it("renders Google Forms error state", () => {
    render(<OAuthSuccessBanner status="error" provider="google" />);
    expect(screen.getByText("Connection failed")).toBeInTheDocument();
    expect(
      screen.getByText(/Something went wrong connecting to Google Forms/)
    ).toBeInTheDocument();
  });

  it("renders Google Forms denied state", () => {
    render(<OAuthSuccessBanner status="denied" provider="google" />);
    expect(
      screen.getByText("Google Forms authorization cancelled")
    ).toBeInTheDocument();
  });

  it("renders Google Forms partial with no_forms reason", () => {
    render(<OAuthSuccessBanner status="partial" reason="no_forms" provider="google" />);
    expect(screen.getByText("Partially connected")).toBeInTheDocument();
    expect(
      screen.getByText(/no forms were found in your account/)
    ).toBeInTheDocument();
  });

  it("renders Google Forms partial with forms_fetch reason", () => {
    render(<OAuthSuccessBanner status="partial" reason="forms_fetch" provider="google" />);
    expect(screen.getByText("Partially connected")).toBeInTheDocument();
    expect(
      screen.getByText(/Google Forms connected, but we couldn\u2019t fetch your forms/)
    ).toBeInTheDocument();
  });
});
