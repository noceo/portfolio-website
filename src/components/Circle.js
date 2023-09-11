"use client";

import { useEffect, useState } from "react";
import useScrollPercentage from "@/hooks/useScrollPosition";

export default function Circle(props) {
  const scrollPercentage = useScrollPercentage();
  const [scale, setScale] = useState(0);

  useEffect(() => {
    setScale(scrollPercentage / 100 + 1);
    console.log(scrollPercentage);
  }, [scrollPercentage]);

  return <div className="circle" style={{ transform: `scale3d(${scale}, ${scale}, 1)` }} />;
}
