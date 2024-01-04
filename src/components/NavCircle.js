"use client";

import anime from "animejs";
import useBreakpoint from "@/hooks/useBreakpoint";
import ButtonPageTransition from "./ButtonPageTransition";
import EnglishIconWorksSmall from "@/../public/icons/circle_works_small.svg";
import EnglishIconWorksLarge from "@/../public/icons/circle_works_large.svg";
import EnglishIconContactSmall from "@/../public/icons/circle_contact_small.svg";
import EnglishIconContactLarge from "@/../public/icons/circle_contact_large.svg";
import EnglishIconAboutSmall from "@/../public/icons/circle_about_small.svg";
import EnglishIconAboutLarge from "@/../public/icons/circle_about_large.svg";
import EnglishIconMusicSmall from "@/../public/icons/circle_music_small.svg";
import EnglishIconMusicLarge from "@/../public/icons/circle_music_large.svg";
import GermanIconWorksSmall from "@/../public/icons/circle_works_small_de.svg";
import GermanIconWorksLarge from "@/../public/icons/circle_works_large_de.svg";
import GermanIconContactSmall from "@/../public/icons/circle_contact_small_de.svg";
import GermanIconContactLarge from "@/../public/icons/circle_contact_large_de.svg";
import GermanIconAboutSmall from "@/../public/icons/circle_about_small_de.svg";
import GermanIconAboutLarge from "@/../public/icons/circle_about_large_de.svg";
import GermanIconMusicSmall from "@/../public/icons/circle_music_small_de.svg";
import GermanIconMusicLarge from "@/../public/icons/circle_music_large_de.svg";
import { useCallback, useEffect } from "react";
import { useLocale } from "next-intl";

const circleIcons = {
  en: {
    works: {
      sm: EnglishIconWorksSmall,
      lg: EnglishIconWorksLarge,
    },
    contact: {
      sm: EnglishIconContactSmall,
      lg: EnglishIconContactLarge,
    },
    about: {
      sm: EnglishIconAboutSmall,
      lg: EnglishIconAboutLarge,
    },
    music: {
      sm: EnglishIconMusicSmall,
      lg: EnglishIconMusicLarge,
    },
  },
  de: {
    works: {
      sm: GermanIconWorksSmall,
      lg: GermanIconWorksLarge,
    },
    contact: {
      sm: GermanIconContactSmall,
      lg: GermanIconContactLarge,
    },
    about: {
      sm: GermanIconAboutSmall,
      lg: GermanIconAboutLarge,
    },
    music: {
      sm: GermanIconMusicSmall,
      lg: GermanIconMusicLarge,
    },
  },
};

const MAX_PARALLAX_MOVE = 20;
const PARALLAX_DEPTH_FACTORS = [
  { x: -0.4, y: -0.4, inverse: false },
  { x: -0.3, y: -0.3, inverse: false },
  { x: 0.5, y: -0.3, inverse: false },
  { x: 0.1, y: -0.1, inverse: false },
];

export default function NavCircle() {
  const locale = useLocale();
  const IconWorksSmall = circleIcons[locale].works.sm;
  const IconWorksLarge = circleIcons[locale].works.lg;
  const IconAboutSmall = circleIcons[locale].about.sm;
  const IconAboutLarge = circleIcons[locale].about.lg;
  const IconContactSmall = circleIcons[locale].contact.sm;
  const IconContactLarge = circleIcons[locale].contact.lg;
  const IconMusicSmall = circleIcons[locale].music.sm;
  const IconMusicLarge = circleIcons[locale].music.lg;
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
              <ButtonPageTransition
                location="/works"
                onBeforeTransition={document.removeEventListener(
                  "mousemove",
                  onMouseMove
                )}
              >
                <div className="circle-item-icon">
                  {isLargeScreen() ? <IconWorksLarge /> : <IconWorksSmall />}
                </div>
              </ButtonPageTransition>
            </div>
          </div>
          <div className="parallax-wrapper">
            <div id="circle-about" className="circle-item">
              <ButtonPageTransition
                location="/about"
                onBeforeTransition={document.removeEventListener(
                  "mousemove",
                  onMouseMove
                )}
              >
                <div className="circle-item-icon">
                  {isLargeScreen() ? <IconAboutLarge /> : <IconAboutSmall />}
                </div>
              </ButtonPageTransition>
            </div>
          </div>
          <div className="parallax-wrapper">
            <div id="circle-contact" className="circle-item">
              <ButtonPageTransition
                location="/contact"
                onBeforeTransition={document.removeEventListener(
                  "mousemove",
                  onMouseMove
                )}
              >
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
          <div className="parallax-wrapper">
            <div id="circle-music" className="circle-item">
              <ButtonPageTransition
                location="/music"
                onBeforeTransition={document.removeEventListener(
                  "mousemove",
                  onMouseMove
                )}
              >
                <div className="circle-item-icon">
                  {isLargeScreen() ? <IconMusicLarge /> : <IconMusicSmall />}
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
