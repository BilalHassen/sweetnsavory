import { useState, useEffect } from "react";

/**
 * useWidth - Returns current viewport width with debounced resize handling.
 * 
 * Why debounce? Without it, every pixel of resize triggers a state update
 * and re-render. Debouncing waits until resizing stops before updating.
 */
export default function useWidth() {
  // Initialize with window width (or 0 during SSR)
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      // Clear any pending update
      clearTimeout(timeoutId);
      // Wait 100ms after resize stops before updating state
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 100);
    };

    // Set initial width
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}
