import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-8">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold tracking-tight hover:text-gray-200 transition duration-300 ease-in-out">
          TechWizard Labs
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 ml-auto">
          <a
            href="#"
            className="group hover:text-gray-200 transition duration-300 ease-in-out"
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-200"></span>
          </a>
          <a
            href="#"
            className="group hover:text-gray-200 transition duration-300 ease-in-out"
          >
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-200"></span>
          </a>
          <a
            href="#"
            className="group hover:text-gray-200 transition duration-300 ease-in-out"
          >
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-200"></span>
          </a>
        </nav>

        {/* Desktop Button */}
        <a
          href="#"
          className="hidden md:inline-block ml-6 bg-gray-800 text-white py-2 px-6 rounded-full hover:scale-105 transform transition duration-300 ease-in-out"
        >
          Get Started
        </a>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-600 text-white space-y-4 px-4 py-4">
          <a
            href="#"
            className="block text-lg hover:text-gray-200 transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-lg hover:text-gray-200 transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#"
            className="block text-lg hover:text-gray-200 transition duration-300 ease-in-out"
          >
            Contact
          </a>
          <a
            href="#"
            className="block bg-gray-800 text-white text-center py-2 px-6 rounded-full hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
