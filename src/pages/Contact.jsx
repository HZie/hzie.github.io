import { useRef } from "react";
import useScrollAnimation from "../utils/useScrollAnimation";

export default function Contact() {
  const ref = useRef();
  useScrollAnimation(ref);
  return (
    <section id="contact" class="contact__section">
      <div class="max-container">
        <h2 class="title">Contact</h2>
        <p class="description">jiyeon.han347@gmail.com</p>
        <ul class="contact__links">
          <li>
            <a
              class="btn btn--outline"
              href="https://github.com/hzie"
              target="_blank"
              title="my github link"
            >
              Github
            </a>
          </li>
          <li>
            <a
              class="btn btn--outline"
              href="https://www.linkedin.com/in/jiyeon-han347/"
              target="_blank"
              title="my linkedin link"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
