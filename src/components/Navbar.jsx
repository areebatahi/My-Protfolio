import {
  Home,
  User,         
  Briefcase,     
  Mail,          
  Menu,
  X,
  Code
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: <Home />, label: "Home", href: "#home" },
  { icon: <User />, label: "About", href: "#about" },
  { icon: <Code />, label: "Skills", href: "#skills" },
  { icon: <Briefcase />, label: "Projects", href: "#projects" },
  { icon: <Mail />, label: "Contact", href: "#contact" },
];

const Navbar = () => {
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
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
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
