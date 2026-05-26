"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 & CSS3", level: 95 },
    ],
    color: "from-purple-500 to-purple-700",
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
    color: "from-blue-500 to-blue-700",
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Git & GitHub", level: 90 },
    ],
    color: "from-pink-500 to-pink-700",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-32 px-6 md:px-12 bg-[#02000a] relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies in building modern web applications.
          </p>
        </motion.div>

        <div className="row">
          {skills.map((skillGroup, groupIdx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.2 }}
              className="col md:w-1/3 mb-8"
            >
              <div className="glass-card p-8 group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none" />
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillGroup.color}`} />
                {skillGroup.category}
              </h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2 text-gray-300">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
