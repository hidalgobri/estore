import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import GlobalStyles from "./components/styles/GlobalSyles.styled";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <GlobalStyles />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
