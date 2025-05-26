import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-24 bg-gradient-to-br from-zinc-900 to-zinc-800"
    > 
    <div className="max-w-screen-6xl mx-auto px-8 flex flex-col items-center justify-center md:flex-row gap-12">


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white md:w-2/3"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-emerald-400">
            Hi everyone!, I'm Areeba Tahir
          </h1>

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
            I’m eager to learn, lead, and grow in the field of tech with a vision to contribute meaningfully through my skills and creativity.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-zinc-900 border border-emerald-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              <LayoutGrid className="w-5 h-5" />
              View Projects
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
