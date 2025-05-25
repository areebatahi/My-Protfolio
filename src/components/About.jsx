import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-900 text-white py-20 px-4 md:px-12 lg:px-24"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-emerald-400"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg leading-8 text-gray-300 mb-6"
        >
          I'm <span className="font-semibold text-white">Areeba Tahir</span>, a passionate web and modern app developer with a strong foundation in technical web development. I specialize in building responsive, interactive websites using modern tools like HTML5, CSS3, JavaScript, and React.js.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg leading-8 text-gray-300 mb-6"
        >
          I’ve completed professional training from Saylani Mass IT Training, and I’m also skilled in tools like MS Office, Canva, and Adobe Illustrator—blending both design and development in my work.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg leading-8 text-gray-300 mb-8"
        >
          I'm currently pursuing my Intermediate in Medical from Government Girls College, Shah Faisal No. 5. I’m eager to learn, lead, and grow in the field of tech with a vision to contribute meaningfully through my skills and creativity.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-200">
          <div>
            <h4 className="font-semibold text-white mb-1">Skills</h4>
            <ul className="list-disc list-inside">
              <li>Web Development</li>
              <li>Canva / Graphic Design</li>
              <li>Adobe Illustrator</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">Tools</h4>
            <ul className="list-disc list-inside">
              <li>MS Office</li>
              <li>Canva</li>
              <li>Illustrator</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">Languages</h4>
            <ul className="list-disc list-inside">
              <li>English</li>
              <li>Urdu</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
