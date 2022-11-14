import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import menuReducer from "./slices/menu";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
  },
});

export default store;
