"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import HamburgerIcon from "@/../public/icons/hamburger.svg";

export default function Navbar(props) {
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
                  Domum / Home
                </Link>
                <Link href="/works" onClick={handleClick}>
                  Opera / Works
                </Link>
                <Link href="/about" onClick={handleClick}>
                  De me / About
                </Link>
                <Link href="/contact" onClick={handleClick}>
                  Nuntia / Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
