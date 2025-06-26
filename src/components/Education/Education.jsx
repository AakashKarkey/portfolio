import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 md:px-10 lg:px-20 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Container set to 90% width, centered */}
      <div className="max-w-[90%] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            My education has been a journey of learning and development. Here are the details of my academic background.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute sm:left-1/2 left-5 sm:translate-x-0 -translate-x-1/2 w-1 bg-white h-full"></div>

          {/* Education Entries */}
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute sm:left-1/2 left-5 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Card */}
              <div
                className={`w-full sm:max-w-md p-6 sm:p-8 bg-gray-900 rounded-2xl border border-white backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? "sm:pl-16" : "sm:pr-16"
                } ml-8`}
              >
                <div className="flex items-center space-x-6">
                  {/* School Logo/Image */}
                  <div className="w-20 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Degree, School, and Date */}
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-300">{edu.school}</p>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-semibold">
                  Grade: {edu.grade}
                </p>
                <p className="mt-2 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
