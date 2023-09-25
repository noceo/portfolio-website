"use client";

import { useEffect, useContext } from "react";
import { SplashScreenContext } from "@/components/PageWrapper";
import anime from "animejs";
import { fadeInRight } from "@/animations";
import Link from "next/link";
import ButtonBack from "@/components/ButtonBack";

export default function Works({ works }) {
  const context = useContext(SplashScreenContext);

  useEffect(() => {
    const fadeIn = anime({ ...fadeInRight, delay: anime.stagger(fadeInRight.delay) });

    if (!context.isSplashScreenLoading) {
      fadeIn.play();
    }
  }, [context.isSplashScreenLoading]);

  return (
    <div className="page-works">
      <ButtonBack className="anime fade-in" location="/" />
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <ul>
              {works.default.map((project) => {
                return (
                  <li key={project.title} className="anime fade-in">
                    <Link href={`/works/${project.slug}`}>
                      <span>{project.title}</span>
                      <span>– {project.description}</span>
                    </Link>
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
