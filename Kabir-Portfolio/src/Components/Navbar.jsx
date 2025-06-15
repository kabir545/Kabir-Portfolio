import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

   const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Kabir.dev</h1>
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li><Link to="/" className={linkClass("/")}>Home</Link></li>
          <li><Link to="/about"  className={linkClass("/about")}>About</Link></li>
          <li><Link to="/projects"  className={linkClass("/projects")}>Projects</Link></li>
          <li><Link to="/contact" className={linkClass("/contact")}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
