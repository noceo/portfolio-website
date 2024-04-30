"use client";

import { useEffect, useRef } from "react";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowLeftIcon from "@/../public/icons/arrow_left.svg";
import useFadeIn from "@/hooks/useFadeIn";
import { detectMobileAndTablet } from "@/utils/detect-mobile";

export default function Works({ works }) {
  const projectListRef = useRef();
  const projectImagesRef = useRef();

  useFadeIn(null);

  useEffect(() => {
    projectListRef.current;
  }, []);

  function onMouseEnter(e) {
    if (detectMobileAndTablet()) return;
    const elementIndex = Array.prototype.indexOf.call(
      projectListRef.current.children,
      e.currentTarget.parentNode
    );

    projectImagesRef.current.children
      .item(elementIndex)
      .classList.add("visible");

    const circle = document.querySelector(".circle-bg-wrapper");
    circle.style.transition = "opacity 0.3s linear";
    circle.style.opacity = 0;
  }

  function onMouseLeave(e) {
    const elementIndex = Array.prototype.indexOf.call(
      projectListRef.current.children,
      e.currentTarget.parentNode
    );

    projectImagesRef.current.children
      .item(elementIndex)
      .classList.remove("visible");

    const circle = document.querySelector(".circle-bg-wrapper");
    circle.style.transition = "opacity 3s linear";
    circle.style.opacity = 1;
  }

  function disableProjectList() {
    for (const listItem of projectListRef.current.children) {
      listItem.style.pointerEvents = "none";
    }
  }

  function onClick(e) {
    onMouseLeave(e);
    disableProjectList();
  }

  function onBackButtonClick() {
    disableProjectList();
  }

  return (
    <div className="page-works">
      <div onClick={onBackButtonClick}>
        <ButtonPageTransition
          className="link-back anime fade-in"
          location="/"
          redirectBack={true}
        >
          <ArrowLeftIcon />
        </ButtonPageTransition>
      </div>
      <div className="project-list container">
        <div className="row">
          <ul ref={projectListRef} className="col-xs-12 col-sm-8 col-md-7">
            {works.map((project) => {
              return (
                <li key={project.title} className="anime fade-in">
                  <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                  >
                    <ButtonPageTransition location={`/works/${project.slug}`}>
                      <span>{project.title}</span>
                      <span>– {project.description}</span>
                    </ButtonPageTransition>
                  </div>
                </li>
              );
            })}
          </ul>
          <div ref={projectImagesRef} className="project-list__images">
            {works.map((project, i) => (
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
