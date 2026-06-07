function QuantitySelector() {
  return (
    <div className="flex flex-row justify-between items-center gap-3">
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-grey"
      >
        <img src="/src/assets/icons/minus.svg" alt="minus icon" />
      </button>

      <span className="w-8 text-center text-sm font-black">1</span>

      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-grey"
      >
        <img src="/src/assets/icons/plus.svg" alt="plus icon" />
      </button>
    </div>
  );
}

export { QuantitySelector };
