import { useEffect, useState } from "react";
import { shoppingCartService } from "../../../services/ShoppingCart";

function SummarySection() {
  const [totalPrice, setTotalPrice] = useState<number>(
    shoppingCartService.getTotal(),
  );

  useEffect(() => {
    shoppingCartService.subscribe(() => {
      setTotalPrice(shoppingCartService.getTotal());
    });
  }, []);
  return (
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
  );
}
export { SummarySection };
