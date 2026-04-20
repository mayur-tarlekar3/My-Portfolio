import { FaDownload, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Resume({ dark }) {
  const t1 = dark ? "text-white" : "text-gray-900";
  const t2 = dark ? "text-gray-400" : "text-gray-500";
  const bg = dark ? "bg-gray-950" : "bg-gray-50";
  const card = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";

  return (
    <section id="resume" className={`${bg} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-500 text-sm font-bold uppercase tracking-widest mb-2">Resume</p>
          <h2 className={`text-4xl font-black ${t1}`}>Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center">
                <FaGraduationCap size={18} />
              </div>
              <h3 className={`text-2xl font-bold ${t1}`}>Education</h3>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className={`p-6 rounded-2xl border relative ${card}`}>
                <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-violet-500/20 border-4 border-violet-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-violet-500" />
                </div>
                
                <p className="text-violet-500 font-bold text-sm mb-1">2023 - 2025</p>
                <h4 className={`text-lg font-bold mb-1 ${t1}`}>Master of Computer Applications (MCA)</h4>
                <p className={`text-sm mb-3 ${t2}`}>D. Y. Patil Agriculture and Technical University · Talsande</p>
                <p className={`text-sm leading-relaxed ${t2}`}>
                  Focusing on advanced software engineering, full-stack development, and database management. Actively participating in technical projects and hackathons.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border relative ${card}`}>
                <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gray-500/20 border-4 border-gray-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                </div>
                
                <p className="text-gray-400 font-bold text-sm mb-1">2020 - 2023</p>
                <h4 className={`text-lg font-bold mb-1 ${t1}`}>Bachelor of Computer Applications (BCA)</h4>
                <p className={`text-sm mb-3 ${t2}`}>Kolhapur</p>
                <p className={`text-sm leading-relaxed ${t2}`}>
                  Built strong fundamentals in programming, data structures, and web technologies. Graduated with top marks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Banner */}
        <div className={`mt-12 p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 ${card}`}>
          <div>
            <h4 className={`text-xl font-bold mb-2 ${t1}`}>Download My Resume</h4>
            <p className={`text-sm max-w-md ${t2}`}>
              Get a detailed overview of my skills, education, and project experience in PDF format.
            </p>
          </div>
          <a href="/resume.pdf" download
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-violet-600/20 shrink-0">
            <FaDownload size={14} /> Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
