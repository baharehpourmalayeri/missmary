type ButtonProps = {
  customClass: string;
  label: string;
};

function Button({ customClass, label }: ButtonProps) {
  return (
    <a
      href="#"
      className={`flex h-12 w-full items-center justify-center rounded-md bg-primary px-5 text-white font-bold transition-colors hover:opacity-90 ${customClass ? customClass : ""}`}
    >
      <span className="font-bold whitespace-nowrap">{label}</span>
    </a>
  );
}

export { Button };
