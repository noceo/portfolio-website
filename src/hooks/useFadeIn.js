import { PageTransitionContext, SplashScreenContext, PreviousRouteContext } from "@/components/PageWrapper";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import anime from "animejs";
import { fadeInLeft, fadeInRight } from "@/utils/animations";

export default function useFadeIn(direction, onCompleteCallback) {
  const context = useContext(SplashScreenContext);
  const pageTransitionContext = useContext(PageTransitionContext);
  const prevPage = useContext(PreviousRouteContext);
  const pathname = usePathname();

  useEffect(() => {
    var fadeIn;
    if (direction === "left") fadeIn = anime({ ...fadeInLeft, delay: anime.stagger(fadeInLeft.delay) });
    else if (direction === "right") fadeIn = anime({ ...fadeInRight, delay: anime.stagger(fadeInRight.delay) });
    else {
      if (prevPage == "/") fadeIn = anime({ ...fadeInRight, delay: anime.stagger(fadeInRight.delay) });
      else fadeIn = anime({ ...fadeInLeft, delay: anime.stagger(fadeInLeft.delay) });
    }

    const onComplete = () => {
      if (onCompleteCallback) {
        console.log(onCompleteCallback.current);
        onCompleteCallback.current();
      }
      pageTransitionContext.setPageTransition({ isRunning: false, location: pathname });
    };
    fadeIn.complete = onComplete;

    if (!context.isSplashScreenLoading) {
      fadeIn.play();
    }

    return () => {
      fadeIn.pause();
    };
  }, [context.isSplashScreenLoading, onCompleteCallback]);
}
