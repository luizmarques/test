import { createSlice } from "@reduxjs/toolkit";
import { getStorageItem } from "../../config/storage";

const user = JSON.parse(getStorageItem("user"));

const initialState = {
  userLoggedIn: !!user,
  user: user ? user : {},
};

export const slice = createSlice({ 
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userLoggedIn = true;
      state.user = action.payload;
    },
  },
});

export const { updateUser } = slice.actions;
export default slice.reducer;
