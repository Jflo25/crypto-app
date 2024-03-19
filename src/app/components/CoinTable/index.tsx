import React, { useState, useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import CoinMarketBar from "../CoinBar"; // Adjust the import path as needed
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store"; // Adjust the path as needed
import { fetchCoins } from "../../../../store/coinSlice"; // Adjust the path as needed
import { Coin } from "../CoinType"; // Adjust path as needed
interface CoinTableProps {
  coins: Coin[];
}

const CoinTable = ({ coins }: CoinTableProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-div my-4 mx-auto">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>

      <div className="Crypto-Table w-full text-center">
        <div className="bg-black w-full text-sm font-light rounded-2xl pl-5 flex gap-3 mb-2">
          <span className="px-1">#</span>
          <span className="px-1 mr-20">Name</span>
          <span className="w-[6%] px-1">Price</span>
          <span className="w-[6%] px-1">1h%</span>
          <span className="w-[6%] px-1">24h%</span>
          <span className="w-[6%] px-1">7d%</span>
          <span className="w-full max-w-[20%] px-1">
            24h volume / Market Cap
          </span>
          <span className="w-full max-w-[20%] px-1">
            Circulating / Total Supply
          </span>
          <span>Last 7d</span>
        </div>

        {filteredCoins.map((coin: Coin) => (
          <div
            key={coin.id}
            className="bg-gradient-to-r from-black to-gray-900 w-full text-sm font-light rounded-3xl p-5 mb-2 flex gap-3 items-center"
          >
            <span>{coin.market_cap_rank}</span>
            {/* Ensure you have the Image component imported from 'next/image' if using Next.js */}
            <img src={coin.image} alt={coin.name} className="w-7 h-7" />{" "}
            {/* Adjust this if using Next.js Image component */}
            <span className="w-[14%] px-1">
              {coin.name.charAt(0).toUpperCase() +
                coin.name.slice(1).toLowerCase()}{" "}
              ({coin.symbol.toUpperCase()})
            </span>
            <span className="w-[6%] px-1">
              {coin.current_price.toLocaleString()}
            </span>
            {/* Replace PriceChange with actual component/logic to display price change */}
            <span className="w-[6%] px-1">
              {coin.total_volume.toLocaleString()}
            </span>
            <span className="w-[6%] px-1">
              {coin.price_change_percentage_24h}
            </span>
            <span className="w-[6%] px-1">
              {coin.price_change_percentage_7d}
            </span>
            <span className="w-full max-w-[20%] px-1">
              <div className="flex justify-between text-xs">
                <span
                  className={
                    coin.price_change_percentage_24h > 0
                      ? "text-[#00B1A7]"
                      : "text-[#FE2264]"
                  }
                >
                  {coin.total_volume.toLocaleString()}
                </span>
                <span
                  className={
                    coin.price_change_percentage_24h > 0
                      ? "text-[#00B1A7]"
                      : "text-[#FE2264]"
                  }
                >
                  {coin.market_cap.toLocaleString()}
                </span>
              </div>
              {/* Placeholder for CoinMarketBar */}
            </span>
            <span className="w-full max-w-[20%] px-1">
              <div className="flex justify-between text-xs">
                <CoinMarketBar
                  fill={
                    coin.price_change_percentage_24h > 0 ? "#00B1A7" : "#FE2264"
                  }
                  percentage={(coin.total_volume / coin.market_cap) * 100} // This is an example calculation
                />
              </div>
              {/* Placeholder for CoinMarketBar */}
            </span>
            <span className="w-[14%] pl-3 h-[50px]">
              {/* Placeholder for PriceCoinGraph */}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinTable;
