import { useEffect, useRef, useState } from "react";

const skills = {
  Frontend: [
    { name: "HTML / CSS",   pct: 95, color: "#f97316" },
    { name: "JavaScript",   pct: 85, color: "#f59e0b" },
    { name: "Tailwind CSS", pct: 80, color: "#38bdf8" },
    { name: "React",        pct: 80, color: "#61dafb" },
  ],
  Backend: [
    { name: "Java",   pct: 75, color: "#ef4444" },
    { name: "Python", pct: 60, color: "#facc15" },
    { name: "SQL",    pct: 75, color: "#a78bfa" },
  ],
  Other: [
    { name: "UI/UX Design",       pct: 85, color: "#ec4899" },
    { name: "AWS",                pct: 70, color: "#f97316" },
    { name: "Project Management", pct: 80, color: "#34d399" },
  ],
};

export default function Skills({ dark }) {
  const [go, setGo] = useState(false);
  const ref = useRef(null);
  const t1 = dark ? "text-white" : "text-gray-900";
  const t2 = dark ? "text-gray-400" : "text-gray-500";
  const bg = dark ? "bg-gray-950" : "bg-gray-50";
  const card = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className={`${bg} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-500 text-sm font-bold uppercase tracking-widest mb-2">Skills</p>
          <h2 className={`text-4xl font-black ${t1}`}>My Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className={`p-6 rounded-2xl border ${card}`}>
              <h3 className={`text-lg font-bold mb-6 pb-3 border-b ${dark ? "border-gray-700" : "border-gray-100"} ${t1}`}>
                {category}
              </h3>
              <div className="flex flex-col gap-5">
                {list.map(sk => (
                  <div key={sk.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className={`text-sm font-medium ${t1}`}>{sk.name}</span>
                      <span className="text-sm font-bold" style={{ color: sk.color }}>{sk.pct}%</span>
                    </div>
                    <div className={`h-2 rounded-full ${dark ? "bg-gray-700" : "bg-gray-200"}`}>
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: go ? `${sk.pct}%` : "0%",
                          background: `linear-gradient(90deg, ${sk.color}99, ${sk.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}