import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "./SiteFooter";

describe("SiteFooter", () => {
  it("credits the challenge and the author", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      "Challenge by Frontend Mentor. Coded by 1t1sCooL.",
    );
    expect(screen.getByRole("link", { name: "Frontend Mentor" })).toHaveAttribute(
      "href",
      "https://www.frontendmentor.io?ref=challenge",
    );
    expect(screen.getByRole("link", { name: "1t1sCooL" })).toHaveAttribute("href", "https://mmalabugin.ru/");
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();

    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
