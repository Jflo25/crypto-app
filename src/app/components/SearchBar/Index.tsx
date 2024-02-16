import React, { useState } from "react";
import SearchIcon from "@/public/SearchIcon.svg"; // Adjust the import path as necessary

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // Placeholder for future crypto data fetching and filtering
  // const [cryptos, setCryptos] = useState([]);
  // const [filteredCryptos, setFilteredCryptos] = useState([]);

  return (
    <div className="relative flex w-[200px] items-center justify-right">
      <SearchIcon className="absolute left-2" />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-search-bg p-2 rounded outline-none placeholder-white text-xs pl-7 text-white font-light"
      />
    </div>
  );
};

export default SearchBar;
