"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { pageFadeOut, fadeOutLeft } from "@/animations";

export default function NavCircleButton(props) {
  const router = useRouter();
  const fadeOut = useRef();

  useEffect(() => {
    fadeOut.current = anime({ ...fadeOutLeft, delay: anime.stagger(fadeOutLeft.delay) });
    fadeOut.current.complete = () => router.push(props.location);

    router.prefetch(props.location);
  }, []);

  const redirect = function (e) {
    e.preventDefault();

    if (!fadeOut.current.began) {
      fadeOut.current.play();
    }
  };

  return (
    <a href={props.location} onClick={redirect}>
      {props.children}
    </a>
  );
}
