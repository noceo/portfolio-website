"use client";

// import Icon from "./Icon";

export default function Button(props) {
  var content = (
    <>
      <span className="button-copy">{props.children}</span>
      <span className="button-icon">{props.icon}</span>
    </>
  );

  if (props.asLink && props.href) {
    return (
      <a
        id={props.id}
        className={
          "button interactable" + (props.className ? ` ${props.className}` : "")
        }
        href={props.href}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={props.id}
      className={
        "button interactable" + (props.className ? ` ${props.className}` : "")
      }
      onClick={props.onClick}
    >
      {content}
    </button>
  );
}
