import {
  Home,
  Ruler,
  Palette,
  FolderKanban,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

// Theme Toggle Hook
const useThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

// Navbar Items
const navItems = [
  { icon: <Home />, label: "Home", href: "#home" },
  { icon: <Ruler />, label: "About me", href: "#skills" },
  { icon: <FolderKanban />, label: "Projects", href: "#projects" },
  { icon: <Palette />, label: "Contact", href: "#design" },
];

// Navbar Component
const Navbar = () => {
  const { theme, toggleTheme } = useThemeToggle();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#1c1c1e] text-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold"></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-gray-200 hover:text-emerald-400 transition-colors duration-300 hoverColor"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="text-gray-300 border-l border-gray-200 pl-4 hover:text-emerald-400 transition-colors duration-300 hoverColor hover:cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 hoverColor hover:cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 hoverColor hover:cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#1c1c1e] px-4 pb-4 space-y-3">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 py-2 border-b border-gray-700 text-sm text-gray-300 hover:text-emerald-400 transition-colors duration-300 hoverColor"
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
