import { useState } from "react";
import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import About          from "./components/About";
import Skills         from "./components/Skills";
import Resume         from "./components/Resume";
import Certifications from "./components/Certifications";
import Projects       from "./components/Projects";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div style={{ background: dark ? "#030712" : "#f9fafb" }}>
      <Navbar         dark={dark} toggle={() => setDark(d => !d)} />
      <Hero           dark={dark} />
      <About          dark={dark} />
      <Skills         dark={dark} />
      <Resume         dark={dark} />
      <Certifications dark={dark} />
      <Projects       dark={dark} />
      <Contact        dark={dark} />
      <Footer         dark={dark} />
    </div>
  );
}