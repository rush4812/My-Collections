"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "NetInc Digital Services LLP",
    role: "Associate Software Developer",
    duration: "2025 – Present",
    location: "Ahmedabad",
    description: [
      "Developed and maintained multiple production-level web applications.",
      "Built dynamic and reusable UI components using React.js and Vue.js.",
      "Integrated frontend with backend systems using REST APIs.",
      "Managed multiple projects simultaneously and delivered within deadlines.",
    ],
  },
  {
    company: "Sharva InfoTech",
    role: "React.js Developer",
    duration: "2022 – 2023",
    location: "Rajkot",
    description: [
      "Developed reusable UI components using React.js.",
      "Worked on CRUD operations and API integration.",
      "Assisted in frontend feature development in real-world projects.",
      "Gained experience in team-based development and project workflows.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="experience" ref={containerRef} className="pt-16 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 relative bg-[#030014]">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400">My trajectory in software engineering.</p>
        </motion.div>

        <div className="relative pb-16 md:pb-32">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="relative md:sticky glass-card p-6 sm:p-10 md:p-14 mb-16 md:mb-32 last:mb-0 shadow-2xl transition-all border-white/10 hover:border-sky-400/30"
              style={{ top: `calc(15vh + ${idx * 40}px)`, zIndex: idx + 1 }}
            >
              <div className="row items-start">
                <div className="col md:w-1/3 mb-8 md:mb-0">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 text-sm font-medium mb-4">{exp.duration}</span>
                <h3 className="text-3xl font-bold text-white mb-2">{exp.company}</h3>
                <h4 className="text-xl text-purple-300">{exp.role}</h4>
              </div>
              
                <div className="col md:w-2/3">
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 text-base md:text-lg flex items-start gap-4">
                      <span className="mt-2 w-2 h-2 rounded-full bg-pink-400 shrink-0 neon-glow" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
