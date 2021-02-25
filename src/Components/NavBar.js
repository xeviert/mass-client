import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import TokenService from "../Service/token-service";

import "./Styling/NavBar.css";

export default class NavBar extends Component {
  static contextType = AppContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  userIsLoggedOut() {
    return (
      <div id='nav-links'>
        <Link className='link' to='/resources'>
          Resources
        </Link>
        <Link className='link' to='/about'>
          About
        </Link>
        <Link className='link' to='/register'>
          Register
        </Link>
        <Link className='link' to='/login'>
          Login
        </Link>
      </div>
    );
  }

  findUserRole() {
    const { user } = this.context;
    if (user.role == "admin") {
      return (
        <Link className='link' to='/admin'>
          Admin
        </Link>
      );
    } else {
      return (
        <Link className='link' to='/'>
          Home
        </Link>
      );
    }
  }

  userIsLoggedIn() {
    return (
      <div id='nav-links'>
        {this.findUserRole()}
        <Link className='link' to='/resources'>
          Resources
        </Link>
        <Link className='link' to='/about'>
          About
        </Link>
        <Link className='link' onClick={this.handleLogoutClick} to='/login'>
          Logout
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav id='nav-bar'>
        <div id='container-inside-nav'>
          <h1>App Name</h1>
          {TokenService.hasAuthToken()
            ? this.userIsLoggedIn()
            : this.userIsLoggedOut()}
        </div>
      </nav>
    );
  }
}
