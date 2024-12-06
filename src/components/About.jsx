import React, { forwardRef } from "react";

const About = forwardRef(({ contactRef }, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          About [solo org]
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-12">
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full transform rotate-6"></div>
              <div className="absolute inset-[3px] bg-white rounded-full"></div>
              <img
                src="/dev.png"
                alt="Developer"
                className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full shadow-lg object-cover z-10"
              />
              <div className="absolute -inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="mb-4 text-gray-600">
                [solo org] is a one-person mobile app development studio
                passionate about creating innovative and user-friendly
                applications.
              </p>
              <p className="mb-4 text-gray-600">
                With a focus on quality and creativity, we strive to deliver
                apps that make a difference in people's lives.
              </p>
              <p className="text-gray-600">
                Our mission is to continually push the boundaries of what's
                possible in mobile app development and provide exceptional
                experiences for our users.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={contactRef}
          id="contact"
          className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Contact Us
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            Have questions or want to learn more about our apps? Reach out to
            us!
          </p>
          <div className="text-center">
            <a
              href="mailto:info@techwizardlabs.org"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              info@techwizardlabs.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
