import { createSlice } from "@reduxjs/toolkit";

const getLang = createSlice({
  name: "config",
  initialState:{
  lang : "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang =  action.payload;
    },
  },
});

export default getLang.reducer;
export const { changeLanguage } = getLang.actions;
