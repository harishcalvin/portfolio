// src/pages/Projects.js
import React from "react";
import { useCursor } from "../context/CursorContext";
import ImageSlider from "../components/ImageSlider";
import projectsData from "../data/projectsData";

const Projects = () => {
  const { handleHover, handleMouseLeave } = useCursor();

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-black pt-32">
      <div className="container mx-auto">
        <h1 className="text-white text-3xl mb-5">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="border border-gray-600 shadow-xl rounded-lg hover:shadow-2xl hover:shadow-gray-500/50 transition-shadow duration-300 ease-in-out bg-gray-800"
            >
              <ImageSlider images={project.images} />
              <div className="p-4">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
