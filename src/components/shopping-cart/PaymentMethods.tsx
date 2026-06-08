function PaymentMethods() {
  return (
    <section className="flex flex-row gap-3 items-center justify-center">
      <img
        src="../src/assets/images/payment-methods/Klarna.svg"
        alt="Klarna"
        className="h-5 w-auto"
      />
      <img
        src="../src/assets/images/payment-methods/Swish.svg"
        alt="Swish"
        className="h-5 w-auto"
      />
      <img
        src="../src/assets/images/payment-methods/Visa.svg"
        alt="Visa"
        className="h-5 w-auto"
      />
      <img
        src="../src/assets/images/payment-methods/Mastercard.svg"
        alt="Mastercard"
        className="h-5 w-auto"
      />
    </section>
  );
}
export { PaymentMethods };
