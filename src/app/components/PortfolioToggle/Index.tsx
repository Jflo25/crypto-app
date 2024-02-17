import React, { useState } from "react";

const PortfolioToggle = () => {
  const [isHome, setIsHome] = useState(true);

  const handleToggle = () => {
    // Toggle the state between Home and Portfolio
    setIsHome(!isHome);
  };

  return (
    <div className="w-[180px] items-center backdrop-filter bg-black bg-opacity-40 backdrop-blur rounded-xl text-white text-xs font-light flex justify-center">
      <button
        className={`${
          isHome ? "bg-gradient-to-r from-violet-600 to-indigo-600" : ""
        } p-2 rounded-xl w-[100px]`}
        onClick={handleToggle}
      >
        Home
      </button>
      <button
        className={`${
          !isHome ? "bg-gradient-to-r from-cyan-400 to-blue-500" : ""
        } p-2 rounded-xl w-[100px]`}
        onClick={handleToggle}
      >
        Portfolio
      </button>
    </div>
  );
};

export default PortfolioToggle;
