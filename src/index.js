import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reducer from "./reducers/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux"; // permet de contextualiser le store Redux dans React

// création du store => prêt pour l'App
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
