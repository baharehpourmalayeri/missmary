function DeliveryBanner() {
  return (
    <div className="flex items-center justify-center gap-2 py-3 px-4 bg-grey mb-4">
      <img
        src="../src/assets/icons/delivery.svg"
        alt="Truck icon"
        className="w-5 h-5 lg:w-6 lg:h-6"
      />
      <span>
        GRATIS frakt från 900&nbsp;kr! Du behöver spendera 301&nbsp;kr för att
        få gratis frakt.
      </span>
    </div>
  );
}
export { DeliveryBanner };
