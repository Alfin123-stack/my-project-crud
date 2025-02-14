import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { mode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => toggleDarkMode(mode === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white cursor-pointer">
      {mode === "dark" ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-gray-800" />
      )}
    </button>
  );
};

export default DarkModeToggle;
