import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import { composeWithDevTools } from "@redux-devtools/extension";
import { logger } from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: [logger]
});

// state = {
//   counter : {
//     count : 1
//   },
//   users: {
//     name: "",
//     age:""
//   }
// }
