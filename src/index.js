import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainRouter from "./Router/MainRouter";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <App />
  <Provider store={store}>
    <MainRouter />
  </Provider>
  // </React.StrictMode>
);
