"use client";

import { useEffect, useRef } from "react";

export default function CursorTrailer() {
  const cursorContainerRef = useRef();
  const cursorRef = useRef();
  const mouseDownRef = useRef();
  const interactingRef = useRef();
  const hideRef = useRef();

  useEffect(() => {
    const onMouseMove = (e) => {
      const x = e.clientX - cursorContainerRef.current.offsetWidth / 2;
      const y = e.clientY - cursorContainerRef.current.offsetHeight / 2;

      const scale =
        (interactingRef.current ? 4 : 1) * (mouseDownRef.current ? 2 : 1);

      cursorContainerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      cursorRef.current.style.transform = `scale(${scale})`;
      if (hideRef.current) cursorContainerRef.current.style.opacity = 0;
      else cursorContainerRef.current.style.opacity = 1;

      // anime({
      //   targets: cursorRef.current,
      //   translateX: x,
      //   translateY: y,
      //   duration: 400,
      // });

      // const keyframes = {
      //   transform: `translate(${x}px, ${y}px) scale(${
      //     (interacting ? 4 : 1) * (mousedown ? 4 : 1)
      //   })`,
      // };

      // cursorRef.current.animate(keyframes, {
      //   duration: 800,
      //   fill: "forwards",
      // });
    };

    const onMouseDown = () => {
      mouseDownRef.current = true;
      const scale = (interactingRef.current ? 4 : 1) * 2;
      cursorRef.current.style.transform = `scale(${scale})`;
    };

    const onMouseUp = () => {
      mouseDownRef.current = false;
      const scale = interactingRef.current ? 4 : 1;
      cursorRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("mousemove", (e) => {
      interactingRef.current = e.target.closest(".interactable") !== null;
      hideRef.current = e.target.closest("iframe") !== null;
      onMouseMove(e);
    });

    window.addEventListener("mousedown", (e) => {
      onMouseDown(e);
    });

    window.addEventListener("mouseup", (e) => {
      onMouseUp(e);
    });
  }, []);

  return (
    <div ref={cursorContainerRef} id="cursor-trailer">
      <div ref={cursorRef}></div>
    </div>
  );
}
