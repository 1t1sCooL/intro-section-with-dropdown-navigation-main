import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("renders the headline, the pitch, the call to action, and every client", () => {
    render(<HeroSection />);

    expect(screen.getByRole("heading", { level: 1, name: "Make remote work" })).toBeVisible();
    expect(screen.getByText(/Get your team in sync/)).toBeVisible();
    expect(screen.getByRole("link", { name: "Learn more" })).toHaveAttribute("href", "#learn-more");
    expect(screen.getByRole("img", { name: "Databiz" })).toBeVisible();
    expect(screen.getByRole("img", { name: "Audiophile" })).toBeVisible();
    expect(screen.getByRole("img", { name: "Meet" })).toBeVisible();
    expect(screen.getByRole("img", { name: "Maker" })).toBeVisible();
    const heroImage = document.querySelector(".hero__image");
    expect(heroImage).toHaveAttribute("alt", "");
    expect(heroImage).toHaveAttribute("fetchpriority", "high");
  });
});
