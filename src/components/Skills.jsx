import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiAdobeillustrator,
  SiCanva,
  SiGoogle,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", level: 95, color: "from-orange-500 to-pink-500", icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
    { name: "CSS3", level: 90, color: "from-blue-500 to-blue-700", icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600", icon: <FaJsSquare className="text-yellow-400 w-6 h-6" /> },
    { name: "React", level: 90, color: "from-cyan-400 to-blue-500", icon: <FaReact className="text-cyan-400 w-6 h-6" /> },
    { name: "Redux", level: 85, color: "from-purple-500 to-purple-700", icon: <SiRedux className="text-purple-500 w-6 h-6" /> },
    { name: "Tailwind CSS", level: 90, color: "from-sky-400 to-blue-500", icon: <SiTailwindcss className="text-sky-400 w-6 h-6" /> },
    { name: "Bootstrap", level: 85, color: "from-purple-700 to-purple-900", icon: <FaBootstrap className="text-purple-700 w-6 h-6" /> },
    { name: "Node.js", level: 85, color: "from-green-400 to-green-600", icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
    { name: "Express", level: 85, color: "from-gray-600 to-gray-700", icon: <SiExpress className="text-gray-300 w-6 h-6" /> },
    { name: "MongoDB", level: 80, color: "from-green-400 to-green-500", icon: <SiMongodb className="text-green-400 w-6 h-6" /> },
    { name: "Firebase", level: 75, color: "from-yellow-400 to-orange-500", icon: <SiFirebase className="text-yellow-500 w-6 h-6" /> },
    { name: "Git", level: 85, color: "from-orange-500 to-red-500", icon: <FaGitAlt className="text-red-500 w-6 h-6" /> },
    { name: "Postman", level: 70, color: "from-orange-400 to-red-400", icon: <SiPostman className="text-orange-400 w-6 h-6" /> },
    { name: "Figma", level: 80, color: "from-pink-500 to-pink-700", icon: <FaFigma className="text-pink-500 w-6 h-6" /> },
    { name: "Illustrator", level: 70, color: "from-orange-600 to-yellow-600", icon: <SiAdobeillustrator className="text-orange-600 w-6 h-6" /> },
    { name: "Microsoft Office", level: 85, color: "from-blue-700 to-blue-900", icon: <FaMicrosoft className="text-blue-700 w-6 h-6" /> },
    { name: "Canva", level: 75, color: "from-cyan-500 to-blue-600", icon: <SiCanva className="text-cyan-500 w-6 h-6" /> },
    { name: "Google Workspace", level: 80, color: "from-red-500 to-red-700", icon: <SiGoogle className="text-red-500 w-6 h-6" /> },
  ];

  return (
    <section
      id="skills"
      className="p-6 pt-24 pb-24 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-400">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skills.map((skill, idx) => (
          <div key={idx} className="w-full mb-6">
            <div className="flex items-center justify-between mb-1 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                style={{ height: "100%" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
