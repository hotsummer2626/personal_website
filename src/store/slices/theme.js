import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLight: true,
};

export const themeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.isLight = !state.isLight;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
