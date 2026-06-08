type SuggestionItemProps = {
  imageSrc: string;
  id: string;
  name: string;
  price: number;
  offerText?: string;
  onAddClick: () => void;
};

function SuggestionItem({
  imageSrc,
  id,
  name,
  price,
  offerText,
  onAddClick,
}: SuggestionItemProps) {
  return (
    <div attr-id={id} className="flex flex-col gap-1 w-25 lg:w-30">
      <div className="relative">
        <button
          type="button"
          onClick={onAddClick}
          className="bg-white rounded-full w-9 h-9 flex items-center justify-center absolute top-1 right-1 cursor-pointer"
        >
          <img
            src="/src/assets/icons/cart.svg"
            alt="Cart"
            className="h-5 w-5"
          />
        </button>
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-32 lg:h-37 object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="font-bold line-clamp-2 lg:line-clamp-3 leading-3.5 lg:leading-4 flex-1 lg:text-center">
          {name}
        </h3>
        <div className="flex flex-row justify-between items-center">
          <div className="w-9 h-4 lg:w-12 lg:h-5 bg-light-green rounded-sm text-xs lg:text-sm text-center items-center justify-center flex">
            {offerText}
          </div>
          <div className="">{price} kr</div>
        </div>
      </div>
    </div>
  );
}

export default SuggestionItem;
