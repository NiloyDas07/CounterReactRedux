import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (currentState) => {
      currentState.counterVal++;
    },
    decrement: (currentState) => {
      currentState.counterVal--;
    },
    add: (currentState, action) => {
      currentState.counterVal += action.payload;
    },
    subtract: (currentState, action) => {
      currentState.counterVal -= action.payload;
    },
  },
});

export default counterSlice;
export const counterActions = counterSlice.actions;
