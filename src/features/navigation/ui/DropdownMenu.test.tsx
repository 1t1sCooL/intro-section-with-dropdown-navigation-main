import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { featureItems } from "@/shared/config/navigation";
import { DropdownMenu } from "./DropdownMenu";

describe("DropdownMenu", () => {
  it("hides the panel until the trigger is pressed", async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();
    const { rerender } = render(
      <DropdownMenu id="features" label="Features" open={false} items={featureItems} onToggle={onToggle} />,
    );

    const trigger = screen.getByRole("button", { name: "Features" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("link", { name: "Todo List" })).not.toBeInTheDocument();

    await user.click(trigger);
    expect(onToggle).toHaveBeenCalledOnce();

    rerender(
      <DropdownMenu id="features" label="Features" open items={featureItems} onToggle={onToggle} />,
    );
    expect(screen.getByRole("button", { name: "Features" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "Calendar" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Todo List" }).querySelector("img")).toBeTruthy();
  });
});
