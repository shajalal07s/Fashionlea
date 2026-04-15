import { useCallback } from "react";

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: string;
  priceNumeric: number;
  quantity: number;
}

export const useCart = () => {
  const addToCart = useCallback(
    (product: Omit<CartItem, "quantity">) => {
      try {
        // Get existing cart
        const existingCart = localStorage.getItem("cart");
        let items: CartItem[] = [];

        if (existingCart) {
          items = JSON.parse(existingCart);
        }

        // Check if product already exists
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          // Increase quantity if already in cart
          existingItem.quantity += 1;
        } else {
          // Add new item with quantity 1
          items.push({
            ...product,
            quantity: 1,
          });
        }

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(items));

        // Dispatch custom event to notify other components
        window.dispatchEvent(new Event("cartUpdated"));

        return true;
      } catch (error) {
        console.error("Error adding to cart:", error);
        return false;
      }
    },
    []
  );

  return { addToCart };
};
