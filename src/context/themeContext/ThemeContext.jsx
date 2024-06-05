import React from "react";
import { createContext, useState } from "react";

const ContextTheme = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const mudarTheme = () => {
    setTheme(theme === "light" ? "black" : "light");
  };
  return (
    <ContextTheme.Provider value={{ theme, mudarTheme }}>
      {children}
    </ContextTheme.Provider>
  );
};

export { ThemeContext, ContextTheme };
