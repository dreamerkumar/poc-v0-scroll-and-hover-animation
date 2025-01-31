"use client";

import { useState } from "react";
import AppIcons from "@/components/app-icons";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-800 transition-colors duration-200 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <AppIcons />
      <Button
        onClick={toggleDarkMode}
        className="mt-8 bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors duration-200"
        variant="outline"
      >
        {isDarkMode ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
        <span className="ml-2">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </Button>
    </main>
  );
}
