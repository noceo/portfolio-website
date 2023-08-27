import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="page-home">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 data-title="salve.">salve.</h2>
          </div>
        </div>
      </div>
      <div className="page-home__description container">
        <div className="row">
          <div className="col-md-3">
            <h4>Paul Schade</h4>
            <p>
              Frontend Engineer
              <br />
              Music / Art / Digital Media
            </p>
          </div>
        </div>
      </div>
      <div className="circle-bg"></div>
      <div className="circle"></div>
      <div className="info">
        <span></span>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}
