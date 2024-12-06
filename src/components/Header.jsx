import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Header({
  scrollToSection,
  appsRef,
  aboutRef,
  contactRef,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", ref: null },
    { name: "Apps", ref: appsRef },
    { name: "About", ref: aboutRef },
    { name: "Contact", ref: contactRef },
  ];

  const headerBgClass =
    isMenuOpen || isScrolled ? "bg-white shadow-lg" : "bg-transparent";
  const textColorClass =
    isMenuOpen || isScrolled ? "text-gray-800" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1
            className={`text-2xl font-bold transition-colors duration-300 ${textColorClass}`}
          >
            TWL
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.ref) scrollToSection(item.ref);
                      else window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`text-sm font-medium transition-colors duration-300 relative group ${textColorClass}`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className={`md:hidden transition-colors duration-300 ${textColorClass}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="mt-16">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.ref) scrollToSection(item.ref);
                      else window.scrollTo({ top: 0, behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300 group"
                  >
                    {item.name}
                    <ChevronRight
                      size={20}
                      className="ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
