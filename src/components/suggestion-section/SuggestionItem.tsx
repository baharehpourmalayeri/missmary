import type { Product } from "../../types/product";

type SuggestionItemProps = {
  product: Product;
  onAddClick: () => void;
};

const tagStyles = {
  campaign: "bg-white/75 shadow-sm",
  bundle: "bg-light-green/75 shadow-sm",
};

function SuggestionItem({ product, onAddClick }: SuggestionItemProps) {
  return (
    <div attr-id={product.id} className="flex flex-col gap-1 w-25 lg:w-30">
      <div className="relative group">
        <button
          type="button"
          onClick={onAddClick}
          className="bg-white/75 rounded-full w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center absolute top-1 right-1 cursor-pointer"
        >
          <img
            src="/src/assets/icons/cart.svg"
            alt="Cart"
            className="h-5 w-5"
          />
        </button>
        {product.offerText && (
          <div
            className={`
              ${tagStyles[product.offerText.type]}
              absolute top-1 left-1 hidden min-w-9 rounded-sm px-1 text-xs text-center lg:flex lg:min-w-12 lg:text-sm
              items-center justify-center
            `}
          >
            {product.offerText.label}
          </div>
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          title={product.name}
          className="w-full h-32 lg:h-37 object-cover cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="font-bold line-clamp-2 lg:line-clamp-2 leading-4 lg:leading-5 flex-1">
          {product.name}
        </h3>
        <div className="flex flex-col gap-0">
          {product.offerText && (
            <div
              className={`
                ${tagStyles[product.offerText.type]}
                self-start items-center justify-center
                rounded-sm px-1.5 py-0.5
                text-xs lg:text-sm
                whitespace-nowrap lg:hidden
              `}
            >
              {product.offerText.label}
            </div>
          )}
          <div className="flex flex-row justify-between">
            <div className="">{product.price} kr</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestionItem;
