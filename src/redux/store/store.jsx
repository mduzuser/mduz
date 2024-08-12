import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../slice/modalSlice";

const store = configureStore({
  reducer: {
     modal: modalSlice
  },
})

export default store;