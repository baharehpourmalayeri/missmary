import type { Product, ProductType } from "../types/product";

export class SuggestionProductService {
  private panties: Product[] = [
    {
      id: "10",
      type: "PANTY",
      name: "Belle maxitrosa",
      price: 199,
      imageUrl: "../src/assets/images/product-images/10.jpg",
      color: "Dimrosa",
      size: "40/42",
      offerText: {
        label: "4 för 3",
        type: "campaign",
      },
    },
    {
      id: "14",
      type: "PANTY",
      name: "Organic Cotton maxitrosa",
      price: 149,
      imageUrl: "../src/assets/images/product-images/14.jpg",
      color: "Dimrosa",
      size: "36/38",
      offerText: {
        label: "4 för 3",
        type: "campaign",
      },
    },
    {
      id: "17",
      type: "PANTY",
      name: "4-pack Recycled Comfort maxitrosa",
      price: 439,
      imageUrl: "../src/assets/images/product-images/17.jpg",
      color: "Dimrosa",
      size: "38/40",
      offerText: {
        label: "Paketpris",
        type: "bundle",
      },
    },
  ];

  private bra: Product[] = [
    {
      id: "3",
      type: "BRA",
      name: "Queen bh",
      size: "85xE",
      color: "Dimrosa",
      price: 649,
      availabilityText: "I lager. Skickas inom 1-2 veckor.",
      imageUrl: "../src/assets/images/product-images/3.jpg",
    },
    {
      id: "4",
      type: "BRA",
      name: "Broderie Anglaise bh",
      size: "85xE",
      color: "Dimrosa",
      price: 549,
      availabilityText: "I lager.",
      imageUrl: "../src/assets/images/product-images/4.jpg",
    },
    {
      id: "6",
      type: "BRA",
      name: "Belle bh",
      size: "85xE",
      color: "Dimrosa",
      price: 599,
      availabilityText: "I lager. Skickas inom 1-2 veckor.",
      imageUrl: "../src/assets/images/product-images/6.jpg",
    },
  ];

  getSuggestedItems(type: ProductType): Product[] {
    if (type === "BRA") return this.panties;
    else return this.bra;
  }
}

export const suggestionProductService = new SuggestionProductService();
