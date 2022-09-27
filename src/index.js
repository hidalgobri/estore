import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./components/styles/GlobalSyles.styled";
import App from "./App";
import store from "./store";

// const unsubscribe = store.subscribe(() =>
//   console.log("State after dispatch: ", store.getState())
// );
// unsubscribe();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
