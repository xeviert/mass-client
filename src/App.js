import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Admin from "./Components/Admin";

import "./App.css";

export function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <PrivateRoute path='/admin' component={Admin} />
        <Route path='/about' component={About} />
        <Route path='/resources' component={Resources} />
        <PrivateRoute path='/' exact component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
