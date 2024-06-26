"use client";

import useFadeIn from "@/hooks/useFadeIn";
import Headline from "@/components/Headline";
import Button from "@/components/Button";
import Quote from "@/components/Quote";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowRight from "@/../public/icons/arrow_right.svg";
import ArrowLeftIcon from "@/../public/icons/arrow_left.svg";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("AboutPage");
  useFadeIn("right");

  return (
    <div className="page-about">
      <ButtonPageTransition
        className="link-back anime fade-in"
        location="/"
        redirectBack={true}
      >
        <ArrowLeftIcon />
      </ButtonPageTransition>
      <main>
        <div className="container">
          <div className="row anime fade-in">
            <div className="col-xs-12 col-sm-6 col-md-6 offset-md-1 col-lg-6 col-xl-6">
              <Headline copy1="de me." copy2={t("headline") + "."} />
              <p className="heading3 subline">{t("subline")}</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-5 col-xl-5">
              <img
                className="profile-picture anime fade-in"
                src="/images/portrait.jpg"
                alt="Profile Picture"
              />
            </div>
          </div>
          <div className="row anime fade-in">
            <div className="col-xs-12 col-md-8 offset-md-1 col-lg-6">
              <div>
                {t.rich("content", {
                  p: (chunks) => <p>{chunks}</p>,
                  Quote: (chunks) => <Quote>{chunks}</Quote>,
                })}
              </div>
              <h4 className="heading3">{t("skills.headline")}</h4>
              <p className="mb-3">{t("skills.text")}</p>
              <Button
                className="mb-7"
                asLink={true}
                href="https://drive.google.com/file/d/1r3UV4nHxDCrIAdCjmO1ojhAlrPxIDX0V/view?usp=sharing"
                icon={<ArrowRight />}
              >
                {t("skills.buttonText")}
              </Button>
              <h4 className="heading3">{t("contact.headline")}</h4>
              <p className="mb-3">{t("contact.text")}</p>
              <Button
                className="mb-7"
                icon={<ArrowRight />}
                href="mailto:dev@paulscha.de"
              >
                {t("contact.buttonText")}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <div className="blur"></div>
    </div>
  );
}
