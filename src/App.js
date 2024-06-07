import React from "react";
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
import Container from "./Components/Container";

import "./App.css";

export function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
