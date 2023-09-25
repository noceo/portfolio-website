import { useRouter } from "next/navigation";
import anime from "animejs";
import { pageFadeOut, fadeOutRight } from "@/animations";
import ArrowLeft from "../../public/icons/arrow_left.svg";
import { useEffect, useRef } from "react";

export default function ButtonBack(props) {
  const router = useRouter();
  const fadeOut = useRef();

  useEffect(() => {
    fadeOut.current = anime({ ...fadeOutRight, delay: anime.stagger(100) });
    fadeOut.current.complete = () => router.push(props.location);
    console.log(fadeOut.current);

    router.prefetch(props.location);
  }, []);

  const redirect = function (e) {
    e.preventDefault();
    console.log(anime.running);

    if (!fadeOut.current.began) {
      fadeOut.current.play();
    }
  };

  return (
    <a className={"link-back" + (props.className ? ` ${props.className}` : "")} href={props.location} onClick={redirect}>
      <ArrowLeft />
    </a>
  );
}
