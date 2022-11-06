import { useLayoutEffect, useState, RefObject } from "react";

export const useElementSize = <T extends HTMLElement>(
  elementRef: RefObject<T>
): number[] => {
  const [size, setSize] = useState<number[]>([0, 0]);

  useLayoutEffect(() => {
    if (elementRef.current) {
      const updateSize = (): void => {
        setSize([
          elementRef?.current?.clientWidth || 0,
          elementRef?.current?.clientHeight || 0,
        ]);
      };
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }
  }, [elementRef]);

  return size;
};
