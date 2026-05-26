"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Database, Layout } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <Layout className="w-8 h-8 text-purple-400" />,
      title: "Frontend Engineering",
      description: "Building immersive and responsive user interfaces with React.js, Vue.js, and modern CSS frameworks like Tailwind.",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Backend Integration",
      description: "Designing scalable REST APIs and handling database operations efficiently with Node.js, Express, and MongoDB.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-pink-400" />,
      title: "Performance Optimization",
      description: "Ensuring smooth user experiences through code splitting, lazy loading, and advanced animation techniques.",
    },
  ];

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-32 px-6 md:px-12 relative overflow-hidden bg-[#030014]">
      {/* Background Glows & Grid */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
      <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <motion.div style={{ opacity }} className="container relative z-10">
        <div className="row items-center">
          
          {/* Left Content */}
          <div className="col md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Software Developer with 2+ years of experience in building and maintaining production-level web applications. Strong expertise in React.js, Vue.js, Node.js, Express.js, and MongoDB. Passionate about creating smooth user experiences, scalable architectures, and modern responsive interfaces.
            </p>
            
            <div className="flex gap-4">
              <div className="glass px-6 py-4 rounded-2xl border-l-2 border-l-purple-500">
                <div className="text-3xl font-bold text-white mb-1">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="glass px-6 py-4 rounded-2xl border-l-2 border-l-blue-500">
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Right Content / Cards */}
          <motion.div style={{ y }} className="col md:w-1/2 grid gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="glass-card p-6 group hover:border-purple-500/50 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
