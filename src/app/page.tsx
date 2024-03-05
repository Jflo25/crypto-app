"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Index";
import CoinTable from "./components/CoinTable";
import { ThemeProvider } from "next-themes";
export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <CoinTable />
      </div>
    </ThemeProvider>
  );
}
