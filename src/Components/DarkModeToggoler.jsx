import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggler = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Apply theme to <html> on mount and when theme changes
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 transition-all hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
};

export default DarkModeToggler;
