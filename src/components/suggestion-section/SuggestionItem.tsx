type SuggestionItemProps = {
  imageSrc: string;
  id: string;
  name: string;
  price: number;
  offerText?: string;
};

function SuggestionItem({
  imageSrc,
  id,
  name,
  price,
  offerText,
}: SuggestionItemProps) {
  return (
    <div attr-id={id} className="flex flex-col gap-1 w-25">
      <div className="relative">
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center absolute top-1 right-1">
          <img
            src="/src/assets/icons/cart.svg"
            alt="Cart"
            className="w-4 h-4"
          />
        </div>
        <img src={imageSrc} alt={name} className="w-full h-32 object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold line-clamp-2">{name}</h3>
        <div className="flex flex-row justify-between items-center">
          <div className="w-9 h-4 bg-light-green rounded-sm text-xs text-center items-center justify-center flex">
            {offerText}
          </div>
          <div className="">{price} kr</div>
        </div>
      </div>
    </div>
  );
}

export default SuggestionItem;
