"use client";

import Image from "next/image";
import useCartStore from "../store/use-cart-store";
import { useHydrated } from "@/custom-hooks/use-hydrated";

// Component to render the cart button with item count
const CartButton = () => {

    const hydrated = useHydrated();
  const { setCartModalOpen, cartItems } = useCartStore();

  const cartItemsCount = hydrated
    ? Object.keys(cartItems).length
    : 0;

  return (
    <div className="search-cart cursor-pointer pointer-events-auto flex gap-6 items-center">
      {/* Button to open cart modal */}
      <button
        className="cart relative flex justify-center max-w-25 max-h-25 cursor-pointer pointer-events-auto"
        id="cart-trolley"
        onClick={() => setCartModalOpen(true)}
      >
        {/* Cart icon container */}
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer pointer-events-auto">
          <Image
            width={100}
            height={100}
            className="w-full h-full object-cover"
            src={"/images/cart-icon.svg"}
            alt="cart icon"
          />
        </div>

        {/* Cart item count badge */}
        <div className="counter hover:scale-110 absolute top-1/4 right-0 bg-brand-primary rounded-full w-max max-w-5.5 max-h-5.5 aspect-square flex items-center justify-center">
          <p
            id="num-of-items"
            className="rounded-full p-2 m-0 text-left text-[#FFFFFF] font-['poppins'] text-xs"
          >
            {cartItemsCount}
          </p>
        </div>
      </button>
    </div>
  );
};

export default CartButton;
