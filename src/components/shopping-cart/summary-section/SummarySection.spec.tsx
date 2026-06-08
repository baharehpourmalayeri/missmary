import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SummarySection } from "./SummarySection";

const mocks = vi.hoisted(() => ({
  getTotal: vi.fn(),
  subscribe: vi.fn(),
}));

vi.mock("../../../services/ShoppingCart", () => ({
  shoppingCartService: {
    getTotal: mocks.getTotal,
    subscribe: mocks.subscribe,
  },
}));

describe("SummarySection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders subtotal, delivery and total price", () => {
    mocks.getTotal.mockReturnValue(599);
    mocks.subscribe.mockReturnValue(() => {});

    render(<SummarySection />);

    expect(screen.getByText("Delsumma")).toBeInTheDocument();
    expect(screen.getByText("599 kr")).toBeInTheDocument();

    expect(screen.getByText("Leverans")).toBeInTheDocument();
    expect(screen.getByText("49 kr")).toBeInTheDocument();

    expect(screen.getByText("Totalsumma")).toBeInTheDocument();
    expect(screen.getByText("648 kr")).toBeInTheDocument();
  });

  it("subscribes to cart updates", () => {
    mocks.getTotal.mockReturnValue(599);
    mocks.subscribe.mockReturnValue(() => {});

    render(<SummarySection />);

    expect(mocks.subscribe).toHaveBeenCalledTimes(1);
  });
});
