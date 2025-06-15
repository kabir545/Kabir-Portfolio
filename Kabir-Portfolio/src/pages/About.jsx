import AnimatedSection from "../Components/AnimatedSection";

export default function About() {
  return (
    <AnimatedSection>
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="mb-6 text-lg text-gray-700">
        I'm a frontend developer with 2+ years of experience building responsive and performance-optimized web apps.
        I've worked with companies like Great Learning, Quick Heal, and IACET.
        My strengths include React.js, Node.js, Spring Boot, and UI frameworks like TailwindCSS and Bootstrap. I'm passionate about clean code, accessibility, and real-world problem solving.
      </p>
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc pl-5 text-gray-700">
        <li>React.js</li>
        <li>Node.js</li>
        <li>Spring Boot</li>
        <li>HTML5 / CSS3 / JavaScript</li>
        <li>Tailwind CSS / Bootstrap</li>
        <li>MySQL / REST APIs</li>
        <li>Git / GitHub / VS Code</li>
        <li>JIRA / Postman / OpenAPI</li>
      </ul>
    </div>
    </AnimatedSection>  
  );
}
