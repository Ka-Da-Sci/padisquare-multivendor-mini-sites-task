"use client";

import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

const MainRootlayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />
      <main className="flex-1 w-full px-2 sm:px-16 pt-32">{children}</main>
      <Footer />
    </div>
  );
};

export default MainRootlayoutWrapper;
