import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Download } from "lucide-react";

const roles = [
  "Web Developer",
  "React Enthusiast",
  "Node.js Developer",
  "MongoDB Specialist",
  "Express.js Expert",
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!deleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 150);
    } else if (deleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 100);
    } else if (!deleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && displayText.length === 0) {
      setDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting]);

  return (
    <section
      id="home"
      className="px-8 md:px-16 pt-24 pb-24 bg-gradient-to-br from-zinc-900 to-zinc-800"
    >
      <div className="max-w-7xl mx-auto md:px-12">
        <div className="flex flex-col items-center justify-center md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-emerald-400 text-center md:text-left">
              Hi, <span className="text-white">I'm Areeba Tahir</span>
            </h1>

            <span className="font-semibold text-emerald-400">
              {displayText}
              <span className="blinking-cursor">|</span>
            </span>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg leading-8 text-gray-300 mb-6 text-center md:text-left"
            >
              Using modern tools like React, Node.js, MongoDB, and Express, I
              develop high-performance web applications that run smoothly and
              quickly. <br />
            </motion.p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="../../public/pdf/CV.pdf  "
                download="Resume.pdf"
                className="inline-flex items-center gap-2 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .blinking-cursor {
          animation: blink 1.2s steps(2, start) infinite;
          font-weight: 800;
          font-size: 1.2rem;
          color: #22c55e;
          vertical-align: bottom;
          margin-left: 2px;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
