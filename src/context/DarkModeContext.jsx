/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const storedDarkMode = localStorage.getItem("darkMode");
  const initialDarkMode = storedDarkMode
    ? JSON.parse(storedDarkMode)
    : "system";

  const [mode, setMode] = useState(initialDarkMode);

  useEffect(() => {
    const setTheme = () => {
      if (mode === "dark") {
        document.body.classList.add("dark");
        document.title = "Dark Mode";
      } else if (mode === "light") {
        document.body.classList.remove("dark");
        document.title = "Light Mode";
      } else if (mode === "system") {
        const isDarkMode =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isDarkMode) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
        document.title = isDarkMode ? "Dark Mode" : "Light Mode";
      }
    };

    setTheme();
    localStorage.setItem("darkMode", JSON.stringify(mode));
  }, [mode]);

  const toggleDarkMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <DarkModeContext.Provider value={{ mode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
