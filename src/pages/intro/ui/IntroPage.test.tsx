import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { IntroPage } from "./IntroPage";

describe("IntroPage", () => {
  it("renders the snap landing with primary navigation", () => {
    render(<IntroPage />);

    expect(screen.getByRole("link", { name: "snap" })).toHaveAttribute("href", "#main");
    expect(screen.getByRole("heading", { name: "Make remote work" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Features" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("link", { name: "Careers" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Register" })).toBeVisible();
    expect(screen.getByRole("contentinfo")).toBeVisible();
  });

  it("opens one desktop menu at a time and closes it from the keyboard or a click outside", async () => {
    const user = userEvent.setup();
    render(<IntroPage />);

    await user.click(screen.getByRole("button", { name: "Features" }));
    expect(screen.getByRole("link", { name: "Todo List" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Planning" })).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Company" }));
    expect(screen.queryByRole("link", { name: "Todo List" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "History" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Our Team" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Blog" })).toBeVisible();
    expect(screen.getByRole("link", { name: "History" }).querySelector("img")).toBeNull();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("link", { name: "History" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Company" }));
    await user.click(screen.getByRole("heading", { name: "Make remote work" }));
    expect(screen.queryByRole("link", { name: "Blog" })).not.toBeInTheDocument();
  });

  it("opens the mobile drawer, expands both sections, and closes from the overlay", async () => {
    const user = userEvent.setup();
    render(<IntroPage />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const dialog = screen.getByRole("dialog", { name: "Menu" });
    expect(dialog).toBeVisible();
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveFocus();

    await user.click(within(dialog).getByRole("button", { name: "Features" }));
    await user.click(within(dialog).getByRole("button", { name: "Company" }));
    expect(within(dialog).getByRole("link", { name: "Reminders" })).toBeVisible();
    expect(within(dialog).getByRole("link", { name: "Blog" })).toBeVisible();
    expect(within(dialog).getByRole("link", { name: "Login" })).toBeVisible();
    expect(within(dialog).getByRole("link", { name: "Register" })).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Dismiss menu" }));
    expect(screen.queryByRole("dialog", { name: "Menu" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveFocus();
  });
});
