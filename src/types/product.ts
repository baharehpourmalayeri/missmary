export type ProductType = "BRA" | "PANTY" | "CLOTHING";

type ProductTag = {
  label: string;
  type: "campaign" | "bundle";
};

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  size: string;
  color: string;
  price: number;
  offerText?: ProductTag;
  availabilityText?: string;
  imageUrl: string;
}
