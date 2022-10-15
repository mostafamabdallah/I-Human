import { createSlice } from "@reduxjs/toolkit";
import logo from "../img/logo-white.png";


const navSlice = createSlice({
  name: "nav",
  initialState:{
    style: {
      color: "white",
      logo: logo,
    },
  },
  reducers: {
    changeStyle: (state, action) => {
      state.style = action.payload;
    },
  },
});

export const { changeStyle } = navSlice.actions;
export default navSlice.reducer;
