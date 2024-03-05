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

export interface Coin {
  name?: string;
  symbol?: string;
  image?: { small: string };
  market_data?: CoinMarketData;
  market_cap_rank?: number;
}
