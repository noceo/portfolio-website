import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <nav className="navbar-items col-md-8 offset-md-2">
            <Link href="/works">Opera / Works</Link>
            <a href="/">De me / About</a>
            <a href="/">Nuntiate / Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
