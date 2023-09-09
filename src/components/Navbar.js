import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <nav className="navbar-items col-md-12 offset-md-0 col-xl-8 offset-xl-2">
            <Link href="/works">Opera / Works</Link>
            <Link href="/about">De me / About</Link>
            <Link href="/">Nuntia / Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
