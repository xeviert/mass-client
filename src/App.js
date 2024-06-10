import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import PrivateRoute from "./Components/PrivateRoute";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import LandingPage from "./Components/LandingPage";
import getLPTheme from './getLPTheme';

import "./App.css";

export function App() {
  const LPtheme = createTheme(getLPTheme());
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <ThemeProvider theme={LPtheme}>
      {!isAdminRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<PrivateRoute element={Home} />} />
        <Route path="/admin" element={<PrivateRoute element={Admin} adminOnly />} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
