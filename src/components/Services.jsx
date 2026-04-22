import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaSearch,
  FaShoppingCart,
  FaMobileAlt,
} from "react-icons/fa";

// ------------------ Services Data ------------------
const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites using React, Node.js and MERN stack.",
    icon: <FaCode />,
  },
  {
    title: "UI/UX & Web Design",
    description:
      "Clean, modern and user-friendly designs focused on better user experience and conversions.",
    icon: <FaPaintBrush />,
  },
  {
    title: "E-Commerce Websites",
    description:
      "Complete online store solutions with product pages, cart system and secure structure.",
    icon: <FaShoppingCart />,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve Google ranking, increase visibility and drive organic traffic to your business.",
    icon: <FaSearch />,
  },
  {
    title: "Social Media Ads",
    description:
      "High-converting Facebook & Instagram ad campaigns to boost sales and engagement.",
    icon: <FaBullhorn />,
  },
  {
    title: "Mobile Friendly Design",
    description:
      "Fully responsive designs optimized for mobile, tablet and desktop devices.",
    icon: <FaMobileAlt />,
  },
];

// ------------------ Component ------------------
const Services = () => {
  return (
    <section
      id="services"
      className="px-8 md:px-16 py-24 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white"
    >
      <div className="max-w-7xl mx-auto text-center md:px-12">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-emerald-400">
          My Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl text-emerald-400 mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;