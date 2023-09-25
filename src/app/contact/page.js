"use client";

import { useEffect, useContext } from "react";
import { SplashScreenContext } from "@/components/PageWrapper";
import anime from "animejs";
import { fadeInRight } from "@/animations";
import Button from "@/components/Button";
import ButtonBack from "@/components/ButtonBack";

export default function Contact() {
  const context = useContext(SplashScreenContext);

  useEffect(() => {
    const fadeIn = anime({ ...fadeInRight, delay: anime.stagger(fadeInRight.delay) });

    if (!context.isSplashScreenLoading) {
      fadeIn.play();
    }
  }, [context.isSplashScreenLoading]);

  return (
    <div className="page-contact">
      <ButtonBack className="anime fade-in" location="/" />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 col-xl-6">
              <h2 data-title="nuntia." className="anime fade-in">
                nuntia.
              </h2>
              <h3 className="anime fade-in">I would like to know about your future project. Maybe I can help you with it.</h3>
              <div className="anime fade-in">
                <p>Email: paulschade98@gmail.com</p>
                <Button asLink={true} href="mailto:paulschade98@gmail.com">
                  Contact me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
