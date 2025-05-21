import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-300 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Name */}
        <h2 className="text-xl font-semibold">© 2025 Zara Dev</h2>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Message */}
        <p className="text-sm text-center md:text-right">
          Crafted with ❤️ by <span className="font-medium">Zara</span>
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
