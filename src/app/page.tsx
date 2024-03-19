"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../../store/coinSlice"; // Adjust based on actual file location
import Navbar from "./components/Navbar/Index"; // Note: Adjust if the actual import path differs
import Home from "../app/pages/index"; // Note: Adjust if the actual import path differs
import { ThemeProvider } from "next-themes";
import { RootState, AppDispatch } from "../../store/store";

const page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default page;
