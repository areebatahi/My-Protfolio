import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Zara Fashion",
    description: "Full-featured MERN e-commerce app with user auth, cart, admin panel, and payment integration.",
    image: "/images/zara-fashion.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    live: "https://zara-fashion.vercel.app",
    github: "https://github.com/your-username/zara-fashion"
  },
  {
    title: "Task Tracker",
    description: "Trello-inspired app with task management, status updates, and drag-and-drop.",
    image: "/images/task-tracker.png",
    tech: ["React", "Express", "MongoDB", "Framer Motion"],
    live: "https://task-tracker.vercel.app",
    github: "https://github.com/your-username/task-tracker"
  },
  {
    title: "Employee Dashboard",
    description: "Check-in/out system, leave tracker, salary display, and user profile using MERN.",
    image: "/images/employee-dashboard.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    live: "https://employee-dashboard.vercel.app",
    github: "https://github.com/your-username/employee-dashboard"
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-12 lg:px-24 bg-zinc-900 text-white">
      <h2 className="text-4xl font-bold text-center text-emerald-400 mb-16">Projects</h2>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-zinc-800 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-emerald-700 text-white px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline flex items-center gap-1">
                  Live <FaExternalLinkAlt size={14} />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline flex items-center gap-1">
                  Code <FaGithub size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Link */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:underline inline-flex items-center gap-2"
        >
          See more <FaExternalLinkAlt size={14} />
        </a>
      </div>

    </section>
  );
};

export default Project;
