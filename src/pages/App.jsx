import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Publications from "./Publications";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Publications />
        {/*<Projects />*/}
        <Contact />
      </main>
    </>
  );
}
