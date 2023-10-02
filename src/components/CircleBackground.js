"use client";

import { useEffect, useContext } from "react";
import useBreakpoint from "@/hooks/useBreakpoint";
import usePrevious from "@/hooks/usePrevious";
import { usePathname } from "next/navigation";
import { PageTransitionContext } from "./PageWrapper";
import anime from "animejs";

export default function CircleBackground({ circleStyles }) {
  const pageTransitionContext = useContext(PageTransitionContext);
  const breakpoint = useBreakpoint();
  const prevBreakpoint = usePrevious(breakpoint);
  const pathname = usePathname();
  const prevPathName = usePrevious(pathname);

  function runAnimation(toLocation) {
    const root = document.querySelector(":root");

    const cssVariables = {
      backgroundColor: getComputedStyle(root).getPropertyValue("--color-circle"),
    };

    var newCircleColor;

    var animation = anime.timeline({
      targets: ".circle-bg",
      duration: 1500,
      easing: "easeOutElastic(1, 0.4)",
      autoplay: false,
    });
    console.log(toLocation, breakpoint);

    for (const circleStyle of circleStyles) {
      if (circleStyle.path === toLocation) {
        animation.add(circleStyle.animation[breakpoint]);
        newCircleColor = circleStyle.color;
        break;
      }
    }

    if (breakpoint === prevBreakpoint) {
      animation.add(
        {
          targets: cssVariables,
          backgroundColor: newCircleColor,
          duration: 1000,
          update: () => {
            root.style.setProperty("--color-circle", cssVariables.backgroundColor);
          },
          autoplay: false,
        },
        0
      );
    }

    animation.play();
  }

  useEffect(() => {
    const onBrowserNavigation = () => pageTransitionContext.setPageTransition({ isRunning: false, location: pathname });
    window.addEventListener("popstate", onBrowserNavigation);
    const circle = document.querySelector(".circle-bg");
    circle.style.top = "50%";
    circle.style.left = "50%";
    const style = circleStyles.find((style) => style.path === pathname);
    document.querySelector(":root").style.setProperty("--color-circle", style.color);

    return () => {
      window.removeEventListener("popstate", onBrowserNavigation);
    };
  }, []);

  useEffect(() => {
    // usual page transition
    if (pageTransitionContext.pageTransition.isRunning && pathname === prevPathName) {
      console.log("1 CIRCLE RUNNING TO ", pageTransitionContext.pageTransition.location);
      console.log("breakpoint", breakpoint);
      runAnimation(pageTransitionContext.pageTransition.location);
    }
    // if user intercepts transition via browser navigation
    else if (!pageTransitionContext.pageTransition.isRunning && prevPathName && pathname !== prevPathName) {
      console.log("2 CIRCLE RUNNING TO ", pageTransitionContext.pageTransition.location);
      console.log("breakpoint", breakpoint);
      runAnimation(pathname);
    }
    // if breakpoint changes
    else if (breakpoint && breakpoint !== prevBreakpoint) {
      // console.log("CIRCLE RUNNING TO ", pathname);
      runAnimation(pathname);
    }
  }, [pageTransitionContext.pageTransition, pathname, breakpoint]);
  return <div className="circle-bg" />;
}
