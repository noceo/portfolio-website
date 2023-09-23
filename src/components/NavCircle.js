"use client";

import NavCircleButton from "./NavCircleButton";

export default function NavCircle() {
  return (
    <>
      <div className="circle-nav anime fade-in">
        <div id="circle-items">
          {/* <div className="circle-item-wrapper"> */}
          <div id="circle-works" className="circle-item">
            <NavCircleButton location="/works">
              {/* Opera /<br />
              Works */}
            </NavCircleButton>
          </div>
          {/* </div> */}
          {/* <div className="circle-item-wrapper"> */}
          <div id="circle-about" className="circle-item">
            <NavCircleButton location="/about">{/* De me / About */}</NavCircleButton>
          </div>
          {/* </div> */}
          {/* <div className="circle-item-wrapper"> */}
          <div id="circle-contact" className="circle-item">
            <NavCircleButton location="/contact">{/* Nuntia / Contact */}</NavCircleButton>
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
