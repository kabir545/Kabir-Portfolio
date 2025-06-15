import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, github, live, tech }) {
  return (
     <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
   >
     {/* <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"> */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{desc}</p>
      <p className="text-sm text-gray-500 mb-4">Tech Used: {Array.isArray(tech) ? tech.join(", ") : tech}</p>
      <div className="flex gap-4">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">GitHub</a>
        <a href={live} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold" >Live Demo</a>
      </div>
    {/* </div> */}
    </motion.div>
  );
}
