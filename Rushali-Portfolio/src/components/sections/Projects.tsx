"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  { name: "Amanta", description: "Architected and launched a fully responsive platform with advanced UI.", type: "Production Platform", link: "https://amanta.co.in/", glow: "cyan" },
  { name: "Calico Museum", description: "Engineered an interactive museum web application utilizing state-of-the-art frameworks.", type: "Web App", link: "https://www.calicomuseum.org/", glow: "teal" },
  { name: "CUPDF", description: "Spearheaded complex UI implementation and architectural enhancements using Vue.js.", type: "Platform", link: "https://cupdf.org/", glow: "cyan" },
  { name: "MDI Gurgaon", description: "Executed systematic maintenance, dynamic layout fixes, and full-stack performance optimization.", type: "Educational Portal", link: "https://www.mdi.ac.in/", glow: "teal" },
  { name: "Madhubhan Resort", description: "Orchestrated end-to-end platform deployment with immersive visual interfaces.", type: "Hospitality", link: "https://www.madhubhanresortandspa.com/", glow: "cyan" },
  { name: "Elecon", description: "Delivered comprehensive maintenance and robust responsive solutions for an enterprise client.", type: "Corporate", link: "https://www.elecon.com/", glow: "teal" },
];

function ProjectCard({ project }: { project: { name: string; description: string; type: string; link: string; glow: string } }) { 
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-[500px] bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow flex flex-col group overflow-hidden"
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative h-[220px] mb-8 rounded-2xl overflow-hidden shadow-inner group-hover:shadow-[0_0_20px_rgba(0,156,166,0.2)] transition-shadow duration-500">
        <Image 
          src="/assets/projects_abstract_3d_1782208842289.png" 
          alt="3D Project Thumbnail" 
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-[#0B253D]/20 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/20 backdrop-blur-sm">
          <span className="text-3xl font-black uppercase tracking-widest text-center px-4 leading-tight text-white drop-shadow-md">
            {project.name}
          </span>
        </div>
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
        <div className="text-xs font-bold text-[#009ca6] mb-3 tracking-widest uppercase">{project.type}</div>
        <h3 className="text-2xl font-bold text-[#0B253D] mb-4 uppercase tracking-wider">{project.name}</h3>
        <p className="text-[#475569] text-sm leading-relaxed mb-8 font-medium">{project.description}</p>
        
        <div className="flex gap-4">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 font-bold text-sm text-[#009ca6] hover:text-[#0B253D] transition-colors group/link"
          >
            Learn More <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-8 md:py-12 px-6 relative overflow-hidden border-t border-[#0B253D]/5 bg-[#f4f7fb]/20">


      <div className="container relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8 md:mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B253D]">
            Projects
          </h2>
          <div className="h-[2px] w-20 bg-[#009ca6] rounded-full mb-6" />
          <p className="text-[#475569] max-w-2xl text-center text-lg font-medium">
            Some of the recent projects and websites I have built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
