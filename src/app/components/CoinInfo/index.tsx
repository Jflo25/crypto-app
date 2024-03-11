import React from "react";
import { Coin } from "../CoinType"; // Make sure this path is correct
const index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="Coin-Name text-2xl font-semibold mb-6 text-center">
        {coin.name}
      </h2>

      <div className="rows-container flex flex-col mx-auto w-full">
        <div className="Coin-info bg-[#1d1f47] rounded-xl flex items-center w-full py-5 justify-center flex-col md:flex-row">
          <div className="relative ">
            <div className="coin-ranking absolute bottom-10 h-7 w-16 flex justify-center items-center transform -translate-x-2/3 md:-top-0 md:left-auto bg-purple-500 text-white px-3 py-2 rounded-md shadow-lg">
              <p className="whitespace-nowrap">Rank #{coin.market_cap_rank}</p>
            </div>
            <span className="Coin-heading">
              {coin.image ? (
                <img className="h-[50px]" src={coin.image.small} alt="" />
              ) : null}
            </span>
          </div>

          <div className="coin-symbol-and-price text-center mt-2 md:mt-0 md:ml-4 flex flex-col">
            {coin.symbol ? (
              <p className="mb-0">({coin.symbol.toUpperCase()}/USD)</p>
            ) : null}
            <div className="coin-price text-lg">
              {coin.market_data?.current_price ? (
                <h1 className="mb-0">
                  ${coin.market_data.current_price.usd.toLocaleString()}
                </h1>
              ) : null}
            </div>
          </div>
          <div className="graph w-72 mt-5 text-xs">
            <p className="text-right">7day</p>
            {/* <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines> */}
          </div>
        </div>

        <div className="price-change flex flex-col my-5 bg-[#1d1f47] rounded-xl">
          <div className="text-center py-5">
            <h3 className="text-lg text-cyan-200">Market Status</h3>
          </div>

          <div className="price-change-row flex justify-around mb-2">
            <div>
              <p>
                24h:
                {coin.market_data?.price_change_percentage_24h &&
                  coin.market_data.price_change_percentage_24h.toFixed(2)}
                %
              </p>
            </div>
            <div>
              <p>
                7d:
                {coin.market_data?.price_change_percentage_7d &&
                  coin.market_data.price_change_percentage_7d.toFixed(2)}
                %
              </p>
            </div>
          </div>
          <div className="price-change-row flex justify-around">
            <div>
              <p>
                30d:
                {coin.market_data?.price_change_percentage_30d &&
                  coin.market_data.price_change_percentage_30d.toFixed(2)}
                %
              </p>
            </div>
            <div>
              <p>
                1y:
                {coin.market_data?.price_change_percentage_1y &&
                  coin.market_data.price_change_percentage_1y.toFixed(2)}
                %
              </p>
            </div>
          </div>

          <div className="bottom-info py-5 flex-col">
            <div className="flex justify-around mb-5">
              <div className="row text-center">
                <h3>Market Cap</h3>
                {coin.market_data &&
                coin.market_data.market_cap &&
                coin.market_data.market_cap.usd ? (
                  <p>${coin.market_data.market_cap.usd.toLocaleString()} </p>
                ) : null}
              </div>

              <div className="row text-center">
                <h3>Max Supply</h3>
                {coin.market_data && coin.market_data.max_supply ? (
                  <p>{coin.market_data.max_supply.toLocaleString()}</p>
                ) : null}
              </div>
            </div>

            {/* <div className="flex justify-around">
              <div className="row text-center">
                <h3>Circulating Supply</h3>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply.toLocaleString()}</p>
                ) : null}
              </div>

              <div className="row text-center">
                <h3>Total Volume</h3>
                {coin.market_data ? (
                  <p>{coin.market_data.total_volume.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="body w-full bg-[#1d1f47] rounded-xl my-5">
        <div className="description p-6">
          <h3 className="text-center mb-4 text-cyan-200 text-lg">
            Information:
          </h3>
          {/* Place the CoinDescription component or equivalent JSX here */}
        </div>
      </div>
    </div>
  );
};

export default index;
