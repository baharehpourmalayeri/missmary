// SuggestionSection.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { SuggestionSection } from "./SuggestionSection";
import { shoppingCartService } from "../../services/ShoppingCart";
import { suggestionProductService } from "../../services/SuggestionProduct";
import type { Product } from "../../types/product";

vi.mock("../../services/ShoppingCart", () => ({
  shoppingCartService: {
    addProduct: vi.fn(),
  },
}));

vi.mock("../../services/SuggestionProduct", () => ({
  suggestionProductService: {
    getSuggestedItems: vi.fn(),
  },
}));

vi.mock("./SuggestionItem", () => ({
  default: ({
    product,
    onAddClick,
  }: {
    product: { name: string };
    onAddClick: () => void;
  }) => <button onClick={onAddClick}>{product.name}</button>,
}));

const braProduct: Product = {
  id: "1",
  name: "Soft Bra",
  type: "BRA",
  price: 299,
  size: "sm",
  color: "blue",
  imageUrl: "test.jpg",
};

const pantyProduct: Product = {
  id: "2",
  name: "Maxi Brief",
  type: "PANTY",
  price: 199,
  size: "sm",
  color: "blue",
  imageUrl: "test.jpg",
};

describe("SuggestionSection", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(suggestionProductService.getSuggestedItems).mockReturnValue([
      braProduct,
      pantyProduct,
    ]);
  });

  it("renders the default title", () => {
    render(<SuggestionSection />);

    expect(screen.getByText("Matchar din BH")).toBeInTheDocument();
  });

  it("loads suggested products for BRA on initial render", () => {
    render(<SuggestionSection />);

    expect(suggestionProductService.getSuggestedItems).toHaveBeenCalledWith(
      "BRA",
    );
  });

  it("renders suggested products", () => {
    render(<SuggestionSection />);

    expect(screen.getByText("Soft Bra")).toBeInTheDocument();
    expect(screen.getByText("Maxi Brief")).toBeInTheDocument();
  });

  it("adds product to cart when a suggestion is clicked", () => {
    render(<SuggestionSection />);

    fireEvent.click(screen.getByText("Soft Bra"));

    expect(shoppingCartService.addProduct).toHaveBeenCalledWith(braProduct, 1);
  });

  it("keeps title as 'Matchar din BH' when added product type is BRA", () => {
    render(<SuggestionSection />);

    fireEvent.click(screen.getByText("Soft Bra"));

    expect(screen.getByText("Matchar din BH")).toBeInTheDocument();
  });

  it("changes title to 'Komplettera ditt köp' when added product type is not BRA", () => {
    render(<SuggestionSection />);

    fireEvent.click(screen.getByText("Maxi Brief"));

    expect(screen.getByText("Komplettera ditt köp")).toBeInTheDocument();
  });

  it("updates suggested products based on clicked product type", () => {
    render(<SuggestionSection />);

    fireEvent.click(screen.getByText("Maxi Brief"));

    expect(suggestionProductService.getSuggestedItems).toHaveBeenCalledWith(
      "PANTY",
    );
  });
});
