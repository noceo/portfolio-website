"use client";
import useFadeIn from "@/hooks/useFadeIn";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowLeftIcon from "@/../public/icons/arrow_left.svg";
import DynamicComponentRenderer from "@/components/DynamicComponentRenderer";
import Headline from "@/components/Headline";

export default function Project({ data }) {
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
              <h3 className="overview-section__description col-xs-12 col-md-10 offset-md-1">
                {data.description_long}
              </h3>
            </div>
            <ul className="row">
              <li className="overview-section__item col-xs-12 col-md-10 offset-md-1 col-lg-4">
                <span>Responsibilities</span>
                <p>{data.responsibilities}</p>
              </li>
              <li className="overview-section__item col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0">
                <span>Project Goal</span>
                <p>{data.project_goal}</p>
              </li>
            </ul>
          </div>
          {data.components.map((component, index) => (
            <DynamicComponentRenderer key={index} componentData={component} />
          ))}
        </div>
      </main>
    </div>
  );
}
