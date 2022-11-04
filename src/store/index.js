import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  visible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.visible = !state.visible;
    },
    addItem: (state, { payload }) => {
      const item = state.items[payload.id];
      if (item === undefined) {
        state.items[payload.id] = { ...payload, quantity: 1 };
      } else {
        state.items[payload.id].quantity++;
      }
    },
    removeItem: (state, { payload }) => {
      if (state.items[payload] === undefined) return;
      if (state.items[payload].quantity === 1) {
        delete state.items[payload];
      } else {
        state.items[payload].quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default configureStore({ reducer: cartSlice.reducer });
