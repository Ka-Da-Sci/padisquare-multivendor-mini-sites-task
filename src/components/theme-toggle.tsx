"use client";

import getCookie from "@/utils/getCookie";
import { useEffect, useState } from "react";

const ThemeToggle = ({ initialTheme }: { initialTheme: string }) => {
  // Initialize theme once
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window === "undefined") return initialTheme;

    const html = document.documentElement;
    return getCookie("theme") || html.getAttribute("data-theme") || "system";
  });

  // Apply theme to DOM
  useEffect(() => {
    const html = document.documentElement;

    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    html.classList.toggle("dark", isDark);
    html.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [theme]);

  // Sync system theme changes
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const prefersDark = mediaQuery.matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
      document.cookie = `theme=${
        prefersDark ? "dark" : "light"
      }; path=/; max-age=${60 * 60 * 24 * 3650}`;
    };

    handleChange(); // initial sync
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme =
      theme === "dark" ? "light" : theme === "light" ? "system" : "dark";

    setTheme(newTheme);

    document.cookie = `theme=${newTheme}; path=/; max-age=${
      60 * 60 * 24 * 3650
    }`;
  };

  return (
    <div className="group hover:bg-background z-50 flex flex-col items-center w-20 p-4 fixed bottom-3 right-3">
      <p className="hidden group-hover:flex mb-2 text-foreground font-medium capitalize">
        {theme}
      </p>

      <button
        onClick={toggleTheme}
        className="bg-foreground p-2 rounded-full hover:scale-110 transition-all duration-500"
      >
        {/* SVG unchanged */}
      </button>
    </div>
  );
};

export default ThemeToggle;
