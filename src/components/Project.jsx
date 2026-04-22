import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const projectsData = [
  {
    name: "Elite Shop Framework",
    category: "Web Development",
    description:
      "Modern e-commerce UI with responsive layout and conversion-focused design.",
    image: "/images/websiteDesign.PNG",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://website-design-three-sigma.vercel.app",
    github: "https://github.com/areebatahi/website-design.git",
  },
  {
    name: "Weather App",
    category: "Web Development",
    description:
      "Real-time weather app with API integration and dynamic UI.",
    image: "/images/Weather app.PNG",
    tech: ["React", "API", "Tailwind", "Framer Motion"],
    live: "https://weather-app-vert-seven-68.vercel.app/",
    github: "https://github.com/areebatahi/weather-app",
  },
  {
    name: "Task Manager",
    category: "Full Stack",
    description:
      "MERN stack task management system with authentication & workflow.",
    image: "/images/Task Manager.PNG",
    tech: ["MongoDB", "Express", "React", "Node"],
    live: "https://final-smit-hackathon-ks94.vercel.app",
    github: "https://github.com/areebatahi/Final-SMIT-Hackathon",
  },
  {
    name: "Ads Campaign Designs",
    category: "Digital Marketing",
    description:
      "Facebook & Instagram ads creatives focused on engagement & sales.",
    image: "/images/ads.png",
    tech: ["Facebook Ads", "Instagram Ads", "Canva"],
    live: "#",
    github: "#",
  },
  {
    name: "Logo Branding",
    category: "Design",
    description:
      "Professional logo and brand identity designs for businesses.",
    image: "/images/logo.png",
    tech: ["Logo Design", "Illustrator", "Branding"],
    live: "#",
    github: "#",
  },
  {
    name: "SEO Strategy",
    category: "Digital Marketing",
    description:
      "SEO optimization strategies for better ranking and visibility.",
    image: "/images/seo.png",
    tech: ["SEO", "Keywords", "Optimization"],
    live: "#",
    github: "#",
  },
];

const categories = [
  "Web Development",
  "Full Stack",
  "Design",
  "Digital Marketing",
];

const Projects = () => {
  const [selected, setSelected] = useState("Web Development");

  const filtered = projectsData.filter(
    (p) => p.category === selected
  );

  return (
    <section
      id="projects"
      className="px-8 md:px-16 pt-8 pb-8 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white"
    >
      <div className="max-w-7xl mx-auto text-center md:px-12">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-emerald-400">
          My Projects
        </h2>

        {/* Category Buttons (LIKE SKILLS FILTER) */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full border transition-all
                ${
                  selected === cat
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-400"
                    : "bg-white/5 text-white/60 border-white/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-500/30 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <img
                src={project.image}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 text-left space-y-3">
                <h3 className="text-xl font-bold">{project.name}</h3>

                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-emerald-700 px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.live}
                    className="text-emerald-400 flex items-center gap-1"
                  >
                    Live <FaExternalLinkAlt size={12} />
                  </a>

                  <a
                    href={project.github}
                    className="text-gray-300 flex items-center gap-1"
                  >
                    Code <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;