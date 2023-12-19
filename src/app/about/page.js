"use client";

import useFadeIn from "@/hooks/useFadeIn";
import Headline from "@/components/Headline";
import Button from "@/components/Button";
import Quote from "@/components/Quote";
import ArrowRight from "../../../public/icons/arrow_right.svg";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowLeftIcon from "../../../public/icons/arrow_left.svg";

export default function About() {
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
            <div className="col-xs-12 col-md-10 offset-md-1 col-lg-8 col-xl-6">
              <Headline copy1="de me." copy2="about." />
              <p className="heading3 mb-7">
                I’m Paul. A developer, art enthusiast and music maker.
              </p>
            </div>
          </div>
          <div className="row anime fade-in">
            <div className="col-xs-12 col-md-6 offset-md-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                eros nec tortor aliquam elementum volutpat eget sem. Maecenas
                fringilla et libero vel congue. Nullam ullamcorper nibh id
                accumsan ultricies. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Duis
                eleifend odio aliquam mattis bibendum. Nulla bibendum tellus ac
                dapibus scelerisque. Donec vel urna sit amet enim convallis
                suscipit vitae vel urna. Integer sem ex, gravida in mollis non,
                sagittis ac leo.
              </p>
              <Quote>
                Designing with the user in mind is crucial to deliver the best
                possible product.
              </Quote>
              <p>
                Duis accumsan malesuada dolor. Cras a varius massa. Pellentesque
                augue ligula, tempus porta dolor ut, eleifend facilisis dolor.
                Vivamus nisi eros, ultricies at placerat ut, lobortis vitae
                arcu. Aenean fringilla, lorem sit amet dapibus convallis, urna
                lectus consequat est, a dignissim nisl lorem ut ligula. Etiam ut
                felis non mi malesuada hendrerit. Morbi facilisis sollicitudin
                tempor. Vivamus fringilla tempor hendrerit. Nullam faucibus
                tellus enim, et gravida lacus porta at. Integer at malesuada
                diam. Vivamus consectetur tortor ante, non fringilla lacus
                mollis vel. Praesent urna sapien, suscipit non lacus a, tempor
                semper mi. Proin interdum turpis consequat ipsum sollicitudin,
                in ultricies nisi malesuada.
              </p>
              <h4 className="heading3">Experience</h4>
              <p>
                Etiam vel magna id lorem blandit consectetur vel quis lacus.
                Proin pretium lacus vitae enim dictum, nec luctus purus semper.
                Phasellus in molestie lectus. Donec dui nunc, mollis feugiat
                dignissim vel, convallis vitae est. Maecenas sed elit non diam
                condimentum interdum. Orci varius natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Quisque consequat
                congue nunc quis auctor. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Fusce
                pharetra eget nisi commodo mollis. Sed sed purus justo.
              </p>
              <h4 className="heading3">Skills</h4>
              <p className="mb-3">
                Ut nunc felis, rhoncus et massa et, posuere convallis nunc.
                Integer mollis nisl quam, quis convallis ante pharetra quis.
                Morbi porta ligula at libero placerat ullamcorper. Vestibulum ac
                cursus mauris, vel consectetur lectus.
              </p>
              <Button
                className="mb-7"
                asLink={true}
                href="/"
                icon={<ArrowRight />}
              >
                My CV
              </Button>
              <h4 className="heading3">Let’s work together</h4>
              <p className="mb-3">
                I can help you with your project idea and take it from concept
                to deployment.
              </p>
              <Button className="mb-7" icon={<ArrowRight />}>
                Contact me
              </Button>
            </div>
          </div>
        </div>
        <div className="profile-picture anime fade-in">
          <div className="container-fluid">
            <div className="row">
              <figure className="col-xs-12 col-md-3 offset-md-9">
                <img src={"./images/profile.jpeg"} alt="Profile Picture" />
              </figure>
            </div>
          </div>
        </div>
      </main>
      <div className="blur"></div>
    </div>
  );
}
