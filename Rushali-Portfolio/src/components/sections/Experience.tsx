"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "NetInc Digital Services LLP",
    role: "Software Developer (MERN Stack)",
    duration: "2025 – Present",
    location: "Ahmedabad",
    description: [
      "Architected and maintained robust, production-grade web applications utilizing the MERN stack.",
      "Engineered dynamic UI components with React.js, Vue.js, and Next.js, alongside backend APIs in Node.js and Laravel.",
      "Integrated complex databases (MongoDB, PostgreSQL) and orchestrated seamless frontend-backend communication.",
      "Spearheaded simultaneous project deliveries, leveraging AI dev tools to accelerate turnaround times.",
    ],
  },
  {
    company: "Sharva InfoTech",
    role: "Full Stack Developer",
    duration: "2022 – 2023",
    location: "Rajkot",
    description: [
      "Developed advanced UI components using React.js and modern styling frameworks like Tailwind and Bootstrap.",
      "Engineered full-stack features involving complex CRUD operations, API integrations, and database modeling.",
      "Collaborated in cross-functional teams, leveraging version control (Git/GitHub) for streamlined workflows.",
      "Contributed to end-to-end feature development, maintaining clean code practices.",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 px-6 relative bg-white overflow-hidden">
      <div className="container relative z-10 max-w-5xl mx-auto">
        
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
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
                className="bg-[#F4F7FB] rounded-3xl p-6 md:p-10 border border-[#e2e8f0] shadow-sm"
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
