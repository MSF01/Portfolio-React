import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  const navItems = [
    { name: "Home", ref: null },
    { name: "Apps", ref: appsRef },
    { name: "About", ref: aboutRef },
    { name: "Contact", ref: contactRef },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          TechWizard Labs
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.name.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.ref) scrollToSection(item.ref);
                    else window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-600 hover:text-indigo-600"
                      : "text-white hover:text-indigo-200"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? "text-gray-600" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
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
                    className="block text-gray-600 hover:text-indigo-600 transition duration-300"
                  >
                    {item.name}
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
