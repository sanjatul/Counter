import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counterSlice";

const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer,
}});

export default counterStore;