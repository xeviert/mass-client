import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from '@mui/material/CssBaseline';
import "./index.css";

import { AppProvider } from "./AppContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();