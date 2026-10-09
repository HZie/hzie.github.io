import { Link } from "react-router-dom";
import profileImage from "../images/profile.png";

export default function Home() {
  return (
    <section id="home" className="home section" aria-labelledby="home-title">
      <div className="home__copy">
        <p className="eyebrow"><span className="status-dot" /> HCI Researcher</p>
        <h1 id="home-title">Jiyeon Han</h1>
        <p className="home__intro">I am an HCI researcher at Ewha Womans University, interested in accessibility and human-centered AI. I am preparing to apply to Ph.D. programs for Fall 2027.</p>
        <div className="home__buttons">
          <Link to="/#publications" className="btn">Selected research <span aria-hidden="true">↗</span></Link>
          <a href="/JiyeonHanCV.pdf" className="text-link" target="_blank" rel="noopener noreferrer">Curriculum vitae <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <figure className="home__portrait">
        <div className="home__portrait-frame"><img src={profileImage} alt="Jiyeon Han" className="home__img" fetchPriority="high" /></div>
        <figcaption><span>Jiyeon Han</span><span>HCI · Accessibility · Human–AI Interaction</span></figcaption>
      </figure>
      <div className="home__footer"><span>Accessibility / Human–AI Interaction / Creative Expression</span><Link to="/#about">About <span aria-hidden="true">↓</span></Link></div>
    </section>
  );
}
