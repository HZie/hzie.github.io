// src/pages/DetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { publications } from "../data/publications";
import { projects } from "../data/projects";

export default function DetailPage() {
  const { category, id } = useParams();
  const data = category === "projects" ? projects : publications;
  const item = data.find((d) => String(d.id) === id);

  console.log(item);

  if (!item) {
    return (
      <section className="section detail-page">
        <h1>Not Found</h1>
        <Link to={`/${category}`}>Back to {category}</Link>
      </section>
    );
  }

  return (
    <section className="section detail-page">
      <div className="detail__container">
        <h1 className="detail__title">{item.title}</h1>
        <div className="detail__content">
          {item.image && (
            <img src={item.image} alt={item.title} className="detail__img" />
          )}
          <div className="detail__info">
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
            <p>{item.description}</p>
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
            <Link to={`/${category}`} className="btn-more">
              Back to {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
