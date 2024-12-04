import React, { forwardRef } from "react";

const apps = [
  {
    id: 1,
    name: "Safely360",
    description: "Description of Safely360",
    icon: "📱",
  },
];

const AppShowcase = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="apps" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Our Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-lg hover:shadow-gray-400"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {app.name}
                </h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <a
                  href="#"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

AppShowcase.displayName = "AppShowcase";

export default AppShowcase;
