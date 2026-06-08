import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SuggestionSection } from "./SuggestionSection";

const mocks = vi.hoisted(() => ({
  addProduct: vi.fn(),
}));

vi.mock("../../services/ShoppingCart", () => ({
  shoppingCartService: {
    addProduct: mocks.addProduct,
  },
}));

describe("SuggestionSection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders suggestion section title", () => {
    render(<SuggestionSection />);

    expect(screen.getByText("Komplettera ditt köp")).toBeInTheDocument();
  });

  it("renders suggestion products", () => {
    render(<SuggestionSection />);

    expect(screen.getByText("Belle maxitrosa")).toBeInTheDocument();
    expect(screen.getByText("Organic Cotton maxitrosa")).toBeInTheDocument();
    expect(screen.getByText("Recycled Comfort maxitrosa")).toBeInTheDocument();
  });

  it("adds Belle maxitrosa to cart when its cart button is clicked", async () => {
    const user = userEvent.setup();

    render(<SuggestionSection />);

    const cartButtons = screen.getAllByRole("button");

    await user.click(cartButtons[0]);

    expect(mocks.addProduct).toHaveBeenCalledWith(
      {
        id: "10",
        name: "Belle maxitrosa",
        price: 199,
        imageUrl: "../src/assets/images/product-images/10.jpg",
        color: "Dimrosa",
        size: "40/42",
      },
      1,
    );
  });
});
