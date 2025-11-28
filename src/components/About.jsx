import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import dayjs from "dayjs";

// ------------------ Experience Timeline ------------------
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
    start: "2023-10-01",
    end: "2024-03-01",
    title: "Techno Kids Batch 6",
    company: "Saylani Mass IT Training",
    description:
      "Proficient in Microsoft Office Suite, Canva, Adobe Illustrator, and Google Workspace for creating professional documents, presentations, and designs",
  },
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
      transition: { repeat: Infinity, duration: 60, ease: "linear" },
    });
  };

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, duration: 60, ease: "linear" },
    });
  }, [controls]);

  return (
    <section
      id="about"
      className="px-8 md:px-16 pt-24 pb-24 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white overflow-hidden"
    > 
      <div className="max-w-7xl mx-auto md:px-12">
        {/* ------------------ About Text ------------------ */}
        <h2 className="text-4xl font-bold text-center mb-16 text-emerald-400">
          About
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg leading-8 text-gray-300 mb-6"
        >
          I'm{" "}
          <span className="font-semibold text-emerald-400">Areeba Tahir</span>
          , a passionate web and modern app developer with a strong foundation
          in technical web development. I specialize in building responsive,
          interactive websites using modern tools like HTML5, CSS3,
          JavaScript, and React.js.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg leading-8 text-gray-300 mb-6"
        >
          I’ve completed professional training from Saylani Mass IT Training,
          and I’m also skilled in tools like MS Office, Canva, and Adobe
          Illustrator—blending both design and development in my work.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg leading-8 text-gray-300 mb-16"
        >
          I’m eager to learn, lead, and grow in the field of tech with a vision
          to contribute meaningfully through my skills and creativity.
        </motion.p>

        {/* ------------------ Timeline ------------------ */}
        <div className="space-y-20">
          {experience.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center gap-6"
            >
              <div className="relative flex-shrink-0 w-full md:w-1/12 h-4 md:h-48 flex items-center justify-center">
                <div className="absolute w-full h-1 md:w-1 md:h-48 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-emerald-400 to-transparent rounded-full" />
                <div className="z-10 bg-white text-emerald-400 rounded-full p-2 shadow-md">
                  <FaBriefcase size={16} />
                </div>
              </div>

              <motion.div
                className="w-full text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="text-sm text-gray-400 mb-1">
                  {dayjs(item.start).format("MMM YYYY")} -{" "}
                  {dayjs(item.end).isValid()
                    ? dayjs(item.end).format("MMM YYYY")
                    : "Present"}
                </p>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-emerald-400 font-medium mb-2">
                  {item.company}
                </p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
