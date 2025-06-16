import AnimatedSection from "../Components/AnimatedSection";

export default function Home() {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
>
    <AnimatedSection>
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold">Hey, I'm Kabir Bhardwaj 👋</h1>
      <p className="mt-4 text-xl text-center max-w-xl">
        Frontend Developer with 2+ years experience in React, Node.js & Spring Boot.
        Passionate about clean UI, performance & real-world web apps.
      </p>
      <a
        href="/Kabir_Bhardwaj_Resume_2025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl"
        download
      >
        Download Resume
      </a>
    </div>
    </AnimatedSection>
    </motion.div>
  );
}
