import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contentApiSlice";
import modalReducer from "./modalSlice";
export const store = configureStore({
  reducer: {
    content: contentReducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
