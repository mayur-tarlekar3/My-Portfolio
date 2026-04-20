import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaDownload } from "react-icons/fa";

const roles = ["Full Stack Developer", "React Developer", "Java Developer", "UI/UX Enthusiast"];

export default function Hero({ dark }) {
  const [text, setText] = useState("");
  const [ri, setRi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const role = roles[ri];
    setText(role.slice(0, ci));
    if (!del && ci === role.length) {
      const t = setTimeout(() => setDel(true), 2000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      if (!del) setCi(c => c + 1);
      else if (ci > 0) setCi(c => c - 1);
      else { setDel(false); setRi(r => (r + 1) % roles.length); }
    }, del ? 45 : 90);
    return () => clearTimeout(t);
  }, [ci, del, ri]);

  const socials = [
    { icon: <FaGithub size={18} />,   href: "https://github.com/mayur-tarlekar3", label: "GitHub" },
    { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/mayur-tarlekar-121446354?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
    { icon: <FaInstagram size={18} />,href: "https://www.instagram.com/its_me_mayur35?igsh=YncxbXI4czM3bzc4", label: "Instagram" },
    { icon: <FaWhatsapp size={18} />, href: "https://wa.me/919322783370",         label: "WhatsApp" },
    { icon: <FaEnvelope size={18} />, href: "mailto:mayurtarlekar35@gmail.com",   label: "Email" },
  ];

  return (
    <section id="home" className={`min-h-screen flex items-center pt-16 ${dark ? "bg-gray-950" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to Opportunities
            </div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
              Hi, I'm Mayur
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-violet-500">
              Tarleakar.
            </h2>

            {/* Typing */}
            <p className={`text-lg font-medium mb-4 ${dark ? "text-gray-400" : "text-gray-600"}`}>
              I'm a{" "}
              <span className="text-violet-500 font-bold">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </p>

            <p className={`text-base leading-relaxed mb-8 max-w-md ${dark ? "text-gray-400" : "text-gray-500"}`}>
              MCA fresher from Kolhapur passionate about building clean, user-friendly websites and learning new technologies every day.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#projects"
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg shadow-violet-600/20">
                View My Work →
              </a>
              <a href="/resume.pdf" download
                className={`border font-semibold text-sm px-6 py-3 rounded-xl transition-colors flex items-center gap-2 ${
                  dark ? "border-gray-700 text-gray-300 hover:border-violet-500 hover:text-violet-400" : "border-gray-300 text-gray-600 hover:border-violet-400 hover:text-violet-600"
                }`}>
                <FaDownload size={13} /> Download CV
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                    dark ? "border-gray-700 text-gray-500 hover:border-violet-500 hover:text-violet-400" : "border-gray-200 text-gray-400 hover:border-violet-400 hover:text-violet-600"
                  }`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full blur-3xl bg-violet-600/20 scale-110" />
              {/* Photo */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-violet-500/40 shadow-2xl shadow-violet-600/20">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Mayur Tarleakar"
                  className="w-full h-full object-cover"
                  onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
                />
                {/* Fallback */}
                <div className="hidden w-full h-full bg-gradient-to-br from-violet-600 to-indigo-700 items-center justify-center text-6xl font-black text-white">
                  MT
                </div>
              </div>
              {/* Badge */}
              <div className={`absolute bottom-4 -right-4 px-4 py-2 rounded-2xl shadow-xl border text-sm font-bold ${
                dark ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-100 text-gray-900"
              }`}>
                MCA Fresher 🎓
              </div>
            </div>
          </div>

        </div>

        {/* Stats bar */}
        <div className={`mt-16 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-6 text-center ${dark ? "border-gray-800" : "border-gray-200"}`}>
          {[["3+","Projects"],["5","Certifications"],["9+","Technologies"],["100%","Dedication"]].map(([v,l]) => (
            <div key={l}>
              <p className={`text-3xl font-black ${dark ? "text-white" : "text-gray-900"}`}>{v}</p>
              <p className={`text-sm mt-1 ${dark ? "text-gray-500" : "text-gray-400"}`}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}