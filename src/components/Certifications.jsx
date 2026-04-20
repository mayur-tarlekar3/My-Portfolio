import { useState } from "react";
import { FaTimes, FaSearchPlus } from "react-icons/fa";

const certs = [
  { 
    title: "SQL and Relational Databases 101", 
    issuer: "IBM / Etrain Education", 
    date: "Dec 2025", 
    image: "/cert-ibm.jpg"
  },
  { 
    title: "AWS Academy Graduate - Cloud Foundations", 
    issuer: "AWS Academy", 
    date: "Nov 2025", 
    image: "/cert-aws.jpg"
  },
  { 
    title: "Learn JAVA Programming - Beginner to Master", 
    issuer: "Udemy", 
    date: "Mar 2026", 
    image: "/cert-java.png"
  },
  { 
    title: "GitGenius: Introduction to Git and GitHub", 
    issuer: "D.Y. Patil Agriculture and Technical University", 
    date: "2026", 
    image: "/cert-git.jpg"
  },
];

export default function Certifications({ dark }) {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const t1 = dark ? "text-white" : "text-gray-900";
  const t2 = dark ? "text-gray-400" : "text-gray-500";
  const bg = dark ? "bg-gray-900" : "bg-white";
  const card = dark ? "bg-gray-800 border-gray-700 hover:border-violet-500/50" : "bg-gray-50 border-gray-200 hover:border-violet-300";

  return (
    <section id="certifications" className={`${bg} py-24 px-6 relative`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-500 text-sm font-bold uppercase tracking-widest mb-2">Achievements</p>
          <h2 className={`text-4xl font-black ${t1}`}>Certifications</h2>
          <p className={`mt-2 text-sm ${t2}`}>Click on any certificate to view it full screen.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map(c => (
            <div 
              key={c.title} 
              onClick={() => setSelectedImage(c.image)}
              className={`p-5 rounded-3xl border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/10 flex flex-col h-full cursor-pointer group ${card}`}>
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-white flex items-center justify-center border border-gray-200">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-white text-gray-900 p-3 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <FaSearchPlus size={24} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1 px-2">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className={`text-lg font-bold leading-tight ${t1}`}>{c.title}</h3>
                  <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${dark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"}`}>
                    {c.date}
                  </span>
                </div>
                <p className={`text-sm mb-2 flex-1 ${t2}`}>{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <FaTimes size={24} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Certificate Fullscreen" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          />
        </div>
      )}
    </section>
  );
}
