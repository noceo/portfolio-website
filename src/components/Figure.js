// import ExportedImage from "next-image-export-optimizer";

export default function Figure({ src, alt, caption, classes }) {
  return (
    <figure>
      <img src={`${src}`} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
