import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link className="navbar__logo" to="/#home" onClick={close}>Jiyeon Han<span aria-hidden="true">.</span></Link>
        <button ref={toggle} className="navbar__toggle" aria-expanded={menuOpen} aria-controls="navigation-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close −" : "Menu +"}</button>
        <div id="navigation-menu" className={`navbar__menu${menuOpen ? " open" : ""}`}>
          <Link to="/#about" onClick={close}>About</Link>
          <Link to="/#publications" onClick={close}>Research</Link>
          <NavLink to="/publications" onClick={close}>Publications</NavLink>
          <Link to="/#contact" onClick={close}>Contact</Link>
          <a className="navbar__cv" href="/JiyeonHanCV.pdf" target="_blank" rel="noopener noreferrer" onClick={close}>View CV <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}
