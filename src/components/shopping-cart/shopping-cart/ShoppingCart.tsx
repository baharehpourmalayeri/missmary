import { useEffect, useState } from "react";
import { Button } from "../../shared/Button";
import { SuggestionSection } from "../../suggestion-section/SuggestionSection";
import ShoppingCartItem from "../shopping-cart-item/ShoppingCartItem";
import {
  shoppingCartService,
  type CartItem,
} from "../../../services/ShoppingCart";
import { DeliveryBanner } from "../DeliveryBanner";
import { SummarySection } from "../summary-section/SummarySection";
import { PaymentMethods } from "../PaymentMethods";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    shoppingCartService.getItems(),
  );

  useEffect(() => {
    shoppingCartService.subscribe((items) => {
      setCartItems(items);
    });
  }, []);

  return (
    <div className="fixed inset-0 z-60 bg-black/80">
      <section className="fixed lg:top-0 lg:w-170 lg:h-full z-80 bg-white px-6 py-6 flex flex-col overflow-x-hidden bottom-0 left-0 right-0 mt-24 lg:mt-0 lg:left-auto focus:outline-none">
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
            <DeliveryBanner />
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
            <SummarySection />
            <div className="flex flex-col gap-4 mt-4">
              <Button customClass="" label="Gå till kassan" />
              <PaymentMethods />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { ShoppingCart };
