import React from "react";
import { createRoot } from "react-dom/client"; // Notice the new import path
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
