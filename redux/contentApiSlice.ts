import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Content } from "../types/interfaces";

const initialState: { data: Content[]; requestStatus: string } = {
  data: [],
  requestStatus: "null",
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Content[]>) => {
      state.data = action.payload;
      state.requestStatus = "success";
    },
  },
});

export const { setData } = contentSlice.actions;
export default contentSlice.reducer;
