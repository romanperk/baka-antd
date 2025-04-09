import { useEffect, useState } from "react";

export function useBreakpoints() {
  const [downMd, setDownMd] = useState(window.innerWidth < 768); // md = 768px

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handler = (event) => {
      setDownMd(event.matches);
    };
    mediaQuery.addEventListener("change", handler);
    setDownMd(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return { downMd };
}
