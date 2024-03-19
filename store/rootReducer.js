// store/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import coinSlice from "./coinSlice";
// import other slices

const rootReducer = combineReducers({
  coins: coinSlice.reducer,
  // other reducers
});

export default rootReducer;
