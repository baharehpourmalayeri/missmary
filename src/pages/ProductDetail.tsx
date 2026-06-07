function ProductDetail() {
  return (
    <>
      <img
        src="/src/assets/product-details/product-1-mobile.png"
        className="w-full lg:hidden"
      />
      <img
        src="/src/assets/product-details/product-1-desktop.png"
        className="w-full hidden lg:block"
      />
    </>
  );
}

export { ProductDetail };
