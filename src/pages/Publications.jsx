import { useRef } from "react";
import useScrollAnimation from "../utils/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { publications } from "../data/publications";

export default function Publications() {
  const ref = useRef();
  useScrollAnimation(ref);
  const navigate = useNavigate();

  return (
    <section id="publications" className="section" ref={ref}>
      <h1>Publications</h1>
      <div className="grid">
        {publications.slice(0, 3).map((pub) => (
          <article
            key={pub.id}
            className="card"
            onClick={() => navigate(`/publications/${pub.id}`)}
          >
            <h2>{pub.title}</h2>
            <p>
              <strong>{pub.venue}</strong>
            </p>
            <p>{pub.summary}</p>
          </article>
        ))}
      </div>
      <button className="btn-more" onClick={() => navigate("/publications")}>
        Show More
      </button>
    </section>
  );
}
