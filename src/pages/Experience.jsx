const awards = [
  ["HSpace HRR Scholarship", "Feb 2026–Present"],
  ["Boeing Scholarship Recipient", "Aug 2024"],
  ["Grand Prize, Ewha Graduate Student Convergence Research Forum", "Feb 2023"],
  ["Ewha Womans University Admissions Scholarship for Graduates", "Mar 2022"],
  ["Outstanding Capstone Design Project Award", "Dec 2019"],
];
const teaching = [
  ["C Programming", "Spring 2023", "Graduate Teaching Assistant"],
  ["Artificial Intelligence", "Spring 2023", "Graduate Teaching Assistant"],
  ["Automata Theory", "Fall 2022", "Graduate Teaching Assistant"],
  ["Linear Algebra", "Spring 2022", "Graduate Teaching Assistant"],
  ["Linux Workshop", "Summer 2019", "Undergraduate Teaching Assistant"],
];


export function EducationAndResearch() {
  return (
    <>
      <section className="section cv-section" id="education" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <article className="cv-entry">
          <div className="cv-entry__heading"><h3>M.S. in Computer Science and Engineering</h3><span>2022–2024</span></div>
          <p>Ewha Womans University · Seoul, Korea</p>
          <p>Thesis: Understanding the use of AI-Based Audio Generation Models for Video Editing</p>
          <p>Advisor: Uran Oh</p>
        </article>
        <article className="cv-entry">
          <div className="cv-entry__heading"><h3>B.S. in Computer Science and Engineering</h3><span>2016–2022</span></div>
          <p>Ewha Womans University · Seoul, Korea</p>
          <p>Capstone Project: Music Assembler, a touch-sensor musical instrument</p>
        </article>
      </section>
      <section className="section cv-section" id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Research Experience</h2>
        <div className="cv-entry__heading"><h3>Human Computer Interaction Lab, Ewha Womans University</h3><span>2022–2024; 2025–Present</span></div>
        <p>Researcher · Advisor: Uran Oh</p>
      </section>
    </>
  );
}

export default function Experience() {
  return (
    <>
      <section className="section cv-section" aria-labelledby="skills-title">
        <h2 id="skills-title">Research Methods &amp; Technical Skills</h2>
        <dl className="cv-skills">
          <dt>Programming</dt><dd>Python, Swift, Java, JavaScript, C, SQL</dd>
          <dt>Methods</dt><dd>Interviews, formative studies, usability testing, think-aloud, surveys</dd>
          <dt>Analysis</dt><dd>Qualitative coding, affinity mapping, interaction-log and task-performance analysis</dd>
          <dt>Prototyping</dt><dd>iOS/SwiftUI, Android, multimodal AI, LLM/RAG, Figma, Unity</dd>
        </dl>
      </section>
      <section className="section cv-section" aria-labelledby="awards-title">
        <h2 id="awards-title">Awards &amp; Scholarships</h2>
        {awards.map(([name, date]) => <div className="cv-entry cv-entry__heading" key={name}><p>{name}</p><span>{date}</span></div>)}
      </section>
      <section className="section cv-section" aria-labelledby="teaching-title">
        <h2 id="teaching-title">Teaching Experience</h2>
        <p>Graduate teaching: supported labs, tutorials, projects, exam preparation, and grading. Linux Workshop: assisted lab practice and grading.</p>
        {teaching.map(([name, date, description]) => <article className="teaching-entry" key={name}><h3>{name}</h3><p>{description}</p><span>{date}</span></article>)}
      </section>
      <section className="section cv-section" aria-labelledby="service-title">
        <h2 id="service-title">Academic Service &amp; Selected Activities</h2>
        <div className="cv-entry cv-entry__heading"><h3>Reviewer, ACM CHI 2027, Papers track</h3><span>2026</span></div>
        <div className="cv-entry cv-entry__heading"><h3>Student Volunteer, SIGGRAPH Asia 2025</h3><span>2025</span></div>
        <div className="cv-entry"><div className="cv-entry__heading"><h3>Member, Game Development Club KING</h3><span>2017–2022</span></div><p>Collaborated on a student tycoon game released on Steam.</p></div>
      </section>
    </>
  );
}
