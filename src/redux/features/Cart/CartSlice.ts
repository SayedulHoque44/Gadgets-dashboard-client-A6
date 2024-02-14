import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TCartItem = {
  id: string;
  quantity: number;
};

type TinitialState = {
  CartItems: TCartItem[];
};

const initialState: TinitialState = {
  CartItems: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newCart = action.payload;

      state.CartItems = [...state.CartItems, newCart];
    },
  },
});

//
export const { addToCart } = cartSlice.actions;

//
export default cartSlice.reducer;

//
export const useShowCart = (state: RootState) => state.Cart.CartItems;
