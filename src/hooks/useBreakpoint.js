import { useEffect, useState } from "react";
import { breakpoints } from "@/utils/breakpoints";

export default function useBreakpoint() {
  const [breakpoint, setBreakPoint] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    if (breakpoints["xs"] <= windowSize.width && windowSize.width < breakpoints["sm"]) {
      setBreakPoint("xs");
    }
    if (breakpoints["sm"] <= windowSize.width && windowSize.width < breakpoints["md"]) {
      setBreakPoint("sm");
    }
    if (breakpoints["md"] <= windowSize.width && windowSize.width < breakpoints["lg"]) {
      setBreakPoint("md");
    }
    if (breakpoints["lg"] <= windowSize.width && windowSize.width < breakpoints["xl"]) {
      setBreakPoint("lg");
    }
    if (breakpoints["xl"] <= windowSize.width && windowSize.width < breakpoints["xxl"]) {
      setBreakPoint("xl");
    }
    if (windowSize.width >= breakpoints["xxl"]) {
      setBreakPoint("xxl");
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
  return breakpoint;
}
