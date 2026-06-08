type SizeButtonProps = {
  label: string;
  selected?: boolean;
};

function SizeButton({ label, selected }: SizeButtonProps) {
  return (
    <button
      type="button"
      className={`flex h-14 w-14 items-center justify-center rounded-full border-2 font-bold cursor-pointer ${selected ? "bg-black text-white" : ""}`}
    >
      {label}
    </button>
  );
}

export { SizeButton };
