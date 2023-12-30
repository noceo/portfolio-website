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
            <div className="col-xs-12 col-md-10 offset-md-1 col-lg-10 col-xl-6">
              <Headline copy1="de me." copy2={t("headline") + "."} />
              <p className="heading3 mb-7">{t("subline")}</p>
            </div>
          </div>
          <div className="row anime fade-in">
            <div className="col-xs-12 col-md-6 offset-md-1">
              <div dangerouslySetInnerHTML={{ __html: t.raw("content") }} />
              <h4 className="heading3">{t("skills.headline")}</h4>
              <p className="mb-3">{t("skills.text")}</p>
              <Button
                className="mb-7"
                asLink={true}
                href="/"
                icon={<ArrowRight />}
              >
                {t("skills.buttonText")}
              </Button>
              <h4 className="heading3">{t("contact.headline")}</h4>
              <p className="mb-3">{t("contact.text")}</p>
              <Button className="mb-7" icon={<ArrowRight />}>
                {t("contact.buttonText")}
              </Button>
            </div>
          </div>
        </div>
        <div className="profile-picture anime fade-in">
          <div className="container-fluid">
            <div className="row">
              <figure className="col-xs-12 col-md-3 offset-md-9">
                <img src="/images/profile.jpeg" alt="Profile Picture" />
              </figure>
            </div>
          </div>
        </div>
      </main>
      <div className="blur"></div>
    </div>
  );
}
