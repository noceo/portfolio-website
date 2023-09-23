"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import anime from "animejs";

export default function NavCircleButton(props) {
  const router = useRouter();
  const animation = props.animationRef;

  useEffect(() => {
    router.prefetch(props.location);
  }, []);

  const redirect = function (e) {
    console.log(e, animation);
    e.preventDefault();

    anime({
      targets: ".anime.fade-in",
      translateY: -50,
      opacity: [1, 0],
      duration: 400,
      delay: anime.stagger(100),
      easing: "easeInOutQuad",
      direction: "forward",
      complete: () => {
        router.push(props.location);
      },
    });
  };

  return (
    <a href={props.location} onClick={redirect}>
      {props.children}
    </a>
  );
}
