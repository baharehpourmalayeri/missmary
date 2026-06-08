type QuerySelectorProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};
function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuerySelectorProps) {
  return (
    <div className="flex flex-row justify-between items-center gap-3">
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-grey"
        onClick={onDecrease}
      >
        <img src="/src/assets/icons/minus.svg" alt="minus icon" />
      </button>

      <span className="w-8 text-center font-black">{quantity}</span>

      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-grey"
        onClick={onIncrease}
      >
        <img src="/src/assets/icons/plus.svg" alt="plus icon" />
      </button>
    </div>
  );
}

export { QuantitySelector };
