// SuggestionItem.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SuggestionItem from "./SuggestionItem";
import type { Product } from "../../types/product";

const mockProduct: Product = {
  id: "1",
  name: "Belle Maxitrosa",
  imageUrl: "/test-image.jpg",
  price: 199,
  saving: 40,
  offerText: "4 för 3",
  type: "PANTY",
  size: "sm",
  color: "blue",
};

describe("SuggestionItem", () => {
  it("renders product name", () => {
    render(<SuggestionItem product={mockProduct} onAddClick={vi.fn()} />);

    expect(screen.getByText("Belle Maxitrosa")).toBeInTheDocument();
  });

  it("renders product image", () => {
    render(<SuggestionItem product={mockProduct} onAddClick={vi.fn()} />);

    expect(
      screen.getByRole("img", {
        name: "Belle Maxitrosa",
      }),
    ).toBeInTheDocument();
  });

  it("renders product price", () => {
    render(<SuggestionItem product={mockProduct} onAddClick={vi.fn()} />);

    expect(screen.getByText("199 kr")).toBeInTheDocument();
  });

  it("renders saving text when saving exists", () => {
    render(<SuggestionItem product={mockProduct} onAddClick={vi.fn()} />);

    expect(screen.getByText("Spara 40 kr")).toBeInTheDocument();
  });

  it("does not render saving text when saving is missing", () => {
    const productWithoutSaving = {
      ...mockProduct,
      saving: undefined,
    };

    render(
      <SuggestionItem product={productWithoutSaving} onAddClick={vi.fn()} />,
    );

    expect(screen.queryByText(/Spara/i)).not.toBeInTheDocument();
  });

  it("renders offer text when present", () => {
    render(<SuggestionItem product={mockProduct} onAddClick={vi.fn()} />);

    expect(screen.getByText("4 för 3")).toBeInTheDocument();
  });

  it("does not render offer text when missing", () => {
    const productWithoutOffer = {
      ...mockProduct,
      offerText: undefined,
    };

    render(
      <SuggestionItem product={productWithoutOffer} onAddClick={vi.fn()} />,
    );

    expect(screen.queryByText("4 för 3")).not.toBeInTheDocument();
  });

  it("calls onAddClick when cart button is clicked", () => {
    const onAddClick = vi.fn();

    render(<SuggestionItem product={mockProduct} onAddClick={onAddClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onAddClick).toHaveBeenCalledTimes(1);
  });
});
