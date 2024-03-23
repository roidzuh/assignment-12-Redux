import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/removeItem":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "cart/increaseQuantity":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    case "cart/decreaseQuantity":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount - 1 }
            : item
        ),
      };
    case "cart/updateTotal":
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      return {
        ...state,
        amount: amount,
        total: total.toFixed(2),
      };
    case "cart/clearCart":
      return {
        ...state,
        cartItems: [],
        amount: 0,
        total: 0,
      };
    default:
      return state;
  }
};

export const removeItem = (item) => ({
  type: "cart/removeItem",
  payload: item,
});

export const increaseQuantity = (item) => ({
  type: "cart/increaseQuantity",
  payload: item,
});

export const decreaseQuantity = (item) => ({
  type: "cart/decreaseQuantity",
  payload: item,
});

export const updateTotal = () => ({
  type: "cart/updateTotal",
});

export const clearCart = () => ({
  type: "cart/clearCart",
});

export default cartReducer;
