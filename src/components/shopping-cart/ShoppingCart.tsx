import { useEffect, useState } from "react";
import { Button } from "../shared/Button";
import { SuggestionSection } from "../suggestion-section/SuggestionSection";
import ShoppingCartItem from "./ShoppingCartItem";
import {
  shoppingCartService,
  type CartItem,
} from "../../services/ShoppingCart";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    shoppingCartService.getItems(),
  );
  const [totalPrice, setTotalPrice] = useState<number>(
    shoppingCartService.getTotal(),
  );

  useEffect(() => {
    shoppingCartService.subscribe((items) => {
      setCartItems(items);
      setTotalPrice(shoppingCartService.getTotal());
    });
  }, []);

  return (
    <div className="fixed inset-0 z-60 bg-black/80">
      <section className="fixed lg:top-0 lg:w-160 lg:h-full z-80 bg-white px-6 py-6 flex flex-col overflow-x-hidden bottom-0 left-0 right-0 mt-24 lg:mt-0 lg:left-auto focus:outline-none">
        <div className="w-1/2 h-1 shrink-0 cursor-grab active:cursor-grabbing rounded-full bg-grey -translate-y-5 mb-0 mt-4 mx-auto lg:hidden" />
        <button
          type="button"
          className="absolute top-6 right-4 cursor-pointer z-10"
        >
          <img
            src="../src/assets/icons/close.svg"
            alt="Close"
            className="w-8 h-8"
          />
        </button>
        <div className="flex flex-col max-h-[calc(100dvh-64px)]">
          <div className="overflow-y-scroll border-b border-grey pb-4">
            <div className="relative hidden lg:block">
              <h2 className="font-bold">Din varukorg</h2>
            </div>

            <div className="justify-center pb-4 lg:pb-6 border-b border-grey mb-4"></div>
            <div className="flex items-center justify-center gap-2 py-3 px-4 bg-grey mb-4">
              <img
                src="../src/assets/icons/delivery.svg"
                alt="Truck icon"
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
              <span className="text-sm lg:text-lg text-black">
                GRATIS frakt från 900&nbsp;kr! Du behöver spendera 551&nbsp;kr
                för att få gratis frakt.
              </span>
            </div>
            <section className="flex w-full flex-col items-center gap-4 mb-6">
              {cartItems.map((item) => (
                <ShoppingCartItem
                  key={item.id}
                  id={item.id}
                  imageSrc={item.imageUrl}
                  name={item.name}
                  size={item.size}
                  color={item.color}
                  quantity={item.quantity}
                  availabilityText={item.availabilityText || "I lager"}
                  price={item.price * item.quantity}
                />
              ))}
            </section>
            <SuggestionSection />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="hidden lg:flex lg:flex-col lg:w-full lg:gap-3 lg:mt-2">
              <div className="flex flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <span>Delsumma</span>
                  <span>{totalPrice} kr</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Leverans</span>
                  <span>49 kr</span>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <span className="font-bold">Totalsumma</span>
                <span className="font-bold">{totalPrice + 49} kr</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Button customClass="" label="Gå till kassan" />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { ShoppingCart };
