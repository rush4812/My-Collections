"use client";

import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import { Download, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const InteractiveTorus = dynamic(() => import("@/components/ui/InteractiveTorus"), { ssr: false });

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 1.5 },
    },
  };

  const childVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#e0f2fe]">

      <InteractiveTorus />
      
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          <motion.div variants={childVariants} className="inline-block mb-4 px-5 py-2 rounded-md bg-[#ffffff] text-[#009ca6] text-sm font-semibold tracking-wider shadow-sm border border-[#eaf5f5]">
            AVAILABLE FOR HIRE
          </motion.div>

          <motion.h1 variants={childVariants} className="text-5xl sm:text-7xl lg:text-7xl font-bold tracking-tight mb-6 text-[#0B253D] leading-tight">
            Hi, I am <br />
            <span className="text-[#009ca6]">Rushali</span> Jivrajani
          </motion.h1>

          <motion.p variants={childVariants} className="text-[#788998] text-lg sm:text-xl max-w-lg mb-10 leading-relaxed font-medium">
            Creative Frontend Engineer building immersive digital experiences and futuristic web applications.
          </motion.p>

          <motion.div variants={childVariants} className="flex flex-wrap items-center gap-5 mb-12">
            <a href="#projects" className="group px-8 py-4 bg-[#009ca6] text-white rounded-md font-bold hover:bg-[#008b94] transition-colors shadow-lg shadow-[#009ca6]/30 flex items-center gap-2">
              Explore Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/resume.pdf" target="_blank" className="group px-8 py-4 bg-transparent border border-[#0B253D] text-[#0B253D] rounded-md font-bold hover:bg-[#0B253D] hover:text-white transition-colors flex items-center gap-2">
              Download CV
              <Download className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div variants={childVariants} className="flex items-center gap-6">
            <a href="https://github.com/rush4812" target="_blank" className="text-[#0B253D] hover:text-[#009ca6] transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-[#0B253D] hover:text-[#009ca6] transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:rushjivrajani48@gmail.com" className="text-[#0B253D] hover:text-[#009ca6] transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
        
        <div className="hidden lg:flex items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-8 border-white shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Human Placeholder (Swap with your photo)" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#788998]"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#788998] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
