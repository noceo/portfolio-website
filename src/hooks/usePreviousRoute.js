import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const usePreviousRoute = () => {
  const path = usePathname();
  const pathRef = useRef(null);

  useEffect(() => {
    pathRef.current = path;
  }, [path]);

  return pathRef.current;
};
