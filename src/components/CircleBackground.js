"use client";

import { useEffect, useState, useContext } from "react";
import useBreakpoint from "@/hooks/useBreakpoint";
import usePrevious from "@/hooks/usePrevious";
import useScrollPercentage from "@/hooks/useScrollPosition";
import { PageTransitionContext } from "./PageWrapper";
import anime, { path } from "animejs";
import { usePathname } from "@/navigation";

export default function CircleBackground({ circleStyles }) {
  const pageTransitionContext = useContext(PageTransitionContext);
  const breakpoint = useBreakpoint();
  const prevBreakpoint = usePrevious(breakpoint);
  const pathname = usePathname();
  const prevPathName = usePrevious(pathname);

  const scrollPercentage = useScrollPercentage();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (circleStyles[pathname].scale) {
      setScale(scrollPercentage / 175 + 1);
    }
  }, [scrollPercentage]);

  function runAnimation(toLocation) {
    const root = document.querySelector(":root");

    const cssVariables = {
      backgroundColor:
        getComputedStyle(root).getPropertyValue("--color-circle"),
    };

    var newCircleColor;

    var animation = anime.timeline({
      targets: ".circle-bg-wrapper",
      duration: 1500,
      easing: "easeOutElastic(1, 0.4)",
      autoplay: false,
    });

    // add move animation
    animation.add(circleStyles[toLocation].animation[breakpoint]);
    newCircleColor = circleStyles[toLocation].color;

    // add scale reset animation
    if (scale > 1) {
      animation.add(
        {
          targets: ".circle-bg",
          scale: 1,
        },
        0
      );
    }

    // add color animation
    animation.add(
      {
        targets: cssVariables,
        backgroundColor: newCircleColor,
        easing: "easeInOutSine",
        duration: 300,
        update: () => {
          root.style.setProperty(
            "--color-circle",
            cssVariables.backgroundColor
          );
        },
        autoplay: false,
      },
      0
    );

    animation.play();
  }

  useEffect(() => {
    const onBrowserNavigation = () =>
      pageTransitionContext.setPageTransition({
        isRunning: false,
        location: pathname,
      });
    window.addEventListener("popstate", onBrowserNavigation);
    const circle = document.querySelector(".circle-bg-wrapper");
    circle.style.top = "50%";
    circle.style.left = "50%";
    const style = circleStyles[pathname];
    document
      .querySelector(":root")
      .style.setProperty("--color-circle", style.color);

    return () => {
      window.removeEventListener("popstate", onBrowserNavigation);
    };
  }, []);

  useEffect(() => {
    // usual page transition
    if (
      pageTransitionContext.pageTransition.isRunning &&
      pathname === prevPathName
    ) {
      runAnimation(pageTransitionContext.pageTransition.location);
    }
    // if user intercepts transition via browser navigation
    else if (
      !pageTransitionContext.pageTransition.isRunning &&
      prevPathName &&
      pathname !== prevPathName
    ) {
      runAnimation(pathname);
    }
    // if breakpoint changes
    else if (breakpoint && breakpoint !== prevBreakpoint) {
      // console.log("CIRCLE RUNNING TO ", pathname);
      runAnimation(pathname);
    }
  }, [pageTransitionContext.pageTransition, pathname, breakpoint]);
  return (
    <div className="circle-bg-wrapper">
      <div className="circle-bg" style={{ transform: `scale(${scale})` }} />
    </div>
  );
}
