"use client";

import useBreakpoint from "@/hooks/useBreakpoint";
import ButtonPageTransition from "./ButtonPageTransition";
import IconWorksSmall from "../../public/icons/circle_works_small.svg";
import IconWorksLarge from "../../public/icons/circle_works_large.svg";
import IconContactSmall from "../../public/icons/circle_contact_small.svg";
import IconContactLarge from "../../public/icons/circle_contact_large.svg";
import IconAboutSmall from "../../public/icons/circle_about_small.svg";
import IconAboutLarge from "../../public/icons/circle_about_large.svg";

export default function NavCircle() {
  const breakpoint = useBreakpoint();

  const isLargeScreen = () => {
    if (breakpoint === "md" || breakpoint === "lg" || breakpoint === "xl" || breakpoint === "xxl") return true;
  };

  return (
    <>
      <div className="circle-nav anime fade-in">
        <div id="circle-items">
          {/* <div className="circle-item-wrapper"> */}
          <div id="circle-works" className="circle-item">
            <ButtonPageTransition location="/works">
              <div className="circle-item-icon">{isLargeScreen() ? <IconWorksLarge /> : <IconWorksSmall />}</div>
            </ButtonPageTransition>
          </div>
          {/* </div> */}
          {/* <div className="circle-item-wrapper"> */}
          <div id="circle-about" className="circle-item">
            <ButtonPageTransition location="/about">
              <div className="circle-item-icon">{isLargeScreen() ? <IconAboutLarge /> : <IconAboutSmall />}</div>
            </ButtonPageTransition>
          </div>
          {/* </div> */}
          {/* <div className="circle-item-wrapper"> */}
          <div id="circle-contact" className="circle-item">
            <ButtonPageTransition location="/contact">
              <div className="circle-item-icon">{isLargeScreen() ? <IconContactLarge /> : <IconContactSmall />}</div>
            </ButtonPageTransition>
          </div>
          {/* </div> */}
        </div>
        {/* <svg style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", transform: "rotate(90deg)", transformOrigin: "center" }} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" id="ring" cx="50" cy="50" r="50" />
      </svg> */}
      </div>
      <div className="circle-nav-vis anime fade-in" />
    </>
  );
}
