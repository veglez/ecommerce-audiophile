import { breakpoints } from "@styles/theme/default";
import { useEffect, useState } from "react";

type ValueOf<T> = T[keyof T];

function useViewportMatchSize(breakpoint: ValueOf<typeof breakpoints>) {
  const [match, setMatch] = useState(false);

  function isMatchingViewport() {
    setMatch(window.innerWidth <= Number(breakpoint.slice(0, -2)));
  }

  useEffect(() => {
    window.addEventListener("resize", isMatchingViewport);
    isMatchingViewport();
    return () => window.removeEventListener("resize", isMatchingViewport);
  }, []);

  return match;
}

export default useViewportMatchSize;
