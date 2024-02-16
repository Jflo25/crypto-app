"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Index";
import { ThemeProvider } from "next-themes";
export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}
