import { createStore } from "redux";

const INITIAL_VALUE = { counter: 0, darkMode: true };

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

const counterStore = createStore(counterReducer);

export default counterStore;
