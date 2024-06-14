import * as React from 'react';
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import PhoneNumberInput from './PhoneNumberInput';
import AuthApiService from "../Service/auth-api-service";
import { AppContext } from "../AppContext";

const Login = () => {
  const [error, setError] = useState(null);
  const [phone_number, setPhoneNumber] = useState("");
  const context = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (context.user.role) {
      pushUserDependingOnRole();
    }
  }, [context.user]);

  const handleLogin = (ev) => {
    ev.preventDefault();
    setError(null);

    const password = ev.target.password.value;
    const user = { phone_number: phone_number, password: password };
    AuthApiService.postLogin(user)
      .then((res) => {
        setPhoneNumber("");
        ev.target.password.value = "";
        context.processLogin(res.authToken);
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
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(images/login.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'grey.50',
          backgroundSize: '80%',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 2,
            borderRadius: 2,
            width: '30%'
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            DEMO CREDENTIALS:
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1"><strong>Role:</strong> Admin</Typography>
            <Typography variant="body1"><strong>Phone Number:</strong> (713) 584-1234</Typography>
            <Typography variant="body1"><strong>Password:</strong> pass</Typography>
          </Box>
          <Box>
            <Typography variant="body1"><strong>Role:</strong> User</Typography>
            <Typography variant="body1"><strong>Phone Number:</strong> (512) 555-1234</Typography>
            <Typography variant="body1"><strong>Password:</strong> pass</Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ bgcolor: 'white' }}>
        <Box
          sx={{
            my: 8,
            mx: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 20
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
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
      </Grid>
    </Grid>
  );
}

export default Login;