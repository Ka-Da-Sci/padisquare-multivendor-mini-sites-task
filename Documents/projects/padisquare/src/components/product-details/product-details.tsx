"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { productSchema } from "@/lib/zod-schemas";
import { ProductType as CartItem } from "@/utils/types";
import ProductDetailsInnerWrapper from "./product-details-inner-wrapper";
import Spinner from "../spinner";
import { fetchProducts } from "@/services/fetch-products";

// Main component for rendering a single product page based on dynamic ID
const ProductDetails = () => {
  const params = useParams();
  const id = params.id as string;
  const slug = params.vendorSlug as string;

  // Fetch products using TanStack Query
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<CartItem[], Error>({
    queryKey: ["products", slug],
    queryFn: () => fetchProducts(slug),
  });

  // Display loading state with spinner while fetching products
  if (isLoading) {
    return (
      <div className="w-full mx-auto flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  // Handle fetch errors or missing product data
  if (error || !products) {
    return (
      <div className="w-full mx-auto flex justify-center items-center h-screen">
        <p className="font-inter text-sm text-red-500">
          Error loading product: {error?.message || "Product not found"}
        </p>
      </div>
    );
  }

  const product = products.find((p) => p.id === id);

  // Display not found state for invalid product ID
  if (!product) {
    return (
      <div className="w-full mx-auto flex justify-center items-center h-screen">
        <p className="font-inter text-sm text-red-500">Product not found</p>
      </div>
    );
  }

  // Validate product data and render ProductDetailsInnerWrapper
  let validatedProduct;
  try {
    validatedProduct = productSchema.parse(product);
  } catch (validationError) {
    console.error("Product validation failed:", validationError);
    return (
      <div className="w-full mx-auto flex justify-center items-center h-screen">
        <p className="font-inter text-sm text-red-500">Invalid product data</p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto flex">
      
      <ProductDetailsInnerWrapper product={validatedProduct} />
    </div>
  );
};

export default ProductDetails;
