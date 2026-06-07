import { QuantitySelector } from "./QuantitySelector";

type ShoppingCartItemProps = {
  imageSrc: string;
  id: string;
  name: string;
  size: string;
  color: string;
  availabilityText: string;
  price: number;
};
function ShoppingCartItem({
  imageSrc,
  id,
  name,
  size,
  color,
  availabilityText,
  price,
}: ShoppingCartItemProps) {
  return (
    <div attr-id={id} className="flex w-full flex-row gap-4 h-34">
      <a href="/">
        <img src={imageSrc} alt={name} className="h-full w-25 object-cover" />
      </a>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="col-start-2 col-end-4 row-start-1 text-sm font-bold">
            {name}
          </h2>
          <div className="row-start-3 flex flex-row">
            <span className="text-sm mr-2 after:ml-2 after:content-['|']">
              {size}
            </span>
            <span className="text-sm">{color}</span>
          </div>

          <div className="col-start-2 col-end-4 row-start-4 mt-1">
            <span className="inline bg-[#D7EED4] px-2 py-1 text-sm text-black">
              {availabilityText}
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center align-center">
          <QuantitySelector />
          <div className="flex">
            <span className="font-bold">{price} kr</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
