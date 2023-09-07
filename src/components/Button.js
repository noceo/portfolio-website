import Icon from "./Icon";

export default function Button(props) {
  var content = (
    <>
      <span className="button-copy">{props.children}</span>
      <span className="button-icon">
        <Icon name="arrow_right" />
      </span>
    </>
  );

  if (props.asLink && props.href) {
    return (
      <a className={`button ${props.className}`} href={props.href}>
        {content}
      </a>
    );
  }

  return <button className={`button ${props.className}`}>{content}</button>;
}
