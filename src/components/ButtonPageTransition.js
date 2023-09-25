"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import anime from "animejs";
import { fadeOutLeft, fadeOutRight } from "@/animations";

export default function ButtonPageTransition({ children, location, redirectBack, className }) {
  const router = useRouter();
  const animation = useRef();

  useEffect(() => {
    if (redirectBack) animation.current = anime({ ...fadeOutRight, delay: anime.stagger(fadeOutRight.delay) });
    else animation.current = anime({ ...fadeOutLeft, delay: anime.stagger(fadeOutLeft.delay) });
    animation.current.complete = () => router.push(location);

    router.prefetch(location);
  }, []);

  const redirect = function (e) {
    e.preventDefault();

    if (!animation.current.began) {
      animation.current.play();
    }
  };

  return (
    <a className={className ? ` ${className}` : ""} href={location} onClick={redirect}>
      {children}
    </a>
  );
}
