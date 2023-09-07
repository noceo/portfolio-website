import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Quote from "@/components/Quote";

export default function About() {
  return (
    <div className="page-about">
      <div className="profile-picture">
        <div className="container-fluid">
          <div className="row">
            <figure className="col-10 offset-1 col-md-3 offset-md-9">
              <img src={"./images/chair.jpeg"} alt="Profile Picture" />
            </figure>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 col-xl-6">
            <div>
              <h2 data-title="de me.">de me.</h2>
            </div>
            <span className="quote">I’m Paul. A developer, art enthusiast and music maker.</span>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed eros nec tortor aliquam elementum volutpat eget sem. Maecenas fringilla et libero vel congue. Nullam ullamcorper nibh id accumsan ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis eleifend odio aliquam mattis bibendum. Nulla bibendum tellus ac dapibus scelerisque. Donec vel urna sit amet enim convallis suscipit vitae vel urna. Integer sem ex, gravida in mollis non, sagittis ac leo.
              <br />
              <br />
              <Quote>Designing with the user in mind is crucial to deliver the best possible product.</Quote>
              <br />
              Duis accumsan malesuada dolor. Cras a varius massa. Pellentesque augue ligula, tempus porta dolor ut, eleifend facilisis dolor. Vivamus nisi eros, ultricies at placerat ut, lobortis vitae arcu. Aenean fringilla, lorem sit amet dapibus convallis, urna lectus consequat est, a dignissim nisl lorem ut ligula. Etiam ut felis non mi malesuada hendrerit. Morbi facilisis sollicitudin tempor. Vivamus fringilla tempor hendrerit. Nullam faucibus tellus enim, et gravida lacus porta at. Integer at malesuada diam. Vivamus consectetur tortor ante, non fringilla lacus mollis vel. Praesent urna sapien, suscipit non lacus a, tempor semper mi. Proin interdum turpis consequat ipsum sollicitudin, in ultricies nisi malesuada.
            </p>
            <h4>Experience</h4>
            <p>Etiam vel magna id lorem blandit consectetur vel quis lacus. Proin pretium lacus vitae enim dictum, nec luctus purus semper. Phasellus in molestie lectus. Donec dui nunc, mollis feugiat dignissim vel, convallis vitae est. Maecenas sed elit non diam condimentum interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque consequat congue nunc quis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce pharetra eget nisi commodo mollis. Sed sed purus justo.</p>
            <h4>Skills</h4>
            <p className="mb-50">Ut nunc felis, rhoncus et massa et, posuere convallis nunc. Integer mollis nisl quam, quis convallis ante pharetra quis. Morbi porta ligula at libero placerat ullamcorper. Vestibulum ac cursus mauris, vel consectetur lectus.</p>

            <Button className="mb-100" asLink={true} href="/">
              My CV
            </Button>
            <h4>Let's work together</h4>
            <p className="mb-50">I can help you with your project idea and take it from concept to deployment.</p>
            <Button>Contact me</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
