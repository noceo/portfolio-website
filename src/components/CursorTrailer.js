"use client";

import { detectMobileAndTablet } from "@/utils/detect-mobile";
import { useEffect, useRef } from "react";

export default function CursorTrailer() {
  const cursorContainerRef = useRef();
  const cursorRef = useRef();
  const mouseDownRef = useRef();
  const interactingRef = useRef();
  const hideRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  const trailingCursorPos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      mousePos.current = {
        x: clientX - cursorContainerRef.current.offsetWidth / 2,
        y: clientY - cursorContainerRef.current.offsetWidth / 2,
      };
    };

    const rafRender = () => {
      const mouseX = mousePos.current.x;
      const mouseY = mousePos.current.y;
      const trailingX = trailingCursorPos.current.x;
      const trailingY = trailingCursorPos.current.y;
      const diffX = mouseX - trailingX;
      const diffY = mouseY - trailingY;
      trailingCursorPos.current = {
        x: trailingX + diffX / 5,
        y: trailingY + diffY / 5,
      };
      const scale =
        (interactingRef.current ? 4 : 1) * (mouseDownRef.current ? 2 : 1);
      cursorContainerRef.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0)`;
      cursorRef.current.style.transform = `scale(${scale})`;
      animationFrameRef.current = requestAnimationFrame(rafRender);
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

    if (detectMobileAndTablet())
      cursorContainerRef.current.style.display = "none";
    else {
      cursorContainerRef.current.style.opacity = 1;
      rafRender();
    }

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div ref={cursorContainerRef} id="cursor-trailer">
      <div ref={cursorRef}></div>
    </div>
  );
}
