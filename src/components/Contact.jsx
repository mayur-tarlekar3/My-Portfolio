import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact({ dark }) {
  const t1 = dark ? "text-white" : "text-gray-900";
  const t2 = dark ? "text-gray-400" : "text-gray-500";
  const bg = dark ? "bg-gray-950" : "bg-gray-50";
  const card = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const inp = dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-600 focus:border-violet-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400";

  const socials = [
    { icon: <FaGithub size={18} />,    href: "https://github.com/mayur-tarlekar3",              label: "GitHub",    bg: "hover:bg-gray-700" },
    { icon: <FaLinkedin size={18} />,  href: "https://www.linkedin.com/in/mayur-tarlekar-121446354?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn",  bg: "hover:bg-blue-600" },
    { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/its_me_mayur35?igsh=YncxbXI4czM3bzc4", label: "Instagram", bg: "hover:bg-pink-600" },
    { icon: <FaWhatsapp size={18} />,  href: "https://wa.me/919322783370",      label: "WhatsApp",  bg: "hover:bg-green-600" },
    { icon: <FaEnvelope size={18} />,  href: "mailto:mayurtarlekar35@gmail.com",label: "Email",     bg: "hover:bg-violet-600" },
  ];

  return (
    <section id="contact" className={`${bg} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-500 text-sm font-bold uppercase tracking-widest mb-2">Contact</p>
          <h2 className={`text-4xl font-black ${t1}`}>Let's Work Together</h2>
          <p className={`mt-2 text-sm max-w-md mx-auto ${t2}`}>
            I'm actively looking for opportunities. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left: Contact info */}
          <div className="flex flex-col gap-5">

            {/* Availability */}
            <div className={`p-5 rounded-2xl border ${card}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className={`font-bold text-sm ${t1}`}>Available for Opportunities</span>
              </div>
              <p className={`text-sm ${t2}`}>Open to full-time roles, internships, and freelance projects. Based in Kolhapur — open to remote or relocation.</p>
            </div>

            {/* Info cards */}
            {[
              { icon: <FaEnvelope className="text-violet-400" />, label: "Email",    val: "mayurtarlekar35@gmail.com", href: "mailto:mayurtarlekar35@gmail.com" },
              { icon: <FaPhone className="text-violet-400" />,    label: "Phone",    val: "+91 9322783370",             href: "tel:+919322783370" },
              { icon: <FaMapMarkerAlt className="text-violet-400" />, label: "Location", val: "Kolhapur, Maharashtra",  href: "#" },
            ].map(item => (
              <a key={item.label} href={item.href} className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors hover:border-violet-500/50 ${card}`}>
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-sm flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${t2}`}>{item.label}</p>
                  <p className={`text-sm font-medium mt-0.5 ${t1}`}>{item.val}</p>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div className={`p-5 rounded-2xl border ${card}`}>
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${t2}`}>Find Me On</p>
              <div className="flex gap-3">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all text-gray-400 hover:text-white ${s.bg} ${dark ? "border-gray-700" : "border-gray-200"}`}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`p-6 rounded-2xl border ${card}`}>
            <h3 className={`text-xl font-bold mb-5 ${t1}`}>Send a Message</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${t2}`}>Name</label>
                  <input type="text" placeholder="Your name" className={`w-full px-3 py-2.5 rounded-xl border text-sm outline-none transition-colors ${inp}`} />
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${t2}`}>Email</label>
                  <input type="email" placeholder="you@email.com" className={`w-full px-3 py-2.5 rounded-xl border text-sm outline-none transition-colors ${inp}`} />
                </div>
              </div>
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${t2}`}>Subject</label>
                <input type="text" placeholder="Job Opportunity / Collaboration" className={`w-full px-3 py-2.5 rounded-xl border text-sm outline-none transition-colors ${inp}`} />
              </div>
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${t2}`}>Message</label>
                <textarea rows={5} placeholder="Hi Mayur, I'd like to connect..." className={`w-full px-3 py-2.5 rounded-xl border text-sm outline-none transition-colors resize-none ${inp}`} />
              </div>
              <a href="mailto:mayurtarlekar35@gmail.com"
                className="flex items-center justify-center gap-2 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-violet-600/20">
                <FaEnvelope size={14} /> Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}