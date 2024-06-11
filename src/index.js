import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';

import "./index.css";

import { AppProvider } from "./AppContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <SnackbarProvider maxSnack={3}>
      <Router>
        <AppProvider>
          <App />
        </AppProvider>
      </Router>
    </SnackbarProvider>
  </React.StrictMode>,
);

reportWebVitals();