import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/normalize.css";
import "./index.scss";
import "virtual:uno.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("swapApp")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
