function Text(props) {
  return (
    <div className="container">
      <div className="row">
        <p className={props.classes}>{props.copy}</p>
      </div>
    </div>
  );
}

export default Text;
