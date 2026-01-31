import { vendorData } from "../db/mock-db";
import { ProductType as CartItem } from "@/utils/types";


// Mock API function for fetching products
export const fetchProducts = async (vendorSlug: string): Promise<CartItem[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
    const vendor = vendorData.find((v) => v.slug === vendorSlug);
    return vendor ? vendor.products : [];
  } catch (error) {
    console.error("fetchProducts: Error fetching products", error);
    throw new Error("Failed to fetch products");
  }
};
