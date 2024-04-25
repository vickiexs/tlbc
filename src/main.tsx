import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./utils/scrollToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/tlbc">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
