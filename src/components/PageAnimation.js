"use client";

import { useEffect, useContext } from "react";
import { SplashScreenContext } from "./PageWrapper";
import anime from "animejs";

export default function PageAnimation() {
  const context = useContext(SplashScreenContext);

  useEffect(() => {
    const fadeIn = anime({
      targets: ".anime.fade-in",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(200),
      easing: "easeInOutQuad",
      direction: "forward",
      autoplay: false,
    });

    if (!context.isSplashScreenLoading) {
      console.log("PAGE LOAD");
      fadeIn.play();
    }
  }, [context.isSplashScreenLoading]);

  return <></>;
}
