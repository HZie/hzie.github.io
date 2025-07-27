// src/components/Navbar.jsx

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuFadeOut, setMenuFadeOut] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showScrolled = scrolled || location.pathname !== "/";

  // 모바일 메뉴 토글
  const handleMenuToggle = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setMenuFadeOut(true);
      setTimeout(() => {
        setMenuFadeOut(false);
      }, 300);
    } else {
      setMenuOpen(true);
      setMenuFadeOut(false);
    }
  };

  // 메뉴 클릭 시 닫기 (fade-out 적용)
  const handleMenuClose = () => {
    setMenuOpen(false);
    setMenuFadeOut(true);
    setTimeout(() => {
      setMenuFadeOut(false);
    }, 300);
  };

  return (
    <nav
      className={`navbar ${showScrolled ? "navbar--scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        <div className="navbar__logo">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClose();
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            J.Han
          </a>
        </div>
        <button
          className={`navbar__toggle${menuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          onClick={handleMenuToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div
          className={`navbar__menu${menuOpen ? " open" : ""}${
            menuFadeOut ? " fade-out" : ""
          }`}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClose();
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClose();
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const section = document.getElementById("about");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              } else {
                const section = document.getElementById("about");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            About
          </a>

          <Link to="/publications" onClick={handleMenuClose}>
            Publications
          </Link>
          {/*<Link to="/projects" onClick={handleMenuClose}>
            Projects
          </Link>*/}
          <a
            href="/JiyeonHanCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}
          >
            CV
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClose();
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const section = document.getElementById("contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              } else {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
