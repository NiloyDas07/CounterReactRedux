import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const counterReducer = (store = INITIAL_VALUE, action) => {
  const newStore = { ...store };

  if (action.type === "INCREMENT") {
    newStore.counter++;
  } else if (action.type === "DECREMENT") {
    newStore.counter--;
  } else if (action.type === "ADD") {
    newStore.counter += action.payload.num;
  } else if (action.type === "SUBTRACT") {
    newStore.counter -= action.payload.num;
  } else if (action.type === "DARK_MODE_TOGGLE") {
    newStore.darkMode = !newStore.darkMode;
  }

  return newStore;
};

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export default counterStore;
