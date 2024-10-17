// src/pages/Home.js
import React from "react";
import { useCursor } from "../context/CursorContext";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const GitHubIcon = () => <FaGithub size={24} />;
const LinkedInIcon = () => <FaLinkedin size={24} />;
const TwitterIcon = () => <FaTwitter size={24} />;
const MailIcon = () => <FaEnvelope size={24} />;

const Home = () => {
  const { handleHover, handleMouseLeave } = useCursor();
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-center z-10 mt-16"
      >
        <motion.h1
          className="text-6xl text-white font-bold"
          whileHover={{ scale: 1.1, rotate: 2 }}
          onMouseEnter={() =>
            handleHover(
              "That's me!",
              "👋",
              "rgba(255, 105, 180, 0.8)",
              "#ffffff"
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          Hi, I'm Harish
        </motion.h1>
        <motion.h2
          className="text-3xl text-gray-200 mt-4"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() =>
            handleHover(
              "Let's build something great!",
              "🚀",
              "rgba(64, 224, 208, 0.8)",
              "#1a202c"
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          Web Developer
        </motion.h2>
      </motion.div>
      {/* social links */}
      <motion.div
        className="mt-8 flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {[
          { icon: "github", url: "https://github.com/harishcalvin" },
          { icon: "linkedin", url: "https://www.linkedin.com/in/007harish/" },
          { icon: "twitter", url: "https://twitter.com/harish_calvin" },
          { icon: "mail", url: "mailto:theharish23@gmail.com" },
        ].map(({ icon, url }) => (
          <motion.a
            key={icon}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <span className="sr-only">{icon}</span>
            {icon === "github" && <GitHubIcon />}
            {icon === "linkedin" && <LinkedInIcon />}
            {icon === "twitter" && <TwitterIcon />}
            {icon === "mail" && <MailIcon />}
          </motion.a>
        ))}
      </motion.div>
      {/* custom cursor */}
    </div>
  );
};

export default Home;
