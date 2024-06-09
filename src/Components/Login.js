import * as React from 'react';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import PhoneNumberInput from './PhoneNumberInput';
import AuthApiService from "../Service/auth-api-service";
import { AppContext } from "../AppContext";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://xevier.dev/">
        Xevier
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = ({ onLoginSuccess = () => { } }) => {
  const [error, setError] = useState(null);
  const [phone_number, setPhoneNumber] = useState("");
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = (ev) => {
    ev.preventDefault();
    setError(null);
    debugger
    const { phone_number, password } = ev.target;
    debugger
    const user = { phone_number: phone_number.value, password: password.value };

    AuthApiService.postLogin(user)
      .then((res) => {
        phone_number.value = "";
        password.value = "";
        context.processLogin(res.authToken);
        pushUserDependingOnRole();
      })
      .catch((res) => setError(res.error));
  };

  const pushUserDependingOnRole = () => {
    const { user } = context;

    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        mt: 12,
        mb: 8,
      }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1, width: 1 }}>
          <PhoneNumberInput
            value={phone_number}
            onChange={setPhoneNumber}
            placeholder=' enter phone #'
            name='phone_number'
            required />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to='/register' variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default Login;