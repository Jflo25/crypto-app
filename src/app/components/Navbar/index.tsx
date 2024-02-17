"use client";
import React from "react";
import LogoIcon from "@/public/LogoIcon.svg"; // Ensure SVG can be used as a component
import PortfolioToggle from "../PortfolioToggle/Index";
import SearchBar from "../SearchBar/Index";
import ThemeToggle from "../Theme/index";
import UsdIcon from "@/public/UsdIcon.svg";
import DropDownArrow from "@/public/DropDownArrow.svg";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between p-3 mt-2 px-10">
      {/* Left side: Logo and PortfolioToggle */}
      <div className="flex items-center gap-2">
        {/* unable to change logoicon color without changing entire bg. it remains white */}
        <LogoIcon className="h-6w-full" />
        <h1 className="text-white">Logoipsm</h1>
        <p className="text-gray-600">|</p>
        <PortfolioToggle />
      </div>

      {/* Right side: SearchBar and Currency Dropdown (Placeholder for now) */}
      <div className="flex items-center gap-2 mr-10">
        <SearchBar />
        <div className="flex items-center bg-search-bg p-2 rounded outline-none text-white text-xs">
          <UsdIcon className="h-5 w-5" />
          <p className="ml-2">
            USD
            {/* will implement dropdown with currencies later on */}
          </p>
          <DropDownArrow className="ml-2 h-5 w-5" />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
