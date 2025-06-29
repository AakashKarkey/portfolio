import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-20 px-4 md:px-10 lg:px-20 font-sans bg-skills-gradient"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-base md:text-lg font-medium max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap justify-center gap-8">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 px-6 py-8 w-full sm:w-[48%] lg:w-[32%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6 text-center">
            {category.title}
          </h3>

          <div className="grid grid-cols-3 gap-4">
            {category.skills.map((skill) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={800}
                scale={1.05}
                transitionSpeed={800}
              >
                <div className="flex flex-col items-center bg-transparent border border-gray-700 rounded-xl py-3 px-2 hover:shadow-lg">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-1"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 text-center">
                    {skill.name}
                  </span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
