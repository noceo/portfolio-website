"use client";

import { useState } from "react";
import Button from "./Button";
import HamburgerIcon from "@/../public/icons/hamburger.svg";
import Link from "./Link";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [open, setOpen] = useState(false);

  const handleClick = function () {
    setOpen(!open);
  };

  return (
    <div className={"navbar " + (open ? "open" : "")}>
      <Button
        id="navbar-toggle"
        className={"icon-only no-border "}
        icon={<HamburgerIcon />}
        onClick={handleClick}
      ></Button>
      <div className="navbar-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 offset-md-0 col-xl-8 offset-xl-2">
              <nav className="navbar-items">
                <Link href="/" onClick={handleClick}>
                  Domum / {t("home.linkText")}
                </Link>
                <Link href="/works" onClick={handleClick}>
                  Opera / {t("works.linkText")}
                </Link>
                <Link href="/about" onClick={handleClick}>
                  De me / {t("about.linkText")}
                </Link>
                <Link href="/contact" onClick={handleClick}>
                  Nuntia / {t("contact.linkText")}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
