import { useRef } from "react";
import useScrollAnimation from "../utils/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  const ref = useRef();
  useScrollAnimation(ref);
  const navigate = useNavigate();

  return (
    <section id="projects" className="section" ref={ref}>
      <h1>Projects</h1>
      <div className="grid">
        {projects.slice(0, 3).map((proj) => (
          <article
            key={proj.id}
            className="card"
            onClick={() => navigate(`/projects/${proj.id}`)}
          >
            <img src={proj.image} alt={proj.title} className="card-img" />
            <h2>{proj.title}</h2>
            <p>{proj.summary}</p>
          </article>
        ))}
      </div>
      <button className="btn-more" onClick={() => navigate("/projects")}>
        Show More
      </button>
    </section>
  );
}
