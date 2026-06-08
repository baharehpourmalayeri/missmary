type ButtonProps = {
  customClass: string;
  label: string;
  disabled?: boolean;
};

function Button({ customClass, label, disabled }: ButtonProps) {
  return (
    <a
      href="#"
      className={`flex h-12 w-full items-center justify-center rounded-md  px-5  font-bold transition-colors hover:opacity-90 ${customClass ? customClass : ""} ${disabled ? "bg-grey cursor-not-allowed text-black" : "bg-primary cursor-pointer text-white"}`}
    >
      <span className="font-bold whitespace-nowrap">{label}</span>
    </a>
  );
}

export { Button };
