"use client";

import anime from "animejs";
import useBreakpoint from "@/hooks/useBreakpoint";
import ButtonPageTransition from "./ButtonPageTransition";
import IconWorksSmall from "@/../public/icons/circle_works_small.svg";
import IconWorksLarge from "@/../public/icons/circle_works_large.svg";
import IconContactSmall from "@/../public/icons/circle_contact_small.svg";
import IconContactLarge from "@/../public/icons/circle_contact_large.svg";
import IconAboutSmall from "@/../public/icons/circle_about_small.svg";
import IconAboutLarge from "@/../public/icons/circle_about_large.svg";
import { useCallback, useEffect } from "react";

const MAX_PARALLAX_MOVE = 10;
const PARALLAX_DEPTH_FACTORS = [
  { x: 1, y: -1, inverse: false },
  { x: -1, y: -1, inverse: false },
  { x: 0.5, y: -0.5, inverse: false },
];

export default function NavCircle() {
  const breakpoint = useBreakpoint();

  const onMouseMove = useCallback((e) => {
    const innerCircle = document.querySelector(".circle-nav-vis");
    const outerCircles = document.querySelectorAll(".parallax-wrapper");

    const percentageX = e.screenX / window.innerWidth;
    const percentageY = e.screenY / window.innerHeight;
    const offsetX = (percentageX - 0.5) * 2 * MAX_PARALLAX_MOVE;
    const offsetY = (percentageY - 0.5) * 2 * MAX_PARALLAX_MOVE;

    innerCircle.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
    for (let i = 0; i < outerCircles.length; i++) {
      const offsetX =
        (percentageX - 0.5) *
        2 *
        MAX_PARALLAX_MOVE *
        PARALLAX_DEPTH_FACTORS[i].x;
      const offsetY =
        (percentageY - 0.5) *
        2 *
        MAX_PARALLAX_MOVE *
        PARALLAX_DEPTH_FACTORS[i].y;

      if (PARALLAX_DEPTH_FACTORS[i].inverse)
        outerCircles[
          i
        ].style.transform = `translateX(${offsetY}px) translateY(${offsetX}px)`;
      else
        outerCircles[
          i
        ].style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
    }
  }, []);

  const isLargeScreen = () => {
    if (breakpoint != "xs" && breakpoint != "sm") return true;
  };

  useEffect(() => {
    if (breakpoint != "xs" && breakpoint != "sm" && breakpoint != "md") {
      document.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [breakpoint]);

  return (
    <>
      <div className="circle-nav anime fade-in">
        <div id="circle-items">
          <div className="parallax-wrapper">
            <div id="circle-works" className="circle-item">
              <ButtonPageTransition location="/works">
                <div className="circle-item-icon">
                  {isLargeScreen() ? <IconWorksLarge /> : <IconWorksSmall />}
                </div>
              </ButtonPageTransition>
            </div>
          </div>
          <div className="parallax-wrapper">
            <div id="circle-about" className="circle-item">
              <ButtonPageTransition location="/about">
                <div className="circle-item-icon">
                  {isLargeScreen() ? <IconAboutLarge /> : <IconAboutSmall />}
                </div>
              </ButtonPageTransition>
            </div>
          </div>
          <div className="parallax-wrapper">
            <div id="circle-contact" className="circle-item">
              <ButtonPageTransition location="/contact">
                <div className="circle-item-icon">
                  {isLargeScreen() ? (
                    <IconContactLarge />
                  ) : (
                    <IconContactSmall />
                  )}
                </div>
              </ButtonPageTransition>
            </div>
          </div>
        </div>
        {/* <svg style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", transform: "rotate(90deg)", transformOrigin: "center" }} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" id="ring" cx="50" cy="50" r="50" />
      </svg> */}
      </div>
      <div className="circle-nav-vis-wrapper anime fade-in">
        <div className="circle-nav-vis" />
      </div>
    </>
  );
}
