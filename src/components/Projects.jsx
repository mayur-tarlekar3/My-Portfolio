import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { title: "Amazon Clone",        description: "A fully responsive UI clone of the Amazon e-commerce website, built to demonstrate layout and styling skills.", tags: ["HTML5","CSS3"],        github: "https://github.com/mayur-tarlekar3/Amezon-clone", live: "https://mayur-tarlekar3.github.io/Amezon-clone/", image: "/amazon.png" },
  { title: "Currency Converter",  description: "A real-time currency conversion tool fetching live exchange rates from an API for accurate calculations.",                 tags: ["JavaScript","API","CSS3"],             github: "https://github.com/mayur-tarlekar3/Currency-Converter", live: "https://mayur-tarlekar3.github.io/Currency-Converter/", image: "/currency.png" },
  { title: "Rock Paper Scissors", description: "An interactive browser-based Rock Paper Scissors game featuring score tracking and win/loss logic.",                      tags: ["JavaScript","HTML5","CSS3"],                github: "https://github.com/mayur-tarlekar3/Rock-Paper-Scissor-game", live: "https://mayur-tarlekar3.github.io/Rock-Paper-Scissor-game/", image: "/rps.png" },
];

const tagColors = { "JavaScript":"#f59e0b","HTML5":"#f97316","CSS3":"#3b82f6","React":"#61dafb","Tailwind CSS":"#38bdf8","Java":"#ef4444","SQL":"#8b5cf6","JDBC":"#dc2626","Python":"#facc15","Automation":"#a78bfa","CSS":"#3b82f6","API":"#34d399" };

export default function Projects({ dark }) {
  const t1 = dark ? "text-white" : "text-gray-900";
  const t2 = dark ? "text-gray-400" : "text-gray-500";
  const bg = dark ? "bg-gray-900" : "bg-white";
  const card = dark ? "bg-gray-800 border-gray-700 hover:border-violet-500/50" : "bg-gray-50 border-gray-200 hover:border-violet-300";

  return (
    <section id="projects" className={`${bg} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-500 text-sm font-bold uppercase tracking-widest mb-2">Projects</p>
          <h2 className={`text-4xl font-black ${t1}`}>What I've Built</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title} className={`flex flex-col rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/10 ${card}`}>

              {/* Image */}
              <div className="h-44 rounded-t-2xl overflow-hidden bg-gradient-to-br from-violet-900/30 to-indigo-900/30 flex items-center justify-center border-b border-white/5">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
                />
                <span className="text-5xl opacity-20 hidden">💻</span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className={`text-base font-bold mb-2 ${t1}`}>{p.title}</h3>
                <p className={`text-sm leading-relaxed flex-1 mb-4 ${t2}`}>{p.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
                      style={{ background: `${tagColors[tag] || "#8b5cf6"}15`, color: tagColors[tag] || "#a78bfa", border: `1px solid ${tagColors[tag] || "#8b5cf6"}30` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border transition-colors flex-1 justify-center ${
                      dark ? "border-gray-600 text-gray-400 hover:border-violet-500 hover:text-violet-400" : "border-gray-200 text-gray-500 hover:border-violet-400 hover:text-violet-600"
                    }`}>
                    <FaGithub size={13} /> View Code
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white transition-colors flex-1 justify-center">
                    <FaExternalLinkAlt size={11} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}