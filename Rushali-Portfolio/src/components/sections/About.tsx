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
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white">
      
      <motion.div style={{ opacity }} className="container relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B253D]">
            About Me
          </h2>
          <div className="h-[2px] w-20 bg-[#009ca6] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image Block */}
          <motion.div style={{ y }} className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-[#009ca6]/10 border border-white/50">
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center bg-white/60 backdrop-blur-xl p-10 rounded-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* Subtle glow behind text */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#009ca6] opacity-10 blur-3xl rounded-full" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B253D] mb-6 leading-tight relative z-10">
              Crafting Digital Architecture with Precision
            </h3>
            <p className="text-[#475569] text-lg leading-relaxed mb-6 relative z-10 font-medium">
              I am a results-driven Frontend Engineer specializing in architecting high-performance, visually stunning web applications. With deep expertise in <span className="text-[#009ca6] font-bold">React.js, Next.js, and modern JavaScript ecosystems</span>, I transform complex requirements into elegant, scalable digital solutions.
            </p>
            <p className="text-[#475569] text-lg leading-relaxed mb-8 relative z-10 font-medium">
              Beyond writing clean and efficient code, I am obsessed with delivering frictionless user experiences, optimizing web performance, and integrating cutting-edge frontend technologies to drive business growth and user engagement.
            </p>
            <div className="flex gap-8 relative z-10">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#009ca6] mb-1 drop-shadow-sm">2+</span>
                <span className="text-sm font-bold text-[#0B253D] uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#009ca6] mb-1 drop-shadow-sm">10+</span>
                <span className="text-sm font-bold text-[#0B253D] uppercase tracking-wider">Projects Delivered</span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
