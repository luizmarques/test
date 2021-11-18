import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentEstimate: null,
  success: {},
};

export const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCurrentEstimate: (state, action) => {
      state.currentEstimate = action.payload;
    },
    clearEstimate: (state) => {
      state.currentEstimate = null;
    },
  },
});

export const { setCurrentEstimate, clearEstimate } = slice.actions;
export default slice.reducer;

// export const selectCurrentEstimate = state => state.estimate.currentEstimate
