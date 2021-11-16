import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import orderReducer from "./slice/orderSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
  },
});
