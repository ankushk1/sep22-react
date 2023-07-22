import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= 1;
    }
  }
});

// const increment = counterSlice.actions.increment
export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state) => state.counter.count;

export default counterSlice.reducer;
