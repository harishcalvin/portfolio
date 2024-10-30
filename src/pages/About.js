import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiTailwindcss, SiRubyonrails, SiRedux } from "react-icons/si";

const About = () => {
  const { handleHover, handleMouseLeave } = useCursor();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-black text-white p-8">
      {/* Left Section: Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
      >
        <img
          src="images/me with laptop code.jpg"
          alt="About Me"
          className="rounded-lg shadow-lg w-72 h-72 lg:w-96 lg:h-96 object-cover"
        />
      </motion.div>

      {/* Right Section: About Text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 text-white space-y-6"
      >
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-200">
          Hi, I'm Harish!
        </h1>
        <p className="text-lg lg:text-xl text-gray-400">
          A self-taught web dev from Chennai, India. I’m all about building
          cool, functional stuff and constantly leveling up my skills. I’m
          always down to learn something new, experiment with tech, and create
          things that make a difference. Let’s team up and build something
          amazing together!
        </p>
        <div className="text-lg space-y-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-lg shadow-lg"
          >
            <strong>Skills:</strong>
            <div className="flex flex-wrap justify-center space-x-6 md:space-x-8 lg:space-x-10 space-y-4 md:space-y-0 p-4  text-4xl md:text-4xl lg:text-6xl">
              <FaJs
                className="text-yellow-400"
                onMouseEnter={() =>
                  handleHover(
                    "JavaScript",
                    "",
                    "rgba(255, 224, 51, 0.8)",
                    "#000"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <DiRuby
                className="text-red-600"
                onMouseEnter={() =>
                  handleHover("Ruby", "", "rgba(220, 38, 38, 0.8)", "#FFF")
                }
                onMouseLeave={handleMouseLeave}
              />
              <SiRubyonrails
                className="text-red-700"
                onMouseEnter={() =>
                  handleHover(
                    "Ruby on Rails",
                    "",
                    "rgba(220, 38, 38, 0.8)",
                    "#FFF"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <FaReact
                className="text-blue-400"
                onMouseEnter={() =>
                  handleHover("React.js", "", "rgba(37, 99, 235, 0.8)", "#FFF")
                }
                onMouseLeave={handleMouseLeave}
              />
              <SiRedux
                className="text-purple-600"
                onMouseEnter={() =>
                  handleHover("Redux", "", "rgba(128, 45, 191, 0.8)", "#FFF")
                }
                onMouseLeave={handleMouseLeave}
              />
              <FaHtml5
                className="text-orange-600"
                onMouseEnter={() =>
                  handleHover("HTML", "", "RGB(234, 88, 12)", "#FFF")
                }
                onMouseLeave={handleMouseLeave}
              />
              <FaCss3
                className="text-blue-500"
                onMouseEnter={() =>
                  handleHover("CSS", "", "rgba(59, 130, 246, 0.8)", "#FFF")
                }
                onMouseLeave={handleMouseLeave}
              />
              <SiTailwindcss
                className="text-teal-400"
                onMouseEnter={() =>
                  handleHover(
                    "Tailwindcss",
                    "",
                    "rgba(45, 212, 191, 0.8)",
                    "#FFF"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <FaBootstrap
                className="text-indigo-600"
                onMouseEnter={() =>
                  handleHover("Bootstrap", "", "rgba(79, 70, 229, 0.8)", "#FFF")
                }
                onMouseLeave={handleMouseLeave}
              />
              <FaGitAlt
                className="text-orange-500"
                onMouseEnter={() =>
                  handleHover("Git", "", "rgba(249, 115, 22, 0.8)", "#FFF")
                }
                onMouseLeave={handleMouseLeave}
              />
              <FaGithub
                className="text-gray-500"
                onMouseEnter={() =>
                  handleHover("Github", "", "rgba(107, 114, 128, 0.8)", "#FFF")
                }
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </motion.div>

          <motion.div className=" p-4 rounded-lg">
            <strong>Hobbies:</strong> I love music, reading, exploring places,
            enjoying small workouts or runs, and currently learning acoustic
            guitar.
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
