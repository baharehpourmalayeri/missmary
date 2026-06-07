import { Button } from "../shared/Button";
import { SuggestionSection } from "../suggestion-section/SuggestionSection";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart() {
  return (
    <section className="fixed z-80 bg-white px-6 py-6 flex flex-col overflow-x-hidden bottom-0 left-0 right-0 mt-24 focus:outline-none">
      <div className="w-1/2 h-1 shrink-0 cursor-grab active:cursor-grabbing rounded-full bg-grey -translate-y-5 mb-0 mt-4 mx-auto" />
      <button
        type="button"
        className="absolute top-6 right-6 cursor-pointer z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="w-4 h-4"
        >
          <path d="M15.4812 1.00889L0.99311 15.7261C0.855879 15.8655 0.686154 15.9605 0.521274 15.9902C0.356394 16.0198 0.209865 15.9817 0.113921 15.8843C0.0179772 15.7868 -0.0195217 15.638 0.00967332 15.4705C0.0388684 15.303 0.132366 15.1306 0.269598 14.9912L14.7577 0.273934C14.895 0.134532 15.0647 0.0395556 15.2296 0.00989885C15.3944 -0.0197579 15.541 0.0183345 15.6369 0.115796C15.7329 0.213257 15.7704 0.362103 15.7412 0.52959C15.712 0.697078 15.6185 0.869487 15.4812 1.00889Z"></path>
          <path d="M15.0067 15.7235L0.516161 1.00865C0.378906 0.869272 0.285393 0.696891 0.256193 0.529431C0.226993 0.361971 0.264498 0.213149 0.360458 0.115704C0.456418 0.0182586 0.602972 -0.0198272 0.767879 0.0098247C0.932787 0.0394766 1.10254 0.134437 1.2398 0.273817L15.7304 14.9887C15.8676 15.128 15.9611 15.3004 15.9903 15.4679C16.0195 15.6354 15.982 15.7842 15.8861 15.8816C15.7901 15.9791 15.6435 16.0171 15.4786 15.9875C15.3137 15.9578 15.144 15.8629 15.0067 15.7235Z"></path>
        </svg>
      </button>
      <div className="flex flex-col max-h-[calc(100dvh-64px)]">
        <div className="overflow-y-scroll border-b border-grey">
          <div className="justify-center pb-4 border-b border-grey mb-4"></div>
          <div className="flex items-center justify-center gap-2 py-3 px-4 bg-grey mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-neutral-900 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              ></path>
            </svg>
            <span className="text-sm text-black">
              GRATIS frakt från 900&nbsp;kr! Du behöver spendera 551&nbsp;kr för
              att få gratis frakt.
            </span>
          </div>
          <section className="flex w-full flex-col items-center gap-4 mb-6">
            <ShoppingCartItem
              id="6"
              imageSrc="../src/assets/images/product-images/6.jpg"
              name="Belle bh"
              size="85xE"
              color="Dimrosa"
              availabilityText="I lager. Skickas inom 1-2 veckor."
              price={599}
            />
          </section>
          <SuggestionSection />
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
    </section>
  );
}

export { ShoppingCart };
