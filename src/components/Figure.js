// import ExportedImage from "next-image-export-optimizer";

export default function Figure(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <figure className="col-10 offset-1 col-md-8 offset-md-2 col-lg-10 offset-lg-1">
          <img src={`${props.src}`} alt={props.alt} />
          {/* <ExportedImage style={{ width: "100%", height: "auto" }} src={`${props.src}`} alt="Test" width={4032} height={3024} /> */}
          {/* <Image style={{ width: "100%", height: "auto" }} src={props.src} alt={props.alt} width={4032} height={3024} layout="responsive" /> */}
        </figure>
      </div>
    </div>
  );
}
