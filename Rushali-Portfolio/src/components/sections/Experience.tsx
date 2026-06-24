"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "NetInc Digital Services LLP",
    role: "Associate Software Developer",
    duration: "2025 – Present",
    location: "Ahmedabad, Gujarat",
    description: [
      "Develop and maintain scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Build responsive and interactive user interfaces with React.js, Next.js, Vue.js, Tailwind CSS, and Bootstrap.",
      "Design and integrate RESTful APIs using Node.js and Laravel, ensuring seamless frontend-backend communication.",
      "Manage MongoDB and PostgreSQL databases, optimizing performance and data integrity.",
      "Collaborate across multiple projects, delivering high-quality solutions within tight deadlines.",
      "Utilize AI-assisted development tools to improve productivity, code quality, and delivery speed."
    ],
  },
  {
    company: "Sharva InfoTech",
    role: "MERN Stack Developer",
    duration: "2022 – 2023",
    location: "Rajkot, Gujarat",
    description: [
      "Developed modern web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Created reusable UI components and responsive layouts using Tailwind CSS and Bootstrap.",
      "Implemented CRUD operations, third-party API integrations, and database-driven features.",
      "Worked closely with designers and developers to deliver user-centric solutions.",
      "Managed source code using Git and GitHub, following industry-standard development practices.",
      "Maintained clean, efficient, and scalable code throughout the development lifecycle."
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <section id="experience" className="py-8 md:py-12 px-6 relative overflow-hidden border-t border-white/40 bg-white/20">
      <div className="container relative z-10 max-w-5xl mx-auto">
        
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#0B253D]"
          >
            Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-[#009ca6] rounded-full mb-6" 
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start w-full">
          
          {/* Left Column: Tabs */}
          <div className="w-full md:w-1/3 flex md:flex-col overflow-x-auto md:overflow-visible pb-4 md:pb-0 space-x-3 md:space-x-0 md:space-y-2 border-b-0 md:border-l-2 border-slate-200 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] px-1">
            {experiences.map((exp, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`
                    relative px-5 py-2 md:px-6 md:py-4 text-left whitespace-nowrap md:whitespace-normal font-medium transition-all duration-300 w-fit md:w-full rounded-full md:rounded-none
                    ${isActive ? "text-[#009ca6] bg-[#009ca6]/10 md:bg-[#009ca6]/5 border border-[#009ca6] md:border-none md:border-transparent" : "text-slate-500 hover:text-[#0B253D] hover:bg-slate-50 border border-slate-200 md:border-none md:border-transparent"}
                  `}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="hidden md:block absolute bottom-0 left-0 h-[2px] w-full md:h-full md:w-[2px] md:-left-[2px] bg-[#009ca6] shadow-[0_0_10px_rgba(0,156,166,0.5)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 block text-[15px] md:text-lg font-semibold">{exp.company}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-2/3 min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/60 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B253D]">{experiences[activeTab].role}</h3>
                    <h4 className="text-lg font-semibold text-[#009ca6] mt-1">@ {experiences[activeTab].company}</h4>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-[#009ca6] text-xs font-bold tracking-widest uppercase shadow-sm whitespace-nowrap h-fit">
                    {experiences[activeTab].duration}
                  </span>
                </div>
                
                <p className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-wider">
                  {experiences[activeTab].location}
                </p>
                
                <ul className="space-y-4">
                  {experiences[activeTab].description.map((item, i) => (
                    <li key={i} className="text-[#475569] text-[15px] flex items-start gap-4 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#009ca6] shrink-0 shadow-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
