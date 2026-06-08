import { SizeSelector } from "./SizeSelector";
import { Button } from "../shared/Button";

type SizeSelectionSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

function SizeSelectionSheet({ isOpen, onClose }: SizeSelectionSheetProps) {
  return (
    <div
      className={`
    fixed lg:top-0 lg:w-1/3 lg:h-full z-80 bg-white px-6 py-6 flex flex-col overflow-x-hidden bottom-0 left-0 right-0 lg:left-auto mt-24 lg:mt-0 focus:outline-none
    transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-y-0 lg:translate-x-0 lg:translate-y-0" : "translate-y-full lg:translate-x-full lg:translate-y-0"}
  `}
    >
      <div className="w-1/2 h-1 shrink-0 cursor-grab active:cursor-grabbing rounded-full bg-grey -translate-y-5 mb-0 mt-4 mx-auto lg:hidden" />
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-4 cursor-pointer z-10"
      >
        <img
          src="../src/assets/icons/close.svg"
          alt="Close"
          className="w-8 h-8"
        />
      </button>
      <div className="flex flex-col-reverse">
        <SizeSelector productType="bra" />
      </div>
      <Button customClass="" label="Välj Storlek" disabled={true} />
      <a href="#" className="mt-4 flex w-fit items-center gap-3 text-black">
        <img
          src="../src/assets/icons/ruler.svg"
          alt=""
          className="h-6 w-auto"
        />

        <span className="underline underline-offset-2 text-lg cursor-pointer">
          Se Storlekstabell
        </span>
      </a>
    </div>
  );
}

export { SizeSelectionSheet };
