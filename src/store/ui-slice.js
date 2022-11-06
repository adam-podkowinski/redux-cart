import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartVisible: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle: (state) => {
      state.cartVisible = !state.cartVisible;
    },
    showNotification: (state, { payload }) => {
      state.notification = payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
