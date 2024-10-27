import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, title, price, image } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity, title, price, image });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      const { productId, quantity } = action.payload;
      const toBeDeleted = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (state.items[toBeDeleted].quantity > 1) {
        state.items[toBeDeleted].quantity -= quantity;
      } else if (state.items[toBeDeleted].quantity === 1) {
        state.items.splice(toBeDeleted, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
