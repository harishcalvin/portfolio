import React, { createContext, useState, useContext } from "react";

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorContent, setCursorContent] = useState({
    text: "",
    emoji: "",
    bgColor: "",
    textColor: "",
  });

  const handleHover = (text, emoji, bgColor, textColor) => {
    setCursorContent({ text, emoji, bgColor, textColor });
  };

  const handleMouseLeave = () => {
    setCursorContent({ text: "", emoji: "", bgColor: "", textColor: "" });
  };

  return (
    <CursorContext.Provider
      value={{ cursorContent, handleHover, handleMouseLeave }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
