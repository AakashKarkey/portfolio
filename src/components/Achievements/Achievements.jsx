import React from "react";
import { achievements } from "../../constants";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 md:px-10 lg:px-20 font-sans">
      {/* Container set to 90% max-width */}
      <div className="max-w-[90%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            Highlights of my personal and professional milestones.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-[#0d081f] border border-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
