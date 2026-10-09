export default function ResearchOverview({ study }) {
  const sections = [
    ["Research Question", study.question],
    ["My Contribution", study.contribution],
    ["Research Process", study.process || study.methods],
    ["What We Found", study.findings],
    ["From Finding to Prototype", study.designResponse],
    ["Design Implications", study.implications],
  ];

  return (
    <div className="research-overview">
      {sections.filter(([, content]) => content).map(([title, content]) => (
        <section key={title}><h2>{title}</h2><p>{content}</p></section>
      ))}
    </div>
  );
}
