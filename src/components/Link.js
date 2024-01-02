import { Link as IntlLink } from "@/navigation";

export default function Link({ children, href, isExternal, onClick }) {
  if (isExternal)
    return (
      <a className="interactable" href={href} onClick={onClick}>
        {children}
      </a>
    );

  return (
    <IntlLink className="interactable" href={href} onClick={onClick}>
      {children}
    </IntlLink>
  );
}
