import { useCallback, useEffect, useRef, useState } from "react";
import anime, { timeline } from "animejs";
import useBreakpoint from "@/hooks/useBreakpoint";

export default function Headline({ copy1, copy2, rotate = true }) {
  const headlineRef = useRef();
  const headlineHeight = useRef();
  const copy1Ref = useRef();
  const copy2Ref = useRef();
  const [copy1Rotate, setCopy1Rotate] = useState(false);
  const copy1RotateRef = useRef();
  copy1RotateRef.current = copy1Rotate;
  // const breakpoint = useBreakpoint();
  const onResize = useCallback(() => {
    if (copy1Ref.current && copy2Ref.current) {
      const newHeight = Math.max(
        copy1Ref.current.offsetHeight,
        copy2Ref.current.offsetHeight
      );
      headlineRef.current.style.height = `${newHeight}px`;
      headlineHeight.current = newHeight;
    }
  }, []);

  useEffect(() => {
    var timeline;
    if (rotate) {
      timeline = anime.timeline({
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

      setTimeout(() => {
        timeline.play();
      }, 6000);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newHeight = entry.target.offsetHeight;
        if (
          typeof newHeight === "number" &&
          newHeight !== headlineHeight.current
        ) {
          onResize();
          console.log("RESIZE");
        }
      }
    });

    resizeObserver.observe(copy1Ref.current);
    resizeObserver.observe(copy2Ref.current);

    return () => {
      if (rotate) timeline.pause();
      resizeObserver.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   onResize();
  // }, [breakpoint]);

  return (
    <h2 ref={headlineRef} className="headline">
      <span ref={copy1Ref} data-title={copy1}>
        {copy1}
      </span>
      {copy2 && (
        <span ref={copy2Ref} data-title={copy2}>
          {copy2}
        </span>
      )}
    </h2>
  );
}
