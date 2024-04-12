import { createSlice } from "@reduxjs/toolkit";

const multislice = createSlice({
  name: "multilang",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = multislice.actions;

export default multislice.reducer;
