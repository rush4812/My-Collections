"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  { name: "Amanta", description: "Developed and launched the new website with responsive UI.", type: "Production Website" },
  { name: "Calico Museum", description: "Worked on frontend development for the new interactive museum website.", type: "Web App" },
  { name: "CUPDF", description: "Complex UI implementation and architectural improvements using Vue.js.", type: "Platform" },
  { name: "MDI Gurgaon", description: "Website maintenance, layout fixes, and performance optimization.", type: "Educational Portal" },
  { name: "Madhubhan Resort", description: "New website implementation and launch with immersive visuals.", type: "Hospitality" },
  { name: "Elecon", description: "Website maintenance and responsive layout fixes for enterprise client.", type: "Corporate" },
];

function ProjectCard({ project }: { project: { name: string; description: string; type: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
      className="glass-card p-6 h-full cursor-pointer group relative"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" style={{ transform: "translateZ(-10px)" }} />
      
      <div style={{ transform: "translateZ(30px)" }} className="relative h-[200px] mb-6 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
        {/* Placeholder for project image, using gradient text for now */}
        <span className="text-3xl font-black text-white/20 uppercase tracking-widest text-center px-4 leading-tight">{project.name}</span>
      </div>

      <div style={{ transform: "translateZ(40px)" }}>
        <div className="text-xs font-semibold text-purple-400 mb-2 tracking-wider uppercase">{project.type}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
        
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-sm text-white hover:text-purple-400 transition-colors">
            <ExternalLink className="w-4 h-4" /> Live Demo
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <FaGithub className="w-4 h-4" /> Code
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="pt-12 md:pt-16 pb-16 md:pb-32 px-6 md:px-12 relative overflow-hidden bg-[#030014]">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of live production websites and applications I have developed and maintained.
          </p>
        </motion.div>

        <div className="row">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="col md:w-1/2 lg:w-1/3 mb-8"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
