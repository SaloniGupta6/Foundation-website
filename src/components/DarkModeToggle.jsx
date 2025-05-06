import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-gray-700 dark:text-white shadow-lg hover:scale-110 transition"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
};

export default DarkModeToggle;