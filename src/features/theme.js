import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {color:"black"};

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
    resetTheme: (state) => {
        state.value = initialStateValue;
      },
  },
});

export const {changeTheme,resetTheme} = themeSlice.actions

export default themeSlice.reducer;