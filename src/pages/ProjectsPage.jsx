import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../utils/useScrollAnimation";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const ref = useRef();
  useScrollAnimation(ref);
  const navigate = useNavigate();

  return (
    <section className="section page" ref={ref}>
      <h1>All Projects</h1>
      <div className="grid">
        {projects.map((proj) => (
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
    </section>
  );
}
