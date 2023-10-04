import { useEffect, useRef, useState } from "react";
import anime, { timeline } from "animejs";

export default function Headline({ copy1, copy2 }) {
  const copy1Ref = useRef();
  const copy2Ref = useRef();
  const switchRef = useRef();
  const [copy1Rotate, setCopy1Rotate] = useState(false);
  const copy1RotateRef = useRef();
  copy1RotateRef.current = copy1Rotate;

  useEffect(() => {
    const timeline = anime.timeline({
      easing: "easeOutElastic(1, .6)",
      loop: true,
      autoplay: false,
    });

    timeline.add(
      {
        targets: copy1Ref.current,
        opacity: [
          { value: [1, 0], duration: 2000, delay: 0 },
          { value: [0, 1], duration: 2000, delay: 6000 },
          { value: 1, duration: 6000, delay: 0 },
        ],
        rotateX: [
          { value: [0, 90], duration: 2000, delay: 0 },
          { value: [90, 0], duration: 2000, delay: 6000 },
          { value: 0, duration: 6000, delay: 0 },
        ],
      },
      0
    );

    timeline.add(
      {
        targets: copy2Ref.current,
        opacity: [
          { value: [0, 1], duration: 2000, delay: 0 },
          { value: [1, 0], duration: 2000, delay: 6000 },
          { value: 0, duration: 6000, delay: 0 },
        ],
        rotateX: [
          { value: [-90, 0], duration: 2000, delay: 0 },
          { value: [0, -90], duration: 2000, delay: 6000 },
          { value: -90, duration: 6000, delay: 0 },
        ],
      },
      0
    );

    switchRef.current.classList.toggle("active");

    setTimeout(() => {
      timeline.play();
    }, 6000);

    return () => {
      timeline.pause();
    };
  }, []);

  return (
    <div className="headline">
      <h2>
        {/* {copy1Rotate ? "1" : "0"} */}
        <span ref={copy1Ref} data-title={copy1}>
          {copy1}
        </span>
        <span ref={copy2Ref} data-title={copy2}>
          {copy2}
        </span>
      </h2>
      <div ref={switchRef} className="headline-switch" />
    </div>
  );
}
