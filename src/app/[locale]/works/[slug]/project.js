"use client";

import useFadeIn from "@/hooks/useFadeIn";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowLeftIcon from "@/../public/icons/arrow_left.svg";
import ArrowRightIcon from "@/../public/icons/arrow_right.svg";
import DynamicComponentRenderer from "@/components/DynamicComponentRenderer";
import Headline from "@/components/Headline";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";

export default function Project({ data }) {
  const t = useTranslations("ProjectPage");
  const tButton = useTranslations("Button");
  useFadeIn("right");

  return (
    <div className="page-project">
      <ButtonPageTransition
        className="link-back anime fade-in"
        location="/works"
        redirectBack={true}
      >
        <ArrowLeftIcon />
      </ButtonPageTransition>
      <main>
        <div className="title-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8 offset-md-1 anime fade-in">
                <Headline copy1={data.title} rotate={false} />
              </div>
            </div>
          </div>
        </div>
        <div className="content container anime fade-in">
          <div className="overview-section">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <h3
                  className="overview-section__description"
                  dangerouslySetInnerHTML={{ __html: data.description_long }}
                />
              </div>
            </div>
            <ul className="row">
              <li className="overview-section__item col-xs-12 col-md-10 offset-md-1 col-lg-4">
                <span>Responsibilities</span>
                <p
                  dangerouslySetInnerHTML={{ __html: data.responsibilities }}
                />
              </li>
              <li className="overview-section__item col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0">
                <span>Project Goal</span>
                <p dangerouslySetInnerHTML={{ __html: data.project_goal }} />
              </li>
            </ul>
          </div>
          {data.components.map((component, index) => (
            <DynamicComponentRenderer key={index} componentData={component} />
          ))}
          <div className="cta-section col-lg-10 offset-lg-1">
            {data.url ? (
              <Button href={data.url} icon={<ArrowRightIcon />}>
                {t("cta")}
              </Button>
            ) : (
              <>
                <p className="heading3 mb-3">{t("projectLocked")}</p>
                <Button href={data.url} icon={<ArrowRightIcon />}>
                  {tButton("contact")}
                </Button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
