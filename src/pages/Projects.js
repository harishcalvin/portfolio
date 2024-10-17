// src/pages/Projects.js
import React from "react";
import { useCursor } from "../context/CursorContext"; // Create a context for cursor

import projectsData from "../data/projectsData";

const Projects = () => {
  const { handleHover, handleMouseLeave } = useCursor();

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-black">
      <h1
        className="text-white text-3xl mb-5"
        onMouseEnter={() =>
          handleHover(
            "My Projects",
            "💼",
            "rgba(255, 105, 180, 0.8)",
            "#ffffff"
          )
        }
        onMouseLeave={handleMouseLeave}
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {projectsData.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h2 className="text-xl text-zinc-200 font-semibold">
              {project.title}
            </h2>
            <p className="mb-2 text-white">{project.description}</p>
            <div className="text-sm">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-black text-yellow-400 px-3 py-1 rounded-full font-medium mr-2 "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex">
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-5 text-2xl"
                onMouseEnter={() =>
                  handleHover(
                    "Preview",
                    "👀",
                    "rgba(0, 123, 255, 0.8)",
                    "#ffffff"
                  )
                }
                onMouseLeave={handleMouseLeave}
              >
                👀
              </a>
              <br />
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-5 text-2xl"
                onMouseEnter={() =>
                  handleHover(
                    "View Code",
                    "💻",
                    "rgba(0, 123, 255, 0.8)",
                    "#ffffff"
                  )
                }
                onMouseLeave={handleMouseLeave}
              >
                💻
              </a>
              <br />
              <a
                href={project.demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-5 text-2xl"
                onMouseEnter={() =>
                  handleHover(
                    "Demo Video",
                    "🎥",
                    "rgba(0, 123, 255, 0.8)",
                    "#ffffff"
                  )
                }
                onMouseLeave={handleMouseLeave}
              >
                🎥
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
