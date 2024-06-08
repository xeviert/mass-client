import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import TokenService from "../Service/token-service";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default class NavBar extends Component {
  static contextType = AppContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  userIsLoggedOut() {
    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button component={Link} to='/resources' color="inherit">
          Resources
        </Button>
        <Button component={Link} to='/about' color="inherit">
          About
        </Button>
        <Button component={Link} to='/register' color="inherit">
          Register
        </Button>
        <Button component={Link} to='/login' color="inherit">
          Login
        </Button>
      </Box>
    );
  }

  findUserRole() {
    const { user } = this.context;
    if (user.role === "admin") {
      return (
        <Button component={Link} to='/admin' color="inherit">
          Admin
        </Button>
      );
    } else {
      return (
        <Button component={Link} to='/' color="inherit">
          Home
        </Button>
      );
    }
  }

  userIsLoggedIn() {
    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        {this.findUserRole()}
        <Button component={Link} to='/resources' color="inherit">
          Resources
        </Button>
        <Button component={Link} to='/about' color="inherit">
          About
        </Button>
        <Button component={Link} onClick={this.handleLogoutClick} to='/login' color="inherit">
          Logout
        </Button>
      </Box>
    );
  }

  render() {
    return (
      <AppBar position="static" color="default" elevation={3}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px 10px 40px' }}>
          <Box>
            <Typography variant="h4" component="div" sx={{ color: '#12806b', fontSize: '36px' }}>
              MASS
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ paddingLeft: '10px' }}>
              Mutual Aid & Shared Support
            </Typography>
          </Box>
          <Box>
            {TokenService.hasAuthToken() ? this.userIsLoggedIn() : this.userIsLoggedOut()}
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}
