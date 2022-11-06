import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import uiReducer from "./ui-slice";

export default configureStore({ reducer: { ui: uiReducer, cart: cartReducer } });
