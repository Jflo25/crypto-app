"use client";

import React from "react";
import { useTheme } from "next-themes";
import SunIcon from "@/public/SunIcon.svg";
import MoonIcon from "@/public/MoonIcon.svg";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleThemeChange}
      className="w-[45px] h-[45px] bg-black rounded-xl text-white flex items-center justify-center cursor-pointer"
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
