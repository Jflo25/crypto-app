// pages/index.tsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../../../store/coinSlice"; // Adjust this path
import CoinTable from "../components/CoinTable"; // Adjust this path
import { RootState } from "../../../store/store"; // Adjust this path

const Home = () => {
  const dispatch = useDispatch();
  const { items: coins, status } = useSelector(
    (state: RootState) => state.coins
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCoins.pending()); // Dispatch pending action without arguments
    }
  }, [status, dispatch]);

  return (
    <div>
      <CoinTable coins={coins} />
    </div>
  );
};

export default Home;
