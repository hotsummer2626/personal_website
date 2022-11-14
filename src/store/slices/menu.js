import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow:false,
};

export const menuSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    switchMenu: (state, action) => {
      state.isShow = !state.isShow;
    },
  },
});

export const { switchMenu } = menuSlice.actions;

export default menuSlice.reducer;
