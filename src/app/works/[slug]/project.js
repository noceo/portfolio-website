"use client";
import useFadeIn from "@/hooks/useFadeIn";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowLeftIcon from "../../../../public/icons/arrow_left.svg";
import DynamicComponentRenderer from "@/components/DynamicComponentRenderer";

export default function Project({ data }) {
  useFadeIn("right");

  return (
    <div className="page-project">
      <ButtonPageTransition className="link-back anime fade-in" location="/works" redirectBack={true}>
        <ArrowLeftIcon />
      </ButtonPageTransition>
      <main>
        <div className="title-wrapper">
          <div className="container-fluid">
            <div className="row">
              <h2 className="col-10 offset-1 col-md-6 offset-md-3 anime fade-in">{data.title}</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <h3 className="col-10 offset-1 col-md-6 offset-md-3 anime fade-in">{data.description_long}</h3>
          </div>
        </div>
        <div className="anime fade-in">
          {data.components.map((component, index) => (
            <DynamicComponentRenderer key={index} componentData={component} />
          ))}
        </div>
      </main>
    </div>
  );
}
