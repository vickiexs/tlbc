import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Home from "./pages/home";
import ArcticMemories from "./pages/arctic-memories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/arctic-memories",
    element: <ArcticMemories />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </main>
  </React.StrictMode>
);
