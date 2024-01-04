"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import NavCircle from "@/components/NavCircle";
import useFadeIn from "@/hooks/useFadeIn";
import Headline from "@/components/Headline";
import { useTranslations } from "next-intl";

export default function Home() {
  const onFadeInComplete = useRef();
  const t = useTranslations("HomePage");

  useEffect(() => {
    const loop = anime({
      targets: [
        "#circle-works",
        "#circle-about",
        "#circle-contact",
        "#circle-music",
      ],
      translateY: function () {
        return `${anime.random(5, 10)}px`;
      },
      duration: 1000,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
      autoplay: false,
    });

    const loopAnimation = function () {
      // const circleWorks = document.querySelector("#circle-works");
      // const circleAbout = document.querySelector("#circle-about");
      // const circleContact = document.querySelector("#circle-contact");

      // circleWorks.style = "";
      // circleAbout.style = "";
      // circleContact.style = "";

      loop.play();
    };

    const timeline = anime.timeline({ autoplay: false });
    timeline
      .add({
        targets: "#circle-works",
        top: ["0%", "-80%"],
        left: ["0%", "70%"],
        skewY: [
          { value: -30, duration: 100, easing: "easeOutExpo" },
          { value: 0, duration: 600 },
        ],
        easing: "easeOutElastic(1, .6)",
        duration: 600,
        changeComplete: () => {
          loopAnimation();
        },
      })
      .add(
        {
          targets: "#circle-about",
          top: ["0%", "40%"],
          left: ["0%", "-100%"],
          scaleY: [
            { value: 0.5, duration: 100, easing: "easeOutExpo" },
            { value: 1, duration: 600 },
          ],
          easing: "easeOutElastic(1, .6)",
          duration: 900,
        },
        "-=500"
      )
      .add(
        {
          targets: "#circle-contact",
          left: ["0%", "75%"],
          top: ["0%", "75%"],
          scaleY: [
            { value: 0.5, duration: 100, easing: "easeOutExpo" },
            { value: 1, duration: 600 },
          ],
          easing: "easeOutElastic(1, .6)",
          duration: 700,
        },
        "-=600"
      )
      .add(
        {
          targets: "#circle-music",
          left: ["0%", "-80%"],
          top: ["0%", "-60%"],
          scaleY: [
            { value: 0.5, duration: 100, easing: "easeOutExpo" },
            { value: 1, duration: 600 },
          ],
          easing: "easeOutElastic(1, .6)",
          duration: 1200,
        },
        "-=650"
      );

    onFadeInComplete.current = () => {
      document.querySelector("#circle-items").style.opacity = 1;
      timeline.play();
    };

    return () => {
      timeline.pause();
      loop.pause();
    };
  }, []);

  useFadeIn("left", onFadeInComplete);

  return (
    <div className="page-home">
      <div className="container">
        <div className="row">
          <div className="col-md-5 anime fade-in">
            <Headline
              className="anime fade-in"
              copy1="salve."
              copy2={t("headline") + "."}
            />
          </div>
        </div>
        <div className="page-home__description row">
          <div className="col-md-4 anime fade-in">
            <h4>Paul Schade</h4>
            <p dangerouslySetInnerHTML={{ __html: t.raw("description") }}></p>
          </div>
        </div>
      </div>
      <div className="nav-circle-wrapper">
        <NavCircle />
      </div>
    </div>
  );
}
