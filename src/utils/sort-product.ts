import { ProductType } from "@/utils/types";

export function sortProducts(products: ProductType[], option: string): ProductType[] {
  const sorted = [...products];
  if (option === 'price-low') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (option === 'price-high') {
    sorted.sort((a, b) => b.price - a.price);
  } else if (option === 'recent') {
    sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  return sorted;
}