import { useState } from "react";
import SuggestionItem from "./SuggestionItem";
import { SizeSelectionSheet } from "../shopping-cart/SizeSelectionSheet";
import { shoppingCartService, type Product } from "../../services/ShoppingCart";

function SuggestionSection() {
  const [isSizeSheetOpen, setIsSizeSheetOpen] = useState(false);

  const handleAddClick = (product: Product) => {
    shoppingCartService.addProduct(product, 1);
  };

  return (
    <div className="flex flex-col gap-2 bg-grey pt-2 pb-2 w-full">
      <div className="text-center w-full">
        <h3 className="font-bold mb-1">Komplettera ditt köp</h3>
      </div>
      <div className="flex flex-row gap-6 w-full justify-center">
        <SuggestionItem
          id="10"
          imageSrc="../src/assets/images/product-images/10.jpg"
          name="Belle maxitrosa"
          price={199}
          offerText="4 för 3"
          onAddClick={() =>
            handleAddClick({
              id: "10",
              name: "Belle maxitrosa",
              price: 199,
              imageUrl: "../src/assets/images/product-images/10.jpg",
              color: "Dimrosa",
              size: "40/42",
            })
          }
        />
        <SuggestionItem
          id="14"
          imageSrc="../src/assets/images/product-images/14.jpg"
          name="Organic Cotton maxitrosa"
          price={149}
          offerText="4 för 3"
          onAddClick={() =>
            handleAddClick({
              id: "14",
              name: "Organic Cotton maxitrosa",
              price: 149,
              imageUrl: "../src/assets/images/product-images/14.jpg",
              color: "Dimrosa",
              size: "36/38",
            })
          }
        />
        <SuggestionItem
          id="15"
          imageSrc="../src/assets/images/product-images/15.jpg"
          name="Recycled Comfort maxitrosa"
          price={139}
          offerText="4 för 3"
          onAddClick={() =>
            handleAddClick({
              id: "15",
              name: "Recycled Comfort maxitrosa",
              price: 139,
              imageUrl: "../src/assets/images/product-images/15.jpg",
              color: "Dimrosa",
              size: "38/40",
            })
          }
        />
        <SizeSelectionSheet
          isOpen={isSizeSheetOpen}
          onClose={() => setIsSizeSheetOpen(false)}
        />
      </div>
    </div>
  );
}

export { SuggestionSection };
