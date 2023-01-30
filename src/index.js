import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import provider from "./provider/Provider";
import actions from "./constants/actions";
//import reportWebVitals from "./reportWebVitals";

// 1ÈRE ÉTAPE
// Redux mise en place dans notre application
// importer provider et create store

// récupérer le store, le state avec son reducer, il nous permettra de contextualiser

ReactDOM.render(
  <React.StrictMode>
    <provider>
      <App />
    </provider>
  </React.StrictMode>,
  document.getElementById("root")
);
