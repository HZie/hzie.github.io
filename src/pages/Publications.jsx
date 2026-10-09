import { Link } from "react-router-dom";
import { publications } from "../data/publications";
import { research } from "../data/research";

const featuredIds = ["ascleai", "museforge", "toggrid"];

export default function Publications() {
  return (
    <section id="publications" className="section research" aria-labelledby="research-title">
      <div className="section-heading"><p className="eyebrow">Selected work</p><h2 id="research-title">Questions, prototypes, and people.</h2><p className="lead">Three projects exploring human-centered AI, accessibility, and creative expression.</p></div>
      {featuredIds.map((id, index) => {
        const study = research.find((entry) => entry.id === id);
        const paper = publications.find((entry) => entry.id === study.publicationId);
        return (
          <article className="publication featured-study" key={study.id}>
            {paper?.image && <Link className="publication__image" to={`/research/${study.id}`} tabIndex={-1}><img src={paper.image} alt={paper.image_alt} loading="lazy" /></Link>}
            <div className="publication__body">
              <p className="eyebrow">{study.status}</p>
              <h3><Link to={`/research/${study.id}`}>{study.title}</Link></h3>
              <p>{study.question}</p>
              <p>{study.takeaway || study.summary}</p>
              <Link className="text-link" to={`/research/${study.id}`}>Explore the research <span aria-hidden="true">↗</span></Link>
            </div>
            <span className="publication__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          </article>
        );
      })}
    </section>
  );
}

export function AllPublications() {
  return (
    <section className="section cv-section compact-publications" aria-labelledby="all-publications-title">
      <div className="research__heading"><h2 id="all-publications-title">Publications</h2><Link to="/publications" className="text-link">All papers &amp; research details ↗</Link></div>
      <ol className="citation-list">
        {publications.map((paper) => <li key={paper.id}><span className="citation-year">{paper.year}</span><div><h3><Link to={`/publications/${paper.id}`}>{paper.title}</Link></h3><p>{paper.venue}</p></div><a className="text-link" href={paper.link} target="_blank" rel="noopener noreferrer" aria-label={`Read paper: ${paper.title}`}>Paper ↗</a></li>)}
      </ol>
    </section>
  );
}
