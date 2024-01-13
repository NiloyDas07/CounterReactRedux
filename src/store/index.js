import { createStore } from "redux";

const INITIAL_VALUE = { counter: 0 };

const counterReducer = (store = INITIAL_VALUE, action) => {
  const newStore = { ...store };

  if (action.type === "INCREMENT") {
    newStore.counter++;
  } else if (action.type === "DECREMENT") {
    newStore.counter--;
  }

  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
