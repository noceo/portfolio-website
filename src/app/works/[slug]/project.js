"use client";

import { useEffect, useContext } from "react";
import { SplashScreenContext } from "@/components/PageWrapper";
import anime from "animejs";
import { fadeInRight } from "@/animations";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowLeftIcon from "../../../../public/icons/arrow_left.svg";
import Circle from "@/components/BackgroundCircle";
import DynamicComponentRenderer from "@/components/DynamicComponentRenderer";

export default function Project({ data }) {
  const context = useContext(SplashScreenContext);

  useEffect(() => {
    const fadeIn = anime({ ...fadeInRight, delay: anime.stagger(fadeInRight.delay) });

    if (!context.isSplashScreenLoading) {
      fadeIn.play();
    }
  }, [context.isSplashScreenLoading]);

  return (
    <div className="page-project">
      <ButtonPageTransition className="link-back anime fade-in" location="/works" redirectBack={true}>
        <ArrowLeftIcon />
      </ButtonPageTransition>
      <Circle />
      <main>
        <div className="title-wrapper">
          <div className="container-fluid">
            <div className="row">
              <h2 className="col-10 offset-1 col-md-6 offset-md-3 anime fade-in">{data.title}</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <h3 className="col-10 offset-1 col-md-6 offset-md-3 anime fade-in">{data.description_long}</h3>
          </div>
        </div>
        <div className="anime fade-in">
          {data.components.map((component, index) => (
            <DynamicComponentRenderer key={index} componentData={component} />
          ))}
        </div>
      </main>
    </div>
  );
}
