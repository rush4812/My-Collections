"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="py-8 md:py-12 relative overflow-hidden border-t border-white/40 bg-white/20">
      
      <motion.div style={{ opacity }} className="container relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B253D]">
            About Me
          </h2>
          <div className="h-[2px] w-20 bg-[#009ca6] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Image Block */}
          <motion.div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-[#009ca6]/10 border border-white/50">
            <Image 
              src="/assets/about_abstract_3d_1782208810311.png" 
              alt="3D Abstract Tech Illustration" 
              fill
              className="object-cover"
            />
            {/* Glass Overlay Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay" />
          </motion.div>

          {/* Right Content Block (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center bg-white/60 backdrop-blur-md md:backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* Subtle glow behind text */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#009ca6] opacity-10 blur-3xl rounded-full" />
            
            <h3 className="text-xl md:text-2xl font-bold text-[#0B253D] mb-6 leading-tight relative z-10">
              Building High-Quality Web Applications
            </h3>
            <p className="text-[#475569] text-base leading-relaxed mb-6 relative z-10 font-medium">
              Software Developer with 2+ years of experience building production web applications across the <span className="text-[#009ca6] font-bold">MERN stack, Next.js, and Vue.js.</span> I also work with PHP ecosystems (Laravel, CodeIgniter) and use modern AI tools to ship clean, scalable code faster.
            </p>
            <p className="text-[#475569] text-base leading-relaxed mb-8 relative z-10 font-medium">
              Along with writing clean code, I use AI tools like Cursor and GitHub Copilot to work faster. I focus on creating great user experiences with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 relative z-10">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#009ca6] mb-1 drop-shadow-sm">2+</span>
                <span className="text-sm font-bold text-[#0B253D] uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#009ca6] mb-1 drop-shadow-sm">10+</span>
                <span className="text-sm font-bold text-[#0B253D] uppercase tracking-wider">Projects Delivered</span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
