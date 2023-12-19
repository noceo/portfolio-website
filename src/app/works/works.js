"use client";

import { useEffect, useContext, useRef } from "react";
import {
  SplashScreenContext,
  PreviousRouteContext,
  PageTransitionContext,
} from "@/components/PageWrapper";
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
  const projectListRef = useRef();
  const projectImagesRef = useRef();

  useFadeIn(null);

  useEffect(() => {
    console.log(projectListRef.current);
    projectListRef.current;
  }, []);

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

  function onMouseEnter(e) {
    const elementIndex = Array.prototype.indexOf.call(
      projectListRef.current.children,
      e.currentTarget
    );

    projectImagesRef.current.children
      .item(elementIndex)
      .classList.add("visible");

    const circle = document.querySelector(".circle-bg-wrapper");
    circle.style.opacity = 0;
  }

  function onMouseLeave(e) {
    const elementIndex = Array.prototype.indexOf.call(
      projectListRef.current.children,
      e.currentTarget
    );

    projectImagesRef.current.children
      .item(elementIndex)
      .classList.remove("visible");

    const circle = document.querySelector(".circle-bg-wrapper");
    circle.style.opacity = 1;
  }

  function onClick(e) {
    onMouseLeave(e);
  }

  return (
    <div className="page-works">
      <ButtonPageTransition
        className="link-back anime fade-in"
        location="/"
        redirectBack={true}
      >
        <ArrowLeftIcon />
      </ButtonPageTransition>
      <div className="project-list container">
        <div className="row">
          <ul ref={projectListRef} className="col-xs-12 col-sm-8 col-md-7">
            {works.default.map((project) => {
              return (
                <li
                  key={project.title}
                  onClick={onClick}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className="anime fade-in"
                >
                  <ButtonPageTransition location={`/works/${project.slug}`}>
                    <span>{project.title}</span>
                    <span>– {project.description}</span>
                  </ButtonPageTransition>
                </li>
              );
            })}
          </ul>
          <div ref={projectImagesRef} className="project-list__images">
            {works.default.map((project, i) => (
              <div key={i} className="image-wrapper">
                <img src={project.thumbnail.src} alt={project.thumbnail.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="circle" />
    </div>
  );
}
