import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import OAuthSuccessBanner from "@/app/success/OAuthSuccessBanner";

describe("OAuthSuccessBanner", () => {
  it("renders nothing when all props are false", () => {
    const { container } = render(
      <OAuthSuccessBanner
        connected={false}
        denied={false}
        error={false}
        partial={false}
      />
    );
    expect(container.innerHTML).toBe("");
  });

  it("renders success state when connected=true", () => {
    render(
      <OAuthSuccessBanner
        connected={true}
        denied={false}
        error={false}
        partial={false}
      />
    );
    expect(screen.getByText("Typeform connected!")).toBeInTheDocument();
    expect(
      screen.getByText(/Webhooks have been created on all your Typeform forms/)
    ).toBeInTheDocument();
  });

  it("renders error state (takes priority over connected)", () => {
    render(
      <OAuthSuccessBanner
        connected={true}
        denied={false}
        error={true}
        partial={false}
      />
    );
    expect(screen.getByText("Connection failed")).toBeInTheDocument();
    expect(
      screen.getByText(/Something went wrong connecting to Typeform/)
    ).toBeInTheDocument();
  });

  it("renders denied state", () => {
    render(
      <OAuthSuccessBanner
        connected={false}
        denied={true}
        error={false}
        partial={false}
      />
    );
    expect(
      screen.getByText("Typeform authorization cancelled")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/you can connect manually using the webhook URL below/)
    ).toBeInTheDocument();
  });

  it("renders partial state with forms_fetch reason", () => {
    render(
      <OAuthSuccessBanner
        connected={false}
        denied={false}
        error={false}
        partial={true}
        partialReason="forms_fetch"
      />
    );
    expect(screen.getByText("Partially connected")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Typeform connected, but we couldn\u2019t fetch your forms/
      )
    ).toBeInTheDocument();
  });

  it("renders partial state with default reason", () => {
    render(
      <OAuthSuccessBanner
        connected={false}
        denied={false}
        error={false}
        partial={true}
        partialReason="webhook_create"
      />
    );
    expect(screen.getByText("Partially connected")).toBeInTheDocument();
    expect(
      screen.getByText(
        /some webhooks couldn\u2019t be created/
      )
    ).toBeInTheDocument();
  });

  it("error takes priority over partial", () => {
    render(
      <OAuthSuccessBanner
        connected={false}
        denied={false}
        error={true}
        partial={true}
      />
    );
    expect(screen.getByText("Connection failed")).toBeInTheDocument();
    expect(screen.queryByText("Partially connected")).toBeNull();
  });

  it("partial takes priority over connected", () => {
    render(
      <OAuthSuccessBanner
        connected={true}
        denied={false}
        error={false}
        partial={true}
      />
    );
    expect(screen.getByText("Partially connected")).toBeInTheDocument();
    expect(screen.queryByText("Typeform connected!")).toBeNull();
  });
});
