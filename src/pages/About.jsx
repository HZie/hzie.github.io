import { useRef } from "react";
import useScrollAnimation from "../utils/useScrollAnimation";

export default function About() {
  const ref = useRef();
  useScrollAnimation(ref);
  return (
    <section id="about" className="section" ref={ref}>
      <h1>About Me</h1>
      <p>
        I am a prospective Ph.D. student in Human-Computer Interaction at Ewha
        Womans University. My work focuses on designing{" "}
        <span className="highlight-text">
          human-centered AI systems that enable inclusive and equitable user
          experiences
        </span>
        —especially in creative and high-stakes contexts.
      </p>
      <p>
        I earned my M.S. and B.S. in Computer Science from Ewha Womans
        University, conducting research in the{" "}
        <span className="highlight-text">
          Human-Computer Interaction Lab under Professor Uran Oh.{" "}
        </span>
        My research investigates how people interact with intelligent systems
        and proposes design methods to bridge usability gaps for diverse user
        groups.
      </p>
      <p>
        Prior to graduate school, I developed games and mobile applications,
        including a tycoon game released on Steam and productivity apps for
        Google Play. These hands-on experiences sparked my passion for creating{" "}
        interactive systems that enhance everyday life and continue to shape my
        research approach.
      </p>
      <p>
        <strong>Research Interests: </strong>
        Human-Computer Interaction (HCI), Accessibility, AI Usability, UX
        Evaluation, AI Co-creation
      </p>
    </section>
  );
}
