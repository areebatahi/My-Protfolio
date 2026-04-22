import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaGitAlt, FaFigma, FaMicrosoft,
} from "react-icons/fa";
import {
  SiRedux, SiTailwindcss, SiExpress, SiMongodb,
  SiPostman, SiAdobeillustrator, SiCanva,
} from "react-icons/si";
import { FaBullhorn } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";

// ------------------ Skills Data ------------------
const skillsData = [
  // Web Dev
  { name: "HTML5", level: 100, category: "Development", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", level: 95, category: "Development", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", level: 95, category: "Development", icon: <FaJsSquare />, color: "text-yellow-400" },
  { name: "React", level: 100, category: "Development", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", level: 90, category: "Development", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "MongoDB", level: 95, category: "Development", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Express", level: 90, category: "Development", icon: <SiExpress />, color: "text-gray-300" },

  // Tools
  { name: "Git", level: 100, category: "Tools", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Postman", level: 95, category: "Tools", icon: <SiPostman />, color: "text-orange-400" },
  { name: "MS Office", level: 100, category: "Tools", icon: <FaMicrosoft />, color: "text-blue-700" },

  // Design
  { name: "Canva Design", level: 90, category: "Design", icon: <SiCanva />, color: "text-cyan-500" },
  { name: "Adobe Illustrator", level: 80, category: "Design", icon: <SiAdobeillustrator />, color: "text-orange-600" },
  { name: "Figma", level: 75, category: "Design", icon: <FaFigma />, color: "text-pink-500" },

  // Digital Skills (IMPORTANT ADD)
  { name: "Facebook Ads", level: 90, category: "Digital", icon: <FaBullhorn />, color: "text-emerald-400" },
  { name: "SEO", level: 85, category: "Digital", icon: <FaSearch />, color: "text-green-300" },
  { name: "Logo Design", level: 85, category: "Digital", icon: <FaPaintBrush />, color: "text-purple-400" },
];

// ------------------ Filters ------------------
const filters = ["Development", "Design", "Digital", "Tools"];

const Skills = () => {
  const [selected, setSelected] = useState("Development");

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === selected
  );

  return (
    <section
      id="skills"
      className="px-8 md:px-16 pt-8 pb-6 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white"
    >
      <div className="max-w-7xl mx-auto text-center md:px-12">

        {/* Title */}
        <h2 className="text-5xl font-bold mb-12 text-emerald-400">
        Skills
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`px-5 py-2 rounded-full border transition-all
                ${
                  selected === category
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-400"
                    : "bg-white/5 text-white/60 border-white/10"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredSkills.map((skill, i) => (
            <Tilt
              key={i}
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              transitionSpeed={1500}
            >
              <motion.div
                className="p-5 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg hover:shadow-emerald-500/30 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`text-3xl ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{skill.name}</h4>
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

                <div className="text-right text-sm text-white/50 mt-1">
                  {skill.level}%
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;