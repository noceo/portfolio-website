"use client";

import { useContext, useEffect } from "react";
import anime from "animejs";
import Navbar from "@/components/Navbar";
import NavCircle from "@/components/NavCircle";
import { SplashScreenContext } from "@/components/PageWrapper";

export default function Home({}) {
  const context = useContext(SplashScreenContext);

  useEffect(() => {
    const loopAnimation = function () {
      document.querySelector("#circle-works").style = "";
      const circleWorks = document.querySelector("#circle-works");
      const circleAbout = document.querySelector("#circle-about");
      const circleContact = document.querySelector("#circle-contact");

      circleWorks.style = "";
      circleAbout.style = "";
      circleContact.style = "";

      anime({
        targets: [circleWorks, circleAbout, circleContact],
        translateY: function () {
          return `${anime.random(5, 10)}px`;
        },
        duration: 1000,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true,
      });
    };

    const timeline = anime.timeline({ autoplay: false });
    timeline
      .add({
        targets: "#circle-works",
        translateX: ["-60%", "0%"],
        translateY: ["80%", "0%"],
        skewY: [
          { value: -30, duration: 100, easing: "easeOutExpo" },
          { value: 0, duration: 600 },
        ],
        easing: "easeOutElastic(1, .6)",
        duration: 800,
      })
      .add(
        {
          targets: "#circle-about",
          translateX: ["110%", "0%"],
          translateY: ["-10%", "0%"],
          scaleY: [
            { value: 0.5, duration: 100, easing: "easeOutExpo" },
            { value: 1, duration: 600 },
          ],
          easing: "easeOutElastic(1, .6)",
          duration: 800,
          changeComplete: function () {
            loopAnimation();
          },
        },
        "-=700"
      )
      .add(
        {
          targets: "#circle-contact",
          translateX: ["-75%", "0%"],
          translateY: ["-75%", "0%"],
          scaleY: [
            { value: 0.5, duration: 100, easing: "easeOutExpo" },
            { value: 1, duration: 600 },
          ],
          easing: "easeOutElastic(1, .6)",
          duration: 800,
        },
        "-=600"
      );

    const fadeIn = anime({
      targets: ".anime.fade-in",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(200),
      easing: "easeInOutQuad",
      direction: "forward",
      complete: () => {
        document.querySelector("#circle-items").style.opacity = 1;
        timeline.play();
      },
      autoplay: false,
    });

    if (!context.isSplashScreenLoading) {
      console.log("PAGE LOAD");
      fadeIn.play();
    }

    return () => {
      fadeIn.pause();
      timeline.pause();
    };
  }, [context.isSplashScreenLoading]);

  return (
    <div className="page-home">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h2 data-title="salve." className="anime fade-in">
              salve.
            </h2>
          </div>
        </div>
      </div>
      <div className="page-home__description container-fluid">
        <div className="row">
          <div className="col-md-4 anime fade-in">
            <h4>Paul Schade</h4>
            <p>
              Frontend Engineer
              <br />
              Music / Art / Digital Media
            </p>
          </div>
        </div>
      </div>
      {/* <div className="info">
        <span></span>
        <p>Lorem ipsum dolor sit amet.</p>
      </div> */}
      <div className="nav-circle-wrapper">
        <NavCircle />
      </div>
    </div>
  );
}
