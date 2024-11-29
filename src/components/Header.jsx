import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({
  scrollToSection,
  appsRef,
  aboutRef,
  contactRef,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          [TechWizard Labs]
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#apps"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(appsRef);
                }}
                className="text-gray-600 hover:text-indigo-600 transition duration-300"
              >
                Apps
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(aboutRef);
                }}
                className="text-gray-600 hover:text-indigo-600 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(contactRef);
                }}
                className="text-gray-600 hover:text-indigo-600 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li>
              <a
                href="#"
                className="block text-gray-600 hover:text-indigo-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#apps"
                className="block text-gray-600 hover:text-indigo-600 transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(appsRef);
                  setIsMenuOpen(false);
                }}
              >
                Apps
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-gray-600 hover:text-indigo-600 transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(aboutRef);
                  setIsMenuOpen(false);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-indigo-600 transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(contactRef);
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
