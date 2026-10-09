import { Link } from "react-router-dom";

export default function PublicationList({ publications, headingLevel = "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="publication-list">
      {publications.map((publication, index) => (
        <article className={`publication${publication.image ? "" : " publication--text"}`} key={publication.id}>
          {publication.image && <Link className="publication__image" to={`/publications/${publication.id}`} tabIndex={-1}>
            <img src={publication.image} alt={publication.image_alt} loading="lazy" />
          </Link>}
          <div className="publication__body">
            <p className="eyebrow">{publication.year} · {publication.venue}</p>
            <Heading><Link to={`/publications/${publication.id}`}>{publication.title}</Link></Heading>
            <p className="publication__authors">{publication.authors}</p>
            <p>{publication.summary}</p>
            <Link className="text-link" to={`/publications/${publication.id}`}>Research details <span aria-hidden="true">↗</span></Link>
          </div>
          <span className="publication__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        </article>
      ))}
    </div>
  );
}
