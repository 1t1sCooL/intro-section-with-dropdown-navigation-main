import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "./SiteFooter";

describe("SiteFooter", () => {
  it("credits Frontend Mentor and links the author profiles", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("contentinfo")).toHaveTextContent("Challenge by Frontend Mentor");
    expect(screen.getByRole("link", { name: "1t1sCooL" })).toHaveAttribute("href", "https://mmalabugin.ru/");
    expect(screen.getByRole("link", { name: "Telegram" })).toHaveAttribute("href", "https://t.me/ItIsCooL");
    expect(screen.getByRole("navigation", { name: "Author links" })).toBeVisible();

    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
