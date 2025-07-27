import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../utils/useScrollAnimation";
import { publications } from "../data/publications";

export default function PublicationsPage() {
  const ref = useRef();
  useScrollAnimation(ref);
  const navigate = useNavigate();

  return (
    <section className="section page" ref={ref}>
      <h1>All Publications</h1>
      <div className="grid">
        {publications.map((pub) => (
          <article
            key={pub.id}
            className="card"
            onClick={() => navigate(`/publications/${pub.id}`)}
          >
            {" "}
            <img src={pub.image} alt={pub.title} className="card-img" />
            <h2>{pub.title}</h2>
            <p>
              <strong>{pub.venue}</strong>
            </p>
            <p>{pub.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
