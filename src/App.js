import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import LandingPage from "./Components/LandingPage";
import getLPTheme from './getLPTheme';

import "./App.css";

export function App() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Routes>
        <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
