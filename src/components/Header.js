// src/components/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();

  const linkVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -5 },
    tap: { scale: 0.95, y: 0 },
  };

  const underlineVariants = {
    rest: { width: 0 },
    hover: { width: "100%" },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 p-4"
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
        <ul className="flex space-x-8">
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
      </nav>
    </motion.header>
  );
};

export default Header;
