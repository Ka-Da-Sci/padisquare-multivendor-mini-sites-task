"use client";

import { motion } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SectionAnimatedWrapper from "../section-animated-wrapper";
import Product from "./product";
import { fetchProducts } from "@/services/fetch-products";
import validateProducts from "@/utils/validate-products";
import Spinner from "../spinner";
import SearchBar from "../search-bar";
import SortSelect from "../sort-select";
import EmptyState from "../empty-state";
import { sortProducts } from "@/lib/utils";
import Pagination from "../pagination";

// Main component for rendering the products section
const ProductsGrid = ({ slug }: { slug: string }) => {
  // Fetch products using TanStack Query and validate them
  const {
    data: products = [],
    isLoading,
    isFetched,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await fetchProducts(slug);
      return validateProducts(products);
    },
  });

  const ref = useRef(null);
  // const isInView = useInView(ref, { once: false, amount: 0.05 });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    result = sortProducts(result, sortOption);
    return result;
  }, [products, searchTerm, sortOption]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (isFetched && !products.length) return <EmptyState message="No products available." />;
  
  // Render loading state with spinner
  if (isLoading) {
    return (
      <SectionAnimatedWrapper
        sectionId="products"
        sectionClassName="w-full bg-background-primary scroll-mt-10"
        classNamePlus="flex-col gap-4"
      >
        {/* Header section with title and subtitle */}
        <div className="flex max-sm:items-center flex-col items-start max-md:justify-center max-md:items-center">
          <div className="flex gap-2 flex-col w-full max-w-200 items-center antialiased uppercase text-center text-[#1E1E1E] font-['Montserrat']">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Top Picks for You
            </h1>
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-normal text-xs sm:text-sm">
                Find Your Perfect Gadget Among Our Favorites
              </h2>
              <div className="overflow-hidden relative z-0 dynamic-hr w-[95%] h-1 rounded-l-full rounded-r-full bg-transparent before:z-20 before:absolute before:top-0 before:left-0 before:content-[''] before:rounded-l-full before:rounded-r-full before:bg-[#ff4500] before:w-full before:h-full after:z-10 after:absolute after:top-0 after:left-0 after:content-[''] after:rounded-l-full after:rounded-r-full after:bg-[#ffa17f] after:w-full after:h-full"></div>
            </div>
          </div>
        </div>

        {/* Display spinner during loading */}
        <Spinner />
      </SectionAnimatedWrapper>
    );
  }
  
  // Render error state with message
  if (error) {
    return (
      <SectionAnimatedWrapper
        sectionId="products"
        sectionClassName="w-full bg-background-primary scroll-mt-10"
        classNamePlus="flex-col gap-4"
      >
        <div className="flex max-sm:items-center flex-col items-start max-md:justify-center max-md:items-center">
          <div className="flex gap-2 flex-col w-full max-w-200 items-center antialiased uppercase text-center text-[#1E1E1E] font-['Montserrat']">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Top Picks for You
            </h1>
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-normal text-xs sm:text-sm">
                Find Your Perfect Gadget Among Our Favorites
              </h2>
              <div className="overflow-hidden relative z-0 dynamic-hr w-[95%] h-1 rounded-l-full rounded-r-full bg-transparent before:z-20 before:absolute before:top-0 before:left-0 before:content-[''] before:rounded-l-full before:rounded-r-full before:bg-[#ff4500] before:w-full before:h-full after:z-10 after:absolute after:top-0 after:left-0 after:content-[''] after:rounded-l-full after:rounded-r-full after:bg-[#ffa17f] after:w-full after:h-full"></div>
            </div>
          </div>
        </div>
        <div className="text-center text-red-500">
          Error loading products: {error.message}
        </div>
      </SectionAnimatedWrapper>
    );
  }

  console.log(products);

  return (
    <SectionAnimatedWrapper
      sectionId="products"
      sectionClassName="w-full bg-background-primary scroll-mt-10"
      classNamePlus="flex-col gap-4"
    >
      {/* Header section with title and subtitle */}
      <div className="flex max-sm:items-center flex-col items-start max-md:justify-center max-md:items-center">
        <div className="flex gap-2 flex-col w-full max-w-200 items-center antialiased uppercase text-center text-[#1E1E1E] font-['Montserrat']">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Top Picks for You
          </h1>
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-normal text-xs sm:text-sm">
              Find Your Perfect Gadget Among Our Favorites
            </h2>
            <div className="overflow-hidden relative z-0 dynamic-hr w-[95%] h-1 rounded-l-full rounded-r-full bg-transparent before:z-20 before:absolute before:top-0 before:left-0 before:content-[''] before:rounded-l-full before:rounded-r-full before:bg-[#ff4500] before:w-full before:h-full after:z-10 after:absolute after:top-0 after:left-0 after:content-[''] after:rounded-l-full after:rounded-r-full after:bg-[#ffa17f] after:w-full after:h-full"></div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between mb-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <SortSelect value={sortOption} onChange={setSortOption} />
      </div>

      {/* Animated list of products with responsive grid layout */}
      <motion.ul
        ref={ref}
        className="self-start max-sm:self-center grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] max-sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full gap-8 justify-between items-start"
      >
        {/* Map through validated products and render Product component */}
        {filteredProducts.map((product, idx) => (
          <Product
            key={`product_${idx}`}
            product={{
              ...product,
              imgSrc:
                typeof product.imgSrc === "object"
                  ? product.imgSrc.src
                  : product.imgSrc,
            }}
            index={idx}
          />
        ))}
      </motion.ul>

      {paginatedProducts.length === 0 && (
        <EmptyState message="No products match your search." />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </SectionAnimatedWrapper>
  );
};

export default ProductsGrid;
