import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {};

export const testSlice = createSlice({
  name: "test",
  initialState: { value: initialStateValue },
  reducers: {
    testAction: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {testAction} = testSlice.actions

export default testSlice.reducer;