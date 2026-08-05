import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="#home">
            <Logo size="sm" />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled ? "text-gray-600 hover:text-blue-600 hover:bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/80"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-xl hover:shadow-md hover:shadow-blue-200 transition-all"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-blue-50 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium text-sm"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 py-4">
            <a href="#contact" className="block text-center py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl text-sm">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
