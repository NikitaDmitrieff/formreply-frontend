import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import OAuthSuccessBanner from "@/app/success/OAuthSuccessBanner";

describe("OAuthSuccessBanner", () => {
  it("renders nothing when status is null", () => {
    const { container } = render(<OAuthSuccessBanner status={null} />);
    expect(container.innerHTML).toBe("");
  });

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
});
