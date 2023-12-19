import { useEffect, useState } from "react";
import { breakpoints } from "@/utils/breakpoints";

export default function useBreakpoint() {
  const [breakpoint, setBreakPoint] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (breakpoints["xs"] <= width && width < breakpoints["sm"]) {
        setBreakPoint("xs");
      }
      if (breakpoints["sm"] <= width && width < breakpoints["md"]) {
        setBreakPoint("sm");
      }
      if (breakpoints["md"] <= width && width < breakpoints["lg"]) {
        setBreakPoint("md");
      }
      if (breakpoints["lg"] <= width && width < breakpoints["xl"]) {
        setBreakPoint("lg");
      }
      if (breakpoints["xl"] <= width && width < breakpoints["xxl"]) {
        setBreakPoint("xl");
      }
      if (width >= breakpoints["xxl"]) {
        setBreakPoint("xxl");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
