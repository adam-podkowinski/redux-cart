import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    visible: false,
  },
  reducers: {
    toggleCart: (state) => { state.visible = !state.visible; }
  }
});

export const cartActions = cartSlice.actions;
export default configureStore({ reducer: cartSlice.reducer });
