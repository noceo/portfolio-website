import { useEffect, useRef } from "react";
import { usePathname } from "@/navigation";

export const usePreviousRoute = () => {
  const path = usePathname();
  const pathRef = useRef(null);

  useEffect(() => {
    pathRef.current = path;
  }, [path]);

  return pathRef.current;
};
