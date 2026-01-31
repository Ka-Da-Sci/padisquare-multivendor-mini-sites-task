"use client";

import { useEffect, useState } from "react";

const useControlHeaderVisibility = () => {
  const [hideHeader, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      // Only trigger if scrolled more than 100px up or down
      if (Math.abs(delta) > 100) {
        if (currentY > lastY) {
          // scrolling down
          setHidden(true);
        } else {
          // scrolling up
          setHidden(false);
        }
        lastY = currentY;
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { hideHeader };
};

export default useControlHeaderVisibility;
