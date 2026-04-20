import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const links = ["Home", "About", "Resume", "Certifications", "Projects", "Contact"];

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? dark ? "bg-gray-950/95 backdrop-blur shadow-xl shadow-black/30 border-b border-white/5"
                : "bg-white/95 backdrop-blur shadow-md border-b border-gray-100"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className={`text-xl font-black ${dark ? "text-white" : "text-gray-900"}`}>
          Mayur<span className="text-violet-500">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${dark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
              {l}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button onClick={toggle} className={`p-2 rounded-lg text-sm transition-all ${dark ? "text-gray-400 hover:text-white hover:bg-white/5" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`}>
            {dark ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>
          <a href="#contact" className="hidden md:block bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Hire Me
          </a>
          <button onClick={() => setOpen(!open)} className={`md:hidden p-2 rounded-lg ${dark ? "text-gray-400" : "text-gray-600"}`}>
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden border-t ${dark ? "bg-gray-950 border-white/5" : "bg-white border-gray-100"}`}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium border-b transition-colors ${dark ? "border-white/5 text-gray-300 hover:text-white" : "border-gray-50 text-gray-600 hover:text-gray-900"}`}>
              {l}
            </a>
          ))}
          <div className="px-6 py-4">
            <a href="#contact" onClick={() => setOpen(false)}
              className="block text-center bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}