"use client";

import { useContext, useEffect } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
import anime from "animejs";
import { SplashScreenContext } from "./PageWrapper";
import SplashLoader from "@/../public/icons/splash_loader.svg";

export default function SplashScreen() {
  const { isSplashScreenLoading, setSplashScreenLoading } =
    useContext(SplashScreenContext);
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // anime.timeline({}).add({
    //   targets: "#splashscreen",
    //   translateY: 50,
    //   easing: "",
    //   duration: 500,
    // });

    const splashScreen = document.querySelector("#splashscreen");
    anime({
      targets: splashScreen,
      opacity: 0,
      easing: "linear",
      duration: 1000,
      delay: 500,
      complete: () => {
        splashScreen.style.display = "none";
        setSplashScreenLoading(false);
      },
    });
  }, []);

  return (
    <div id="splashscreen">
      <div id="splash-loader">
        <SplashLoader />
      </div>
    </div>
  );
}
