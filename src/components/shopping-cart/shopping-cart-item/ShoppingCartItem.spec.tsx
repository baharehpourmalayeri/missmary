import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import ShoppingCartItem from "./ShoppingCartItem";

const mocks = vi.hoisted(() => ({
  increaseProductQuantity: vi.fn(),
  decreaseProductQuantity: vi.fn(),
}));

vi.mock("../../../services/ShoppingCart", () => ({
  shoppingCartService: {
    increaseProductQuantity: mocks.increaseProductQuantity,
    decreaseProductQuantity: mocks.decreaseProductQuantity,
  },
}));

describe("ShoppingCartItem", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders product information", () => {
    render(
      <ShoppingCartItem
        id="1"
        imageSrc="/test.jpg"
        name="Belle bh"
        size="85E"
        color="Dimrosa"
        availabilityText="I lager"
        quantity={1}
        price={599}
      />,
    );

    expect(screen.getByText("Belle bh")).toBeInTheDocument();
    expect(screen.getByText("85E")).toBeInTheDocument();
    expect(screen.getByText("Dimrosa")).toBeInTheDocument();
    expect(screen.getByText("I lager")).toBeInTheDocument();
    expect(screen.getByText("599 kr")).toBeInTheDocument();
  });

  it("increases quantity when plus button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <ShoppingCartItem
        id="1"
        imageSrc="/test.jpg"
        name="Belle bh"
        size="85E"
        color="Dimrosa"
        availabilityText="I lager"
        quantity={1}
        price={599}
      />,
    );

    await user.click(
      screen.getByRole("button", { name: /increase quantity/i }),
    );
    expect(mocks.increaseProductQuantity).toHaveBeenCalledWith("1", 1);
  });

  it("decreases quantity when minus button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <ShoppingCartItem
        id="1"
        imageSrc="/test.jpg"
        name="Belle bh"
        size="85E"
        color="Dimrosa"
        availabilityText="I lager"
        quantity={2}
        price={599}
      />,
    );

    await user.click(
      screen.getByRole("button", { name: /decrease quantity/i }),
    );

    expect(mocks.decreaseProductQuantity).toHaveBeenCalledWith("1", 1);
  });
});
