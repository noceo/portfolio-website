export default function FigureText(props) {
  return (
    <div className="container-fluid figureText">
      <div className="row">
        <figure className="col-xs-12 col-md-4 offset-md-2 col-lg-5 offset-lg-1">
          <img src={`${props.src}`} alt={props.alt} />
          {/* <ExportedImage style={{ width: "100%", height: "auto" }} src={`${props.src}`} alt="Test" width={4032} height={3024} /> */}
          {/* <Image style={{ width: "100%", height: "auto" }} src={props.src} alt={props.alt} width={4032} height={3024} layout="responsive" /> */}
        </figure>
        <p className="col-xs-12 col-md-4 offset-md-0 col-lg-4 offset-lg-1">
          {props.copy}
        </p>
      </div>
    </div>
  );
}
