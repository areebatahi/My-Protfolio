// ✅ Import Section
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
} from "lucide-react";
import useThemeToggle from "../hooks/useThemeToggle"; // Path as per your project

// ✅ Navigation Items
const navItems = [
  { icon: <Home />, label: "Home", href: "#home" },
  { icon: <Ruler />, label: "Skills", href: "#skills" },
  { icon: <Palette />, label: "Website Designs", href: "#design" },
  { icon: <FolderKanban />, label: "Projects", href: "#projects" },
  { icon: <FileText />, label: "CV Preview", href: "/cv.pdf", external: true },
];

const socialItems = [
  { icon: <Linkedin />, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: <Github />, label: "GitHub", href: "https://github.com/" },
  { icon: <Mail />, label: "Email", href: "mailto:you@example.com" },
];

// ✅ Component Export
export default function IconSidebar() {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <>
      {/* === Desktop Sidebar === */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-[#1c1c1e] py-4 px-2 rounded-3xl shadow-lg z-50 w-14">
        {navItems.map((item, i) => (
          <NavIcon key={i} icon={item.icon} label={item.label} href={item.href} external={item.external} />
        ))}

        <div className="w-6 h-px bg-gray-600 my-2" />

        {/* 🌗 Theme Toggle */}
        <div className="group relative flex items-center justify-center">
          <button
            onClick={toggleTheme}
            className="text-gray-400 hover:text-white transition text-[20px] p-2 rounded-full hover:bg-gray-800"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <span className="absolute left-12 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </div>

        {socialItems.map((item, i) => (
          <NavIcon key={i} icon={item.icon} label={item.label} href={item.href} external />
        ))}
      </div>

      {/* === Mobile Bottom Navbar === */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#1c1c1e] flex justify-around items-center py-2 shadow-xl z-50">
        {[...navItems, ...socialItems].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target={item.external ? "_blank" : "_self"}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center text-gray-400 hover:text-white text-sm"
          >
            <div className="text-xl">{item.icon}</div>
            <span className="text-[10px] mt-1">{item.label}</span>
          </a>
        ))}

        {/* 🌗 Theme Toggle for Mobile */}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center text-gray-400 hover:text-white text-sm"
        >
          <div className="text-xl">{theme === "dark" ? <Sun /> : <Moon />}</div>
          <span className="text-[10px] mt-1">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </div>
    </>
  );
}

// ✅ Tooltip-enabled Icon Component
const NavIcon = ({ icon, label, href, external }) => {
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <div className="group relative flex items-center justify-center">
      <a
        {...linkProps}
        className="text-gray-400 hover:text-white transition text-[20px] p-2 rounded-full hover:bg-gray-800"
      >
        {icon}
      </a>
      <span className="absolute left-12 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
        {label}
      </span>
    </div>
  );
};
