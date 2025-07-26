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
        Womans University, with research interests in{" "}
        <strong>accessibility</strong>, <strong>AI usability</strong>,
        <strong>interaction design</strong>, and <strong>UX evaluation</strong>.
      </p>
      <p>
        I completed my M.S. in Computer Science at Ewha Womans University,
        conducting research in the Human-Computer Interaction Lab under
        Professor Uran Oh. I also hold a B.S. in Computer Science from Ewha
        Womans University.
      </p>
      <p>
        My research focuses on designing human-centered AI systems that support
        inclusive and equitable user experiences—especially in creative and
        high-stakes contexts. I explore how people interact with intelligent
        systems and develop design methods to bridge usability gaps for diverse
        user groups.
      </p>
      <p>
        Before my graduate studies, I gained hands-on experience developing
        games and mobile applications, including a tycoon game released on Steam
        and productivity apps for Google Play, which sparked my passion for
        creating interactive systems that enhance everyday experiences.
      </p>
      <p>
        <strong>Education</strong>{" "}
      </p>
      <p>MS in Human-Computer Interaction, Ewha Womans University</p>
      <p>BS in Computer Science, Ewha Womans University</p>
      <p>
        <strong>Research Interests:</strong> Human-Computer Interacation (HCI),
        Accessibility, AI Usability, UX Evaluation, AI Co-creation
      </p>
    </section>
  );
}
