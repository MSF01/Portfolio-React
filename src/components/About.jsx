import React, { forwardRef } from "react";

const About = forwardRef(({ contactRef }, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          About TechWizard Labs
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="mb-4 text-gray-600">
            TechWizard Labs is a one-person mobile app development studio
            passionate about creating innovative and user-friendly applications.
          </p>
          <p className="mb-4 text-gray-600">
            With a focus on quality and creativity, we strive to deliver apps
            that make a difference in people's lives.
          </p>
          <p className="text-gray-600">
            Our mission is to continually push the boundaries of what's possible
            in mobile app development and provide exceptional experiences for
            our users.
          </p>
        </div>
        <div ref={contactRef} id="contact" className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h3>
          <p className="text-gray-600 mb-4">
            Have questions or want to learn more about our apps? Reach out to
            us!
          </p>
          <a
            href="mailto:example@email.com"
            className="text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            support@techwizardlabs.org
          </a>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
