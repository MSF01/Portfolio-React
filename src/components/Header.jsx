function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-8 ">
        <div className="text-3xl font-bold tracking-tight hover:text-gray-200 transition duration-300 ease-in-out">
          TechWizard Labs
        </div>

        <nav className="flex space-x-6 ml-auto">
          <a
            href="#"
            className="group hover:text-gray-200 transition duration-300 ease-in-out"
          >
            Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-200"></span>
          </a>
          <a
            href="#"
            className="group hover:text-gray-200 transition duration-300 ease-in-out"
          >
            About
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-200"></span>
          </a>
          <a
            href="#"
            className="group hover:text-gray-200 transition duration-300 ease-in-out"
          >
            Contact
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-200"></span>
          </a>
        </nav>

        <a
          href="#"
          className="ml-6 bg-gray-800 text-white py-2 px-6 rounded-full hover:scale-105 transform transition duration-300 ease-in-out"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;
