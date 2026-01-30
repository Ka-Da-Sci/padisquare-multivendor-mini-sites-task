"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import useCartStore from "../store/use-cart-store";
import QueryClientProvider from "@/providers/tanstack-wrapper";
import UtilityHoverCard from "./utility-hover-card";
import Footer from "./footer";
import Header from "./header";
const CartCheckoutModal = dynamic(() => import("./cart-checkout-modal"), {
  ssr: false,
});

// Root Layout wrapper component
const VendorSiteLayoutWrapper = ({ children }: { children: ReactNode }) => {
  const { isCartModalOpen, showUtilityCardModal } = useCartStore();

  return (
    <QueryClientProvider>
      <div className="w-full min-h-full flex flex-col items-center">
          <Header />
        <main className="w-full flex-1 px-2 sm:px-16">
          {children}
          {isCartModalOpen && <CartCheckoutModal />}
          {showUtilityCardModal && <UtilityHoverCard />}
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default VendorSiteLayoutWrapper;
