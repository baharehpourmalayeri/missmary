import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { QuantitySelector } from "./QuantitySelector";

describe("QuantitySelector", () => {
  it("renders the current quantity", () => {
    render(
      <QuantitySelector
        quantity={3}
        onIncrease={vi.fn()}
        onDecrease={vi.fn()}
      />,
    );

    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("calls onIncrease when plus button is clicked", async () => {
    const user = userEvent.setup();
    const onIncrease = vi.fn();

    render(
      <QuantitySelector
        quantity={1}
        onIncrease={onIncrease}
        onDecrease={vi.fn()}
      />,
    );

    await user.click(
      screen.getByRole("button", { name: /increase quantity/i }),
    );

    expect(onIncrease).toHaveBeenCalledTimes(1);
  });

  it("calls onDecrease when minus button is clicked", async () => {
    const user = userEvent.setup();
    const onDecrease = vi.fn();

    render(
      <QuantitySelector
        quantity={1}
        onIncrease={vi.fn()}
        onDecrease={onDecrease}
      />,
    );

    await user.click(
      screen.getByRole("button", { name: /decrease quantity/i }),
    );

    expect(onDecrease).toHaveBeenCalledTimes(1);
  });
});
