import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: false,
  reducers: {
    toggleDarkMode: (currentState) => {
      return !currentState;
    },
  },
});

export default darkModeSlice;
export const darkModeToggle = darkModeSlice.actions;
