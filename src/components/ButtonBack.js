import { useRouter } from "next/navigation";
import anime from "animejs";
import ArrowLeft from "../../public/icons/arrow_left.svg";
import { useEffect, useRef } from "react";

export default function ButtonBack(props) {
  const router = useRouter();

  const fadeOut = useRef(null);

  useEffect(() => {
    fadeOut.current = anime({
      targets: ".anime.fade-in",
      translateY: -50,
      opacity: [1, 0],
      duration: 400,
      delay: anime.stagger(100),
      easing: "easeInOutQuad",
      direction: "forward",
      complete: () => {
        router.push(props.backLocation);
      },
      autoplay: false,
    });
  }, []);

  const redirect = function (e) {
    console.log(e);
    e.preventDefault();

    if (!fadeOut.current.began) fadeOut.current.play();
  };

  return (
    <a className={"link-back" + (props.className ? ` ${props.className}` : "")} href={props.backLocation} onClick={redirect}>
      <ArrowLeft />
    </a>
  );
}
