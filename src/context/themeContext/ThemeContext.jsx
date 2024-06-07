import { createContext, useState, useEffect } from "react";

const ContextTheme = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState();

  const mudarTheme = () => {
    setTheme(theme === "light" ? "black" : "light");
    window.localStorage.setItem("theme", theme === "light" ? "black" : "light");
  };
  useEffect(() => {
    window.localStorage.getItem("theme")
      ? setTheme(window.localStorage.getItem("theme"))
      : setTheme("light");
  }, []);
  return (
    <ContextTheme.Provider value={{ theme, mudarTheme }}>
      {children}
    </ContextTheme.Provider>
  );
};

export { ThemeContext, ContextTheme };
