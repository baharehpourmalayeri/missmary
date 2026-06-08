import { SizeButton } from "../shared/SizeButton";

type ProductType = "bra" | "panty" | "clothing";

const sizeOptions = {
  bra: [
    {
      title: "Kupa",
      sizes: ["B", "C", "D", "E", "F", "G", "H"],
    },
    {
      title: "Storlek",
      sizes: ["75", "80", "85", "90", "95", "100", "105"],
    },
  ],
  panty: [
    {
      title: "Välj storlek",
      sizes: ["34/36", "38/40", "42/44", "46/48", "50/52", "54/56"],
    },
  ],
  clothing: [
    {
      title: "Välj storlek",
      sizes: ["38", "40", "42", "44", "46", "48", "50", "52", "54"],
    },
  ],
};

type SizeSelectorProps = {
  productType: ProductType;
};

function SizeSelector({ productType }: SizeSelectorProps) {
  const groups = sizeOptions[productType];

  return (
    <div className="flex w-full flex-col">
      {groups.map((group) => (
        <div key={group.title} className="flex w-full flex-col gap-y-3 py-5">
          <span className="font-bold">{group.title}</span>

          <div className="flex w-full flex-wrap gap-3">
            {group.sizes.map((size) => (
              <SizeButton key={size} label={size} selected={false} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export { SizeSelector };
