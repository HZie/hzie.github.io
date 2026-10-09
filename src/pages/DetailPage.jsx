import { research } from "../data/research";
import ResearchOverview from "../components/ResearchOverview";
// src/pages/DetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { publications } from "../data/publications";
import { projects } from "../data/projects";

export default function DetailPage() {
  const { category, id } = useParams();
  const data = category === "projects" ? projects : category === "publications" ? publications : [];
  const study = research.find((entry) => category === "research" ? entry.id === id : category === "publications" && String(entry.publicationId) === id);
  const paper = category === "research" && study ? publications.find((entry) => entry.id === study.publicationId) : null;
  const item = category === "research" ? study && { ...paper, ...study, abstract: paper?.abstract } : data.find((d) => String(d.id) === id);


  if (!item) {
    return (
      <main id="main-content" className="section detail-page">
        <h1>Not Found</h1>
        <Link to="/">Back to home</Link>
      </main>
    );
  }

  return (
    <main id="main-content" className="section detail-page">
      <div className="detail__container">
        <h1 className="detail__title">{item.title}</h1>
        <div className="detail__content">
          {item.image && (
            <img
              src={item.image}
              alt={item.image_alt || item.title}
              className="detail__img"
            />
          )}
          <div className="detail__info">
            {study && <p className="eyebrow">{study.status}</p>}
            {item.authors && <p>{item.authors} ({item.year})</p>}
            {!item.abstract && item.summary && <p>{item.summary}</p>}
            {item.venue && (
              <p>
                <strong>Venue:</strong> {item.venue}
              </p>
            )}
            {item.period && (
              <p>
                <strong>Period:</strong> {item.period}
              </p>
            )}
            {item.description && (
              <p>
                <strong>Description:</strong> {item.description}
              </p>
            )}
            {study?.contribution && <ResearchOverview study={study} />}
            {item.abstract && (
              <details className="abstract"><summary>Publication abstract</summary><p>{item.abstract}</p></details>
            )}
            <Link to={category === "research" ? "/#publications" : `/${category}`} className="btn-more">
              Back to {category === "research" ? "Selected Research" : category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-more"
              >
                {category === "projects" ? "View Project" : "Read Full Paper"}
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
