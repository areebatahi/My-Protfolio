import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "Elite Shop Framework",
    description:
      "This website features a sleek, modern design with intuitive navigation and a fully responsive layout, ideal for delivering polished and professional business presentations.",
    image: "/images/websiteDesign.PNG",
    tech: [
      "Html5",
      "Css3",
      "Bootstrap",
      "Javascript",
      "Framer Motion",
      "Responsive Web Design",
      "UI/UX Design",
      "Landing Page Design",
      "Shop UI Kit"
    ],
    live: "https://website-design-three-sigma.vercel.app",
    github: "https://github.com/areebatahi/website-design.git",
  },
  {
    title: "Weather App",
    description:
      "A stylish React.js weather app with live API integration, dynamic backgrounds based on weather conditions, and an interactive, animated UI using Framer Motion and SweetAlert..",
    image: "/images/Weather app.PNG",
    tech: [
      "React.js",
      "JavaScript (ES6+)",
      "Axios",
      "Framer Motion",
      "Tailwind CSS",
      "SweetAlert2",
      "OpenWeatherMap API",
      "Unsplash API",
    ],
    live: "https://weather-app-vert-seven-68.vercel.app/",
    github: "https://github.com/areebatahi/weather-app",
  },
  {
    title: "Task Management",
    description:
      "This is a full-featured task management app with user authentication, task creation, status tracking, and organized task categories for efficient workflow management.",
    image: ".././public/images/Task Manager.PNG",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Redux ",
      "Express",
      "MongoDB",
      "Nodejs",
      "REST API",
      "JWT Authentication",
      "Full-Stack Development",
      "MERN Stack",
    ],
    live: "https://final-smit-hackathon-ks94.vercel.app",
    github: "https://github.com/areebatahi/Final-SMIT-Hackathon",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-12 lg:px-24 bg-zinc-900 text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-emerald-400 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Here are some of my recent projects. Each one was built to solve
        specific problems and deliver exceptional user experiences.
      </motion.div>
      <motion.div
        className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-zinc-800 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            variants={cardVariants}
          >
            {/* Image wrapped in link */}
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </a>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-emerald-700 text-white px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Live <FaExternalLinkAlt size={14} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline flex items-center gap-1"
                >
                  Code <FaGithub size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 cursor-pointer"
          >
            See more <FaExternalLinkAlt size={14} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
};

export default Project;
