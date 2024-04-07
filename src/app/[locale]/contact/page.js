"use client";

import useFadeIn from "@/hooks/useFadeIn";
import Button from "@/components/Button";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import Headline from "@/components/Headline";
import ArrowLeftIcon from "@/../public/icons/arrow_left.svg";
import ArrowRightIcon from "@/../public/icons/arrow_right.svg";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("ContactPage");
  const tButton = useTranslations("Button");
  useFadeIn("right");

  return (
    <div className="page-contact">
      <ButtonPageTransition
        className="link-back anime fade-in"
        location="/"
        redirectBack={true}
      >
        <ArrowLeftIcon />
      </ButtonPageTransition>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 col-xl-6">
              <div className="anime fade-in">
                <Headline copy1="nuntia." copy2={t("headline") + "."} />
              </div>
              <h3 className="anime fade-in">{t("subline")}</h3>
              <div className="anime fade-in">
                <p>Email dev@paulscha.de</p>
                <Button
                  asLink={true}
                  href="mailto:dev@paulscha.de"
                  icon={<ArrowRightIcon />}
                >
                  {tButton("contact")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
