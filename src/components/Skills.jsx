import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs,
  FaGitAlt, FaFigma, FaMicrosoft,
} from "react-icons/fa";
import {
  SiRedux, SiTailwindcss, SiExpress, SiMongodb, SiFirebase,
  SiPostman, SiAdobeillustrator, SiCanva, SiGoogle,
} from "react-icons/si";

const skillsData = [
  { name: "HTML5", level: 95, category: "Frontend", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", level: 90, category: "Frontend", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", level: 90, category: "Frontend", icon: <FaJsSquare />, color: "text-yellow-400" },
  { name: "React", level: 90, category: "Frontend", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Redux", level: 85, category: "Frontend", icon: <SiRedux />, color: "text-purple-500" },
  { name: "Tailwind", level: 90, category: "Frontend", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Bootstrap", level: 85, category: "Frontend", icon: <FaBootstrap />, color: "text-purple-700" },
  { name: "Node.js", level: 85, category: "Backend", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", level: 85, category: "Backend", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", level: 80, category: "Backend", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Firebase", level: 75, category: "Backend", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "Git", level: 85, category: "Tools", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Postman", level: 70, category: "Tools", icon: <SiPostman />, color: "text-orange-400" },
  { name: "Figma", level: 80, category: "Tools", icon: <FaFigma />, color: "text-pink-500" },
  { name: "Illustrator", level: 70, category: "Tools", icon: <SiAdobeillustrator />, color: "text-orange-600" },
  { name: "MS Office", level: 85, category: "Tools", icon: <FaMicrosoft />, color: "text-blue-700" },
  { name: "Canva", level: 75, category: "Tools", icon: <SiCanva />, color: "text-cyan-500" },
  { name: "Google", level: 80, category: "Tools", icon: <SiGoogle />, color: "text-red-500" },
];

const filters = ["All", "Frontend", "Backend", "Tools"];

const Skills = () => {
  const [selected, setSelected] = useState("All");
  const filteredSkills = selected === "All" ? skillsData : skillsData.filter(skill => skill.category === selected);

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 bg-clip-text text-emerald-400">
          My Skills
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {filters.map(category => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`px-5 py-2 rounded-full border backdrop-blur-md 
                ${selected === category
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-400"
                  : "bg-white/5 text-white/60 border-white/10"
                } transition-all`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredSkills.map((skill, i) => (
            <Tilt key={i} glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={1500}>
              <motion.div
                className="p-5 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`text-3xl ${skill.color}`}>{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-white/90">{skill.name}</h4>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="text-right text-sm text-white/50 mt-1">{skill.level}%</div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
