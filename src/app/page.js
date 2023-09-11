import Navbar from "@/components/Navbar";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <div className="page-home">
      <div className="circle-wrapper">
        <div className="circle"></div>
        <Navbar closeIcon={<Icon name="hamburger" />} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h2 data-title="salve.">salve.</h2>
          </div>
        </div>
      </div>
      <div className="page-home__description container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h4>Paul Schade</h4>
            <p>
              Frontend Engineer
              <br />
              Music / Art / Digital Media
            </p>
          </div>
        </div>
      </div>
      {/* <div className="info">
        <span></span>
        <p>Lorem ipsum dolor sit amet.</p>
      </div> */}
    </div>
  );
}
