import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaFigma,
  FaBootstrap, FaGitAlt, FaNodeJs, FaBriefcase
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiRedux, SiFirebase,
  SiPostman, SiExpress, SiAdobeillustrator
} from "react-icons/si";
import dayjs from "dayjs";

const experience = [
  {
    start: "2023-12-19",
    end: "2025-05-01",
    title: "Web and Mobile App Developement",
    company: "Saylani Mass IT Training",
    description:
      "Developed web and mobile applications, ensured high-performance solutions, and implemented efficient code for business needs.",
  },
  {
    start: "2023-06-01",
    end: "2024-01-01",
    title: "Techno Kids Batch 6",
    company: "Saylani Mass IT Training",
    description:
      "Assisted in frontend development, learned responsive design, and collaborated with the team to build client websites.",
  },
];

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

  useEffect(() => {
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

      {/* __________________________Courses______________________________ */}
      <h2 className="text-4xl font-bold text-center mb-16 text-emerald-400">Courses</h2>

      <div className="relative max-w-5xl mx-auto space-y-20">
        {experience.map((item, index) => (
          <div key={index} className="relative flex flex-col md:flex-row items-center gap-6">

            {/* Animated Vertical Line */}
            <div className="relative flex-shrink-0 w-full md:w-1/12 h-4 md:h-48 flex items-center justify-center">
              <div className="absolute w-full h-1 md:w-1 md:h-48 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-emerald-400 to-transparent rounded-full" />
              <div className="z-10 bg-white text-emerald-400 rounded-full p-2 shadow-md">
                <FaBriefcase size={16} />
              </div>
            </div>


            {/* Text Animation - Left to Right */}
            <motion.div
              className="w-full text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-sm text-gray-400 mb-1">
                {dayjs(item.start).format("MMM YYYY")} -{" "}
                {dayjs(item.end).isValid() ? dayjs(item.end).format("MMM YYYY") : "Present"}
              </p>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-emerald-400 font-medium mb-2">{item.company}</p>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>

          </div>
        ))}
      </div>


      {/* __________________________Skills______________________________ */}
      <div className="max-w-7xl mx-auto mt-28">
        <div
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div className="flex gap-6 w-max" animate={controls}>
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center w-40 p-6 rounded-xl bg-zinc-700 shadow-lg hover:scale-105 hover:bg-zinc-600 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {skill.icon}
                <p className="mt-3 text-base font-medium text-white text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default About;
