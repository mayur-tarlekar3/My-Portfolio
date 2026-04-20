import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";

export default function Footer({ dark }) {
  const t1 = dark ? "text-white" : "text-gray-900";
  const t2 = dark ? "text-gray-500" : "text-gray-400";
  const bg = dark ? "bg-gray-900" : "bg-white";
  const border = dark ? "border-gray-800" : "border-gray-100";

  return (
    <footer className={`${bg} border-t ${border} py-10 px-6`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#home" className={`text-xl font-black ${t1}`}>
            Mayur<span className="text-violet-500">.</span>
          </a>
          <p className={`text-xs mt-1 ${t2}`}>MCA Fresher · Full Stack Developer</p>
        </div>

        <div className="flex gap-3">
          {[
            { icon: <FaGithub size={16} />,    href: "https://github.com/mayur-tarlekar3",                                 label: "GitHub" },
            { icon: <FaLinkedin size={16} />,  href: "https://www.linkedin.com/in/mayur-tarlekar-121446354?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
            { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/its_me_mayur35?igsh=YncxbXI4czM3bzc4",      label: "Instagram" },
            { icon: <FaWhatsapp size={16} />,  href: "https://wa.me/919322783370",        label: "WhatsApp" },
            { icon: <FaEnvelope size={16} />,  href: "mailto:mayurtarlekar35@gmail.com",  label: "Email" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${
                dark ? "border-gray-700 text-gray-500 hover:border-violet-500 hover:text-violet-400" : "border-gray-200 text-gray-400 hover:border-violet-400 hover:text-violet-600"
              }`}>
              {s.icon}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <p className={`text-xs ${t2}`}>
            © {new Date().getFullYear()} Mayur Tarleakar · Made with <FaHeart className="inline text-violet-500 mx-0.5" size={10} />
          </p>
          <a href="#home" className="w-9 h-9 rounded-lg bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center transition-colors">
            <FaArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}