import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import { AppProvider } from "./AppContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <AppProvider>
          <App />
        </AppProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();