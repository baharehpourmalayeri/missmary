import SuggestionItem from "./SuggestionItem";
import { shoppingCartService } from "../../services/ShoppingCart";
import { suggestionProductService } from "../../services/SuggestionProduct";
import { useState } from "react";
import type { Product } from "../../types/product";

function SuggestionSection() {
  const [boxTitle, setBoxTitle] = useState("Matchar din BH");
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>(
    suggestionProductService.getSuggestedItems("BRA"),
  );

  const handleAddClick = (product: Product) => {
    shoppingCartService.addProduct(product, 1);
    setBoxTitle(
      product.type === "BRA" ? "Matchar din BH" : "Komplettera ditt köp",
    );

    setSuggestedProducts(
      suggestionProductService.getSuggestedItems(product.type),
    );
  };

  return (
    <div className="flex flex-col gap-2 bg-grey p-2 w-full">
      <div className="text-center w-full">
        <h3 className="font-bold mb-1">{boxTitle}</h3>
      </div>
      <div className="flex flex-row gap-6 w-full justify-center">
        {suggestedProducts.map((suggestedProduct) => (
          <SuggestionItem
            product={suggestedProduct}
            onAddClick={() => handleAddClick(suggestedProduct)}
          />
        ))}
      </div>
    </div>
  );
}

export { SuggestionSection };
