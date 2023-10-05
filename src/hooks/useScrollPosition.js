import { useEffect, useState } from "react";

export default function useScrollPercentage() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      var h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      const percentage = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
      // console.log((h[st] || b[st]) / (h[sh] || b[sh]), percentage);
      setScrollPercentage(percentage);
      // setScrollPercentage(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPercentage;
}
