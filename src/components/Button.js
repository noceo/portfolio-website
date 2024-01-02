"use client";

export default function Button({
  children,
  icon,
  href,
  asLink,
  onClick,
  className,
  id,
}) {
  var content = (
    <>
      <span className="button-copy">{children}</span>
      <span className="button-icon">{icon}</span>
    </>
  );

  if (asLink && href) {
    return (
      <a
        id={id}
        className={"button interactable" + (className ? ` ${className}` : "")}
        href={href}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      className={"button interactable" + (className ? ` ${className}` : "")}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
