import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Strict mode is for savety and debugging purposses, but causes the app to kinda run twice
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
