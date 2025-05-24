// HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
// import heroImg from '../assets/img/hero-model.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center pt-24 md:pt-32"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm Areeba Tahir
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            A passionate frontend developer and UI/UX enthusiast, crafting beautiful and functional websites using React and Tailwind CSS.
          </p>
          <a
            href="#projects"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            View Projects
          </a>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img src="" alt="Hero Model" className="max-h-[500px] object-contain" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
