"use client";

import useFadeIn from "@/hooks/useFadeIn";
import Button from "@/components/Button";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import Headline from "@/components/Headline";
import ArrowLeftIcon from "@/../public/icons/arrow_left.svg";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("ContactPage");
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 col-xl-6">
              <div className="anime fade-in">
                <Headline copy1="nuntia." copy2={t("headline") + "."} />
              </div>
              <h3 className="anime fade-in">{t("subline")}</h3>
              <div className="anime fade-in">
                <p>Email: paulschade98@gmail.com</p>
                <Button asLink={true} href="mailto:paulschade98@gmail.com">
                  {t("buttonText")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
