import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import darkModeSlice from "./darkMode";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    darkMode: darkModeSlice.reducer,
  },
});

export default counterStore;
