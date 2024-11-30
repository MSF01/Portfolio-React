export default function Hero({ scrollToSection, appsRef }) {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to [solo org]
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          We create innovative mobile apps that enhance your digital experience
        </p>
        <a
          href="#apps"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(appsRef);
          }}
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg"
        >
          Explore Our Apps
        </a>
      </div>
    </section>
  );
}
