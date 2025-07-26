// src/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import useScrollAnimation from "../utils/useScrollAnimation";

export default function Home() {
  const ref = useRef();
  useScrollAnimation(ref);

  // 타이핑 애니메이션 로직
  const fullText = "Jiyeon Han";
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && idx < fullText.length) {
      timeout = setTimeout(() => {
        setText((t) => t + fullText[idx]);
        setIdx((i) => i + 1);
      }, 80);
    } else if (deleting && idx > 0) {
      timeout = setTimeout(() => {
        setText((t) => t.slice(0, -1));
        setIdx((i) => i - 1);
      }, 50);
    } else if (!deleting && idx === fullText.length) {
      timeout = setTimeout(() => setDeleting(true), 10000);
    } else if (deleting && idx === 0) {
      setDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [idx, deleting]);

  return (
    <section id="home" className="home section" ref={ref}>
      <div className="home__container">
        {/* Hero part */}
        <div className="home__inner">
          <img
            src="/src/images/profile.png"
            alt="Jiyeon Han"
            className="home__img"
          />
          <h1>
            I'm{" "}
            <span className="highlight">
              {text}
              <span className="cursor">|</span>
            </span>
          </h1>
          <p>MS in Human-Computer Interaction, Ewha Womans University</p>
        </div>
        <div className="home__buttons">
          <a
            href="#contact"
            className="btn btn--outline"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              } else {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }
            }}
          >
            Contact
          </a>
          <a
            href="/JiyeonHanCV.pdf"
            className="btn btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>
      </div>
    </section>
  );
}
