import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  service: boolean;
}

const initialState = { service: false } as ModalState;

const modal = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => !state.service,
  },
});

export const { toggle } = modal.actions;
export default modal.reducer;
