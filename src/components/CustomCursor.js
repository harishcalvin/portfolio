import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { cursorContent } = useCursor();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor hidden sm:block"
      style={{
        position: "fixed",
        left: mousePosition.x - 20,
        top: mousePosition.y - 20,
        width: cursorContent.text ? "auto" : 40,
        height: cursorContent.text ? "auto" : 40,
        minWidth: 40,
        minHeight: 40,
        borderRadius: 20,
        backgroundColor: cursorContent.bgColor || "rgba(255, 255, 255, 0.3)",
        color: cursorContent.textColor || "white",
        pointerEvents: "none",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 12px",
        fontSize: cursorContent.text ? "14px" : "10px",
        fontWeight: "bold",
        whiteSpace: "nowrap",
      }}
      initial={false}
      animate={{
        scale: cursorContent.text ? 1 : 0.5,
        opacity: cursorContent.text ? 1 : 0.7,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      {cursorContent.emoji && (
        <span className="mr-2">{cursorContent.emoji}</span>
      )}
      {cursorContent.text}
    </motion.div>
  );
};

export default CustomCursor;
