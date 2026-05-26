"use client";

import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), { ssr: false });
import { Download, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 2.5 }, // Wait for PageLoader
    },
  };

  const childVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container text-center flex flex-col items-center"
      >
        <motion.div variants={childVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full glass border-white/10 text-zinc-300 text-sm font-medium">
          Available for New Opportunities
        </motion.div>

        <motion.h1 variants={childVariants} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white">
          Hi, I&apos;m <br className="md:hidden" />
          <span className="text-gradient inline-block">Rushali Jivrajani</span> <span className="animate-pulse inline-block opacity-80">👋</span>
        </motion.h1>

        <motion.p variants={childVariants} className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-4 md:px-0">
          I&apos;m a <span className="text-white font-semibold">React.js Specialist</span> and <span className="text-white font-semibold">Full Stack Developer</span> crafting scalable, high-performance web applications with modern technologies.
        </motion.p>

        <motion.div variants={childVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href="#projects" className="group relative px-8 py-3 bg-white text-black rounded-full font-medium overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="/resume.pdf" target="_blank" className="group px-8 py-3 glass rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border border-white/20">
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div variants={childVariants} className="flex items-center gap-6">
          <a href="https://github.com/rush4812" target="_blank" className="p-3 glass rounded-full hover:bg-white hover:text-black transition-all hover:-translate-y-1 border border-white/10">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" className="p-3 glass rounded-full hover:bg-white hover:text-black transition-all hover:-translate-y-1 border border-white/10">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:rushjivrajani48@gmail.com" className="p-3 glass rounded-full hover:bg-white hover:text-black transition-all hover:-translate-y-1 border border-white/10">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
