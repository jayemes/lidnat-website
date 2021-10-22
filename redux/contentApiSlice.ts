import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Content } from "../types/interfaces";
import Papa from "papaparse";

export const fetchParsedData = createAsyncThunk(
  "content/fetchParsedData",
  async () => {
    const res = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnvnjZ4R5L5EYGAGVUTmkLJm9Re2RKpIoEHqqMBogNhKR2t0TKgiLU3-pafR1L0nTK78hk1s1baybJ/pub?gid=0&single=true&output=csv"
    );
    const text = await res.text();
    return Papa.parse(text, { header: true }).data as Content[];
  }
);

const initialState: { data: Content[]; requestStatus: string } = {
  data: [{ id: "", label: "", content: "" }],
  requestStatus: "null",
};

export const content = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchParsedData.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(fetchParsedData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.requestStatus = "success";
    });
    builder.addCase(fetchParsedData.rejected, (state) => {
      state.requestStatus = "failed";
    });
  },
});

export default content.reducer;
