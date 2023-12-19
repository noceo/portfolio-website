"use client";

import { useEffect, useRef, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import anime from "animejs";
import { fadeOutLeft, fadeOutRight } from "@/utils/animations";
import { PageTransitionContext } from "./PageWrapper";

export default function ButtonPageTransition({
  children,
  location,
  redirectBack,
  onBeforeTransition,
  className,
}) {
  const router = useRouter();
  const path = usePathname();
  const animation = useRef();
  const pageTransitionContext = useContext(PageTransitionContext);
  // const circleAnimation = useRef();

  useEffect(() => {
    if (redirectBack)
      animation.current = anime({
        ...fadeOutRight,
        delay: anime.stagger(fadeOutRight.delay),
      });
    else
      animation.current = anime({
        ...fadeOutLeft,
        delay: anime.stagger(fadeOutLeft.delay),
      });
    animation.current.complete = () => {
      router.push(location);
    };

    router.prefetch(location);
  }, []);

  const redirect = async function (e) {
    e.preventDefault();
    if (onBeforeTransition) {
      await onBeforeTransition();
    }
    if (!animation.current.began) {
      console.log("PLAY");
      animation.current.play();
      pageTransitionContext.setPageTransition({
        isRunning: true,
        location: location,
      });
    }
  };

  return (
    <a
      className={className ? ` ${className}` : ""}
      href={location}
      onClick={redirect}
    >
      {children}
    </a>
  );
}
