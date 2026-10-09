import Home from "./Home";
import About from "./About";
import Publications, { AllPublications } from "./Publications";
import Contact from "./Contact";

export default function App() {
  return <main id="main-content"><Home /><About /><Publications /><AllPublications /><Contact /></main>;
}
