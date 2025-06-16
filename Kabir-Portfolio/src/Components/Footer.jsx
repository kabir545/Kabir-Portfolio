import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-6 text-sm text-gray-500 bg-gray-100 mt-12"
    >
      <p>
        © {new Date().getFullYear()} Kabir Bhardwaj. Built with 
        <span className="text-blue-600 font-medium"> React.js </span> + 
        <span className="text-teal-600 font-medium"> Tailwind CSS</span>
      </p>
      <p className="mt-2">
        Connect on 
        <a href="https://linkedin.com/in/kabir-bhardwaj-659a1a304/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-blue-500 hover:underline ml-1">
          LinkedIn
        </a> | 
        <a href="https://github.com/kabir545" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-gray-700 hover:underline ml-1">
          GitHub
        </a>
      </p>
    </motion.footer>
  );
}
