import { ProductType as CartItem } from "@/utils/types";

// Mock API function for adding to cart
export const addToCartApi = async (item: CartItem): Promise<CartItem> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  return item;
};
