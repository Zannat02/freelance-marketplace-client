
import React from "react";

const HowItWorks = ({ darkMode }) => {
  return (
    <section
      className={`py-12 text-center ${
        darkMode ? "bg-[#111827]" : "bg-[#EBF4DD]"
      }`}
    >
      <h2
        className={`text-3xl font-bold mb-8 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-6 w-11/12 mx-auto">

        {/* Card 1 */}
        <div
          className={`card shadow ${
            darkMode ? "bg-[#1E293B] text-white" : "bg-white"
          }`}
        >
          <figure>
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop&q=60"
              alt="Post Task"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="font-bold text-lg">1. Post Task</h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Create your task with budget & deadline
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`card shadow ${
            darkMode ? "bg-[#1E293B] text-white" : "bg-white"
          }`}
        >
          <figure>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60"
              alt="Get Bids"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="font-bold text-lg">2. Get Bids</h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Freelancers will bid on your task
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`card shadow ${
            darkMode ? "bg-[#1E293B] text-white" : "bg-white"
          }`}
        >
          <figure>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60"
              alt="Hire & Work"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="font-bold text-lg">3. Hire & Work</h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Choose best freelancer and start work
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;