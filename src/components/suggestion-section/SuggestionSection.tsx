import { useState } from "react";
import SuggestionItem from "./SuggestionItem";
import { SizeSelectionSheet } from "../shopping-cart/SizeSelectionSheet";

function SuggestionSection() {
  const [isSizeSheetOpen, setIsSizeSheetOpen] = useState(false);
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
          onAddClick={() => setIsSizeSheetOpen(true)}
        />
        <SuggestionItem
          id="14"
          imageSrc="../src/assets/images/product-images/14.jpg"
          name="Organic Cotton maxitrosa"
          price={149}
          offerText="4 för 3"
          onAddClick={() => setIsSizeSheetOpen(true)}
        />
        <SuggestionItem
          id="15"
          imageSrc="../src/assets/images/product-images/15.jpg"
          name="Recycled Comfort maxitrosa"
          price={139}
          offerText="4 för 3"
          onAddClick={() => setIsSizeSheetOpen(true)}
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
