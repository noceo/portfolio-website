import Button from "./Button";
import LinkedInIcon from "@/../public/icons/linkedin.svg";
import GithubIcon from "@/../public/icons/github.svg";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <Button
        className="icon-only"
        href="https://www.linkedin.com/in/paul-schade/"
        icon={<LinkedInIcon />}
      />
      <Button
        className="icon-only"
        href="https://github.com/noceo"
        icon={<GithubIcon />}
      />
    </div>
  );
}
