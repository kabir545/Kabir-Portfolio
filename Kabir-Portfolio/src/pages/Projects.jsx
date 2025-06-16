import ProjectCard from "../Components/ProjectCard";
import AnimatedSection from "../Components/AnimatedSection";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      desc: "Full-stack app with product catalog, filters, cart, and checkout features.",
      github: "https://github.com/kabir545/ecommerce-app",
      live: "https://ecommerce-kabir.netlify.app",
      tech: ["React.js, Node.js, MySQL, Tailwind"],
    },
    {
      title: "NASA Weather Dashboard",
      desc: "Real-time tracker for wildfires and hurricanes using NASA APIs.",
      github: "https://github.com/kabir545/nasa-weather-dashboard",
      live: "https://nasa-kabir.web.app",
      tech: ["React.js, Spring Boot, CSS Grid"],
    },
    {
      title: "Social Media Analytics",
      desc: "Dashboard showing engagement & growth metrics from social platforms.",
      github: "https://github.com/kabir545/social-dashboard",
      live: "https://kabirdash.vercel.app",
      tech: ["React.js, Chart.js, REST APIs"],
    },
  ];

  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
>
    <AnimatedSection>
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </div>
    </AnimatedSection>
    </motion.div>
  );
}
