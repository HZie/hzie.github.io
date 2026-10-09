import { publicationGroups } from "../data/publications";
import PublicationList from "../components/PublicationList";
import Contact from "./Contact";

export default function PublicationsPage() {
  return (<main id="main-content"><section className="section page"><div className="section-heading"><h1>Publications</h1><p className="lead">Publications on accessibility, human–AI interaction, and AI-supported creative expression.</p></div>
      {publicationGroups.map((group) => <section className="publication-group" key={group.title}><h2>{group.title}</h2><PublicationList publications={group.papers} headingLevel="h3" /></section>)}<p className="publication-note">* Equal contribution.</p></section><Contact /></main>);
}
