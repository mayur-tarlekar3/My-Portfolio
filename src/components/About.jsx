export default function About({ dark }) {
  const t1 = dark ? "text-white" : "text-gray-900";
  const t2 = dark ? "text-gray-400" : "text-gray-500";
  const bg = dark ? "bg-gray-900" : "bg-white";
  const card = dark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200";

  return (
    <section id="about" className={`${bg} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-500 text-sm font-bold uppercase tracking-widest mb-2">About Me</p>
          <h2 className={`text-4xl font-black ${t1}`}>Who I Am</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left: Photo */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-3xl overflow-hidden border-2 border-violet-500/30 shadow-2xl shadow-violet-600/10">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Mayur Tarleakar"
                  className="w-full object-cover"
                  onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
                />
                {/* Fallback */}
                <div className="hidden w-full h-72 bg-gradient-to-br from-violet-600 to-indigo-700 items-center justify-center text-8xl font-black text-white">
                  MT
                </div>
              </div>
              {/* Info card overlay */}
              <div className={`absolute -bottom-5 left-6 right-6 rounded-2xl p-4 border shadow-xl ${card}`}>
                <p className={`text-sm font-bold ${t1}`}>Mayur Tarleakar</p>
                <p className="text-violet-500 text-xs font-semibold mt-0.5">Full Stack Developer (Aspiring)</p>
                <div className="flex gap-3 mt-3">
                  {["English","Hindi","Marathi"].map(l => (
                    <span key={l} className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">{l}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:pt-4">
            <h3 className={`text-2xl font-black mb-4 ${t1}`}>Motivated Fresher, Ready to Build.</h3>

            <p className={`leading-relaxed mb-4 ${t2}`}>
              I'm a Master of Computer Applications (MCA) graduate from Kolhapur, Maharashtra
              with a strong foundation in software development. I enjoy building full-stack web
              applications and solving real-world problems with code.
            </p>
            <p className={`leading-relaxed mb-8 ${t2}`}>
              Eager to contribute to a professional team, I bring skills in React, Java, SQL,
              and cloud fundamentals (AWS). I'm a fast learner who takes every project
              as an opportunity to grow.
            </p>

            {/* Quick info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                ["📧", "Email",    "mayurtarlekar35@gmail.com"],
                ["📞", "Phone",    "+91 9322783370"],
                ["📍", "Location", "Kolhapur, Maharashtra"],
                ["🎓", "Degree",   "MCA — 2025 Fresher"],
              ].map(([icon, label, value]) => (
                <div key={label} className={`flex items-start gap-3 p-3 rounded-xl border ${card}`}>
                  <span className="text-lg leading-none mt-0.5">{icon}</span>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${t2}`}>{label}</p>
                    <p className={`text-xs font-medium ${t1}`}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors">
              Let's Connect →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}