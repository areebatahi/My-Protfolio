import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

function Footer() {
  return (
    <footer className="bg-emerald-400 text-black font-semibold text-center py-6">
      <motion.div
        className="max-w-6xl mx-auto flex justify-center items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        © {new Date().getFullYear()} Areeba Tahir. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default Footer;
