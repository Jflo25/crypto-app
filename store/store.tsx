// store/store.ts or wherever your store is defined
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Make sure your root reducer is set up correctly

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables check for non-serializable values in actions and state
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
