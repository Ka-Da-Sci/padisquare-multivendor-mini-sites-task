"use client";

import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import useCartStore from "@/store/use-cart-store";
import CartCheckoutModal from "./cart-checkout-modal";
import QueryClientProvider from "@/providers/tanstack-wrapper";

const MainRootlayoutWrapper = ({ children }: { children: ReactNode }) => {
  const { isCartModalOpen } = useCartStore();

  return (
    <QueryClientProvider>
      <div className="w-full min-h-screen flex flex-col items-center">
        <Header />
        <main className="flex-1 w-full px-2 sm:px-16 pt-32">
          {children}
          {isCartModalOpen && <CartCheckoutModal />}
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default MainRootlayoutWrapper;
