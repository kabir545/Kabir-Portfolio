import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="bg-gray-50 min-h-screen text-gray-800">
        <AnimatePresence mode="wait">
        {/* Add Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
