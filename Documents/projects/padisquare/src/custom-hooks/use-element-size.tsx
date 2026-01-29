import { useState, useEffect, RefObject } from "react";

type UseElementSizeTarget<T extends HTMLElement> = RefObject<T> | string;

const useElementSize = <T extends HTMLElement>(
  target: UseElementSizeTarget<T>
) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let element: T | null = null;

    if (typeof target === "string") {
      element = document.querySelector<T>(target);
    } else {
      element = target.current;
    }

    console.log(element);

    if (!element) return;

    const updateSize = () => {
      setSize({
        width: element!.offsetWidth,
        height: element!.offsetHeight,
      });
    };

    // Initial measurement
    updateSize();

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [target]);

  return size;
};

export default useElementSize;
