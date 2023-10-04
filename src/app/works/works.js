"use client";

import { useEffect, useContext } from "react";
import { SplashScreenContext, PreviousRouteContext, PageTransitionContext } from "@/components/PageWrapper";
import anime from "animejs";
import { fadeInLeft, fadeInRight } from "@/utils/animations";
import Link from "next/link";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowLeftIcon from "../../../public/icons/arrow_left.svg";
import { usePathname } from "next/navigation";
import useFadeIn from "@/hooks/useFadeIn";

export default function Works({ works }) {
  const context = useContext(SplashScreenContext);
  const prevPage = useContext(PreviousRouteContext);
  const pageTransitionContext = useContext(PageTransitionContext);
  const pathname = usePathname();
  useFadeIn(null);
  // useEffect(() => {
  //   var fadeIn;
  //   if (prevPage == "/") fadeIn = anime({ ...fadeInRight, delay: anime.stagger(fadeInRight.delay) });
  //   else fadeIn = anime({ ...fadeInLeft, delay: anime.stagger(fadeInLeft.delay) });
  //   fadeIn.complete = () => {
  //     pageTransitionContext.setPageTransition({ isRunning: false, location: pathname });
  //   };
  //   if (!context.isSplashScreenLoading) {
  //     fadeIn.play();
  //   }
  // }, [context.isSplashScreenLoading]);

  return (
    <div className="page-works">
      <ButtonPageTransition className="link-back anime fade-in" location="/" redirectBack={true}>
        <ArrowLeftIcon />
      </ButtonPageTransition>
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1 col-sm-8 col-md-7">
            <ul>
              {works.default.map((project) => {
                return (
                  <li key={project.title} className="anime fade-in">
                    <ButtonPageTransition location={`/works/${project.slug}`}>
                      <span>{project.title}</span>
                      <span>– {project.description}</span>
                    </ButtonPageTransition>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="circle" />
    </div>
  );
}
