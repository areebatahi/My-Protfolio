import {
  Home,
  Ruler,
  Palette,
  FolderKanban,
  Mail,
  Linkedin,
  Github,
  FileText,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

const useThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

const navItems = [
  { icon: <Home />, label: "Home", href: "#home" },
  { icon: <Ruler />, label: "Skills", href: "#skills" },
  { icon: <Palette />, label: "Website Designs", href: "#design" },
  { icon: <FolderKanban />, label: "Projects", href: "#projects" },
  { icon: <FileText />, label: "CV", href: "/cv.pdf", external: true },
];

const socialItems = [
  { icon: <Linkedin />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <Github />, label: "GitHub", href: "https://github.com" },
  { icon: <Mail />, label: "Mail", href: "mailto:you@example.com" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useThemeToggle();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#1c1c1e] text-white shadow-md z-50">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold">Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between w-full ml-10">
            {/* Center Navigation Links */}
            <div className="flex justify-center flex-1 gap-6">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition"
                >
                  <span className="text-[18px]">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social Links + Theme Toggle */}
            <div className="flex items-center gap-4 ml-auto pl-6">
              {socialItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition text-xl"
                >
                  {item.icon}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="text-xl text-gray-300 hover:text-white transition border-solid border-l-1 border-white pl-2"
              >
                {theme === "dark" ? <Sun /> : <Moon />}
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className="text-xl text-gray-300 hover:text-white transition">
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            <button onClick={toggleMenu} className="text-2xl text-gray-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#1c1c1e] px-4 pb-4 space-y-3">
            {[...navItems, ...socialItems].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 py-2 border-b border-gray-700 text-sm text-gray-300 hover:text-white"
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Spacer to avoid content being hidden under navbar */}
      <div className="h-[64px]" />
    </>
  );
};

export default Navbar;
