import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ShoppingCart } from "./ShoppingCart";

const mocks = vi.hoisted(() => {
  return {
    getItems: vi.fn(),
    subscribe: vi.fn(),
    getTotal: vi.fn(),
  };
});

vi.mock("../../../services/ShoppingCart", () => ({
  shoppingCartService: {
    getItems: mocks.getItems,
    subscribe: mocks.subscribe,
    getTotal: mocks.getTotal,
  },
}));

describe("ShoppingCart", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders cart items from the shopping cart service", () => {
    mocks.getItems.mockReturnValue([
      {
        id: "1",
        imageUrl: "/test.jpg",
        name: "Belle bh",
        size: "85E",
        color: "Pink",
        quantity: 1,
        availabilityText: "I lager",
        price: 599,
      },
    ]);

    mocks.subscribe.mockReturnValue(() => {});

    render(<ShoppingCart />);

    expect(screen.getByText("Belle bh")).toBeInTheDocument();
  });

  it("subscribes to shopping cart updates", () => {
    mocks.getItems.mockReturnValue([]);
    mocks.subscribe.mockReturnValue(() => {});

    render(<ShoppingCart />);

    expect(mocks.subscribe).toHaveBeenCalledTimes(2);
  });
});
