import SuggestionItem from "./SuggestionItem";

function SuggestionSection() {
  return (
    <div className="flex flex-col gap-2 bg-grey pt-2 pb-2 w-full">
      <div className="text-center w-full">
        <h3 className="font-bold mb-1">Komplettera ditt köp</h3>
      </div>
      <div className="flex flex-row gap-3 w-full justify-center">
        <SuggestionItem
          id="10"
          imageSrc="../src/assets/images/product-images/10.jpg"
          name="Belle maxitrosa"
          price={199}
          offerText="4 för 3"
        />
        <SuggestionItem
          id="14"
          imageSrc="../src/assets/images/product-images/14.jpg"
          name="Organic Cotton maxitrosa"
          price={149}
          offerText="4 för 3"
        />
        <SuggestionItem
          id="15"
          imageSrc="../src/assets/images/product-images/15.jpg"
          name="Recycled Comfort maxitrosa"
          price={139}
          offerText="4 för 3"
        />
      </div>
    </div>
  );
}

export { SuggestionSection };
