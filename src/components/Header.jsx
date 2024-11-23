import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#FAFAFA] text-gray-900 shadow-md rounded-2xl max-w-4xl mx-auto mt-4 border border-gray-300">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="text-2xl font-semibold hover:opacity-90 transition duration-300 ease-in-out">
          TechWizard Labs
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-4">
          <a
            href="#"
            className="relative text-sm group hover:text-gray-600 transition duration-300 ease-in-out"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="relative text-sm group hover:text-gray-600 transition duration-300 ease-in-out"
          >
            Features
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="relative text-sm group hover:text-gray-600 transition duration-300 ease-in-out"
          >
            Pricing
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Get Started Button */}
        <a
          href="#"
          className="hidden md:inline-block bg-gray-800 text-white py-1 px-4 rounded-full text-sm hover:scale-105 transform transition duration-300 ease-in-out"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-900"
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
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-200 text-gray-900 rounded-b-2xl px-4 py-2 space-y-2">
          <a href="#" className="block hover:text-gray-600 transition text-sm">
            Home
          </a>
          <a href="#" className="block hover:text-gray-600 transition text-sm">
            Features
          </a>
          <a href="#" className="block hover:text-gray-600 transition text-sm">
            Pricing
          </a>
          <a
            href="#"
            className="block bg-gray-800 text-white text-center py-1 px-4 rounded-full hover:scale-105 transform transition text-sm"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
