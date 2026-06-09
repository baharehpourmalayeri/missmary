import type { Product } from "../types/product";

export interface CartItem extends Product {
  quantity: number;
}

export class ShoppingCartService {
  private items: CartItem[] = [
    {
      id: "6",
      type: "BRA",
      name: "Belle bh",
      size: "85xE",
      color: "Dimrosa",
      price: 599,
      offerText: "",
      availabilityText: "I lager. Skickas inom 1-2 veckor.",
      imageUrl: "../src/assets/images/product-images/6.jpg",
      quantity: 1,
    },
  ];

  private subscribers: Array<(items: CartItem[]) => void> = [];

  private notifySubscribers(): void {
    const snapshot = [...this.items];
    this.subscribers.forEach((callback) => callback(snapshot));
  }

  subscribe(callback: (items: CartItem[]) => void): () => void {
    this.subscribers.push(callback);
    callback([...this.items]);

    return () => {
      this.subscribers = this.subscribers.filter(
        (subscriber) => subscriber !== callback,
      );
    };
  }

  addProduct(product: Product, quantity = 1): CartItem[] {
    if (quantity <= 0) return this.items;

    const existingItem = this.items.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...product, quantity });
    }

    this.notifySubscribers();

    return this.items;
  }

  increaseProductQuantity(productId: string, quantity = 1): CartItem[] {
    const existingItem = this.items.find((item) => item.id === productId);
    if (!existingItem) return this.items;

    existingItem.quantity += quantity;
    this.notifySubscribers();

    return this.items;
  }

  decreaseProductQuantity(productId: string, quantity = 1): CartItem[] {
    const existingItem = this.items.find((item) => item.id === productId);
    if (!existingItem) return this.items;

    existingItem.quantity -= quantity;
    if (existingItem.quantity <= 0) {
      this.items = this.items.filter((item) => item.id !== productId);
    }

    this.notifySubscribers();

    return this.items;
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  getTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }
}

export const shoppingCartService = new ShoppingCartService();
