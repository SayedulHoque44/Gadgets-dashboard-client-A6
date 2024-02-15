import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TCartItem = {
  name: string;
  price: number;
  id: string;
  quantity: number;
  stock: number;
  imageUrl: string;
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
      const otherCart = state.CartItems.filter(
        (cart) => cart.id !== newCart.id
      );
      state.CartItems = [...otherCart, newCart];
    },
    deleteFromCart: (state, action) => {
      const newCart = action.payload;
      const otherCart = state.CartItems.filter(
        (cart) => cart.id !== newCart.id
      );
      state.CartItems = [...otherCart];
    },
  },
});

//
export const { addToCart, deleteFromCart } = cartSlice.actions;

//
export default cartSlice.reducer;

//
export const useShowCart = (state: RootState) => state.Cart.CartItems;
