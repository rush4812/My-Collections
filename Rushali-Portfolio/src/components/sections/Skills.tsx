"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js & Next.js", level: 95 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind & Bootstrap", level: 95 },
      { name: "HTML5 & CSS3", level: 95 },
    ],
    color: "from-[#009ca6] to-[#009ca6]",
  },
  {
    category: "Backend & DB",
    items: [
      { name: "Node.js & Express", level: 90 },
      { name: "PHP, Laravel, CI", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "MySQL & PostgreSQL", level: 85 },
    ],
    color: "from-[#0B253D] to-[#0B253D]",
  },
  {
    category: "AI & Dev Tools",
    items: [
      { name: "Git & GitHub", level: 95 },
      { name: "Cursor & Antigravity", level: 90 },
      { name: "Claude & Codex", level: 85 },
    ],
    color: "from-[#009ca6] to-[#0B253D]",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-8 md:py-12 px-6 relative overflow-hidden border-t border-[#0B253D]/5 bg-[#f4f7fb]/20">

      <div className="container relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8 md:mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B253D]">
            My Skills
          </h2>
          <div className="h-[2px] w-20 bg-[#009ca6] rounded-full mb-6" />
          <p className="text-[#475569] max-w-2xl text-lg font-medium">
            The tools and technologies I use to build web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIdx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.2 }}
            >
              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group relative h-full hover:-translate-y-2 overflow-hidden">
                {/* Glass subtle highlight */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
                
                <h3 className="text-xl font-bold text-[#0B253D] mb-8 uppercase tracking-widest flex items-center gap-3 relative z-10">
                  <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillGroup.color} shadow-sm`} />
                  {skillGroup.category}
                </h3>
                
                <div className="space-y-6 relative z-10">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={skill.name} className="relative group/skill">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-[#475569] group-hover/skill:text-[#009ca6] transition-colors">
                        <span>{skill.name}</span>
                        <span className="text-[#0B253D]">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#f8fafc] rounded-full overflow-hidden shadow-inner border border-slate-100/50">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 + idx * 0.1, ease: "circOut" }}
                          className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full relative shadow-sm`}
                        />
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
