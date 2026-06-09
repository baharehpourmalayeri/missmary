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
  offerText: {
    label: "4 för 3",
    type: "campaign",
  },
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

  it("renders offer text when present", () => {
    render(<SuggestionItem product={mockProduct} onAddClick={vi.fn()} />);

    expect(screen.getAllByText("4 för 3").length).toBeGreaterThan(0);
  });

  it("does not render offer text when missing", () => {
    const productWithoutOffer: Product = {
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
