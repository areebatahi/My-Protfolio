import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaFigma, FaBootstrap, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux, SiFirebase, SiPostman, SiExpress, SiAdobeillustrator } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-8 h-8" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-8 h-8" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 w-8 h-8" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 w-8 h-8" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 w-8 h-8" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700 w-8 h-8" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300 w-8 h-8" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 w-8 h-8" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 w-8 h-8" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 w-8 h-8" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400 w-8 h-8" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500 w-8 h-8" /> },
  { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-600 w-8 h-8" /> },
];

const About = () => {
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  const handleMouseEnter = () => {
    setPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setPaused(false);
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      },
    });
  };

  // Start animation on mount
  React.useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white py-20 px-4 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-emerald-400 text-center"
        >
        Skills
        </motion.h2>

        <div
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex gap-6 w-max"
            animate={controls}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-40 p-6 rounded-xl bg-zinc-700 shadow-lg hover:scale-105 hover:bg-zinc-600 transition-transform duration-300"
              >
                {skill.icon}
                <p className="mt-3 text-base font-medium text-white text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
