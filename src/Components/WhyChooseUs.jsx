import React from "react";
import { Fade } from "react-awesome-reveal";

const WhyChooseUs = ({ darkMode }) => {
  const features = [
    {
      number: "01",
      title: "Trusted Platform",
      text: "We connect verified clients and freelancers for safe work.",
    },
    {
      number: "02",
      title: "Secure Payments",
      text: "Your payments are protected and handled securely.",
    },
    {
      number: "03",
      title: "Fast Hiring",
      text: "Quickly find and hire skilled freelancers for your tasks.",
    },
  ];

  return (
    <section
      className={`py-12 text-center ${
        darkMode ? "bg-[#111827]" : "bg-[#90AB8B]"
      }`}
    >
      <h2
        className={`text-3xl font-bold mb-8 ${
          darkMode ? "text-white" : "text-white"
        }`}
      >
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-6 w-11/12 mx-auto">
        {features.map((feature, index) => (
          <Fade
            key={feature.number}
            direction="up"
            triggerOnce
            delay={index * 200}
            cascade
          >
            <div
              className={`relative overflow-hidden p-6 pt-10 rounded-lg shadow-md hover:scale-105 transition text-left bg-gradient-to-br ${
                darkMode
                  ? "from-[#1E293B] to-[#0F172A]"
                  : "from-[#3B4953] to-[#2A353D]"
              }`}
            >
              {/* Ghost number - corner badge */}
              <span className="absolute top-3 right-4 text-4xl md:text-5xl font-extrabold text-white/10 select-none leading-none">
                {feature.number}
              </span>

              {/* Accent line */}
              <div className="w-10 h-1 bg-[#90AB8B] mb-4 rounded-full"></div>

              <h3 className="font-bold text-lg mb-2 text-white">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-200">{feature.text}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;