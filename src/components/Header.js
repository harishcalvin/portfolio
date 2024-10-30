// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -5 },
    tap: { scale: 0.95, y: 0 },
  };

  const underlineVariants = {
    rest: { width: 0 },
    hover: { width: "100%" },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ease-in-out
        ${
          scrolled ? "bg-black/30 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-white text-2xl font-bold"
          whileHover={{ scale: 1.05, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          My Portfolio
        </motion.h1>

        <ul className="hidden md:flex space-x-8">
          {["Home", "Projects", "About"].map((item) => (
            <motion.li
              key={item}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`text-white text-lg font-semibold relative ${
                  location.pathname ===
                  (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    ? "text-yellow-300"
                    : "hover:text-yellow-300"
                }`}
              >
                <motion.div variants={linkVariants}>
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-yellow-300"
                    variants={underlineVariants}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </ul>

        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="w-6 h-6 relative"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.div>
        </button>

        <motion.div
          className="fixed md:hidden top-0 right-0 bottom-0 left-0 w-full min-h-screen bg-black bg-opacity-90"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          style={{ height: "100vh" }}
        >
          <motion.ul className="h-full flex flex-col items-center justify-center space-y-8">
            {["Home", "Projects", "About"].map((item) => (
              <motion.li
                key={item}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`text-white text-2xl font-semibold relative ${
                    location.pathname ===
                    (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                      ? "text-yellow-300"
                      : "hover:text-yellow-300"
                  }`}
                  onClick={handleLinkClick}
                >
                  <motion.div variants={linkVariants}>
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-yellow-300"
                      variants={underlineVariants}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
