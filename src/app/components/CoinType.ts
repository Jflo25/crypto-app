export interface CoinMarketData {
  current_price?: { usd: number };

  sparkline_7d?: { price: number[] };
  price_change_percentage_24h?: number;
  price_change_percentage_7d?: number;
  price_change_percentage_30d?: number;
  price_change_percentage_1y?: number;
  market_cap?: { usd: number };
  max_supply?: number;
  circulating_supply?: number;
  total_volume?: { usd: number };
}

// export interface Coin {
//   name?: string;
//   symbol?: string;
//   image?: { small: string };
//   market_data?: CoinMarketData;
//   market_cap_rank?: number;
// }
export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string; // Assuming this is a direct URL to the image
  total_supply?: { usd: number };
  market_cap_rank: number;
  current_price: number; // Assuming this is a direct number type
  price_change_percentage_24h: number; // Direct number for percentage change
  total_volume: number; // Direct number for 24h volume
  market_cap: number; // Direct number for market cap
  sparkline_in_7d: { price: number[] }; // Assuming an object containing an array of prices
  price_change_percentage_7d?: number;
  price_change_percentage_30d?: number;
  price_change_percentage_1y?: number;
  circulating_supply?: number;
}
