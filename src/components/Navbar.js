"use client";

import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

export default function Navbar(props) {
  const [open, setOpen] = useState(false);

  const handleClick = function () {
    setOpen(!open);
  };

  return (
    <div className={"navbar " + (open ? "open" : "")}>
      <Button id="navbar-toggle" className={"icon-only no-border br-0 "} icon={props.closeIcon} onClick={handleClick}></Button>
      <div className="navbar-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div col-md-12 offset-md-0 col-xl-8 offset-xl-2>
              <nav className="navbar-items">
                <Link href="/works">Opera / Works</Link>
                <Link href="/about">De me / About</Link>
                <Link href="/contact">Nuntia / Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
