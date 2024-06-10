import * as React from 'react';
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import PhoneNumberInput from './PhoneNumberInput';
import AuthApiService from "../Service/auth-api-service";
import { AppContext } from "../AppContext";

// consolidate Copyright and turn this page to the two sided page with an image on the left (template in MUI)

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
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        mt: 4,
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
        <Box sx={{ p: 1, border: '1px solid', borderColor: 'grey.300', borderRadius: 1, mt: 2, mb: 2, }}>
          <Typography variant="h6" gutterBottom align="center">DEMO:</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ p: 1, border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}>
                <Typography variant="body1"><strong>role:</strong> admin</Typography>
                <Typography variant="body1"><strong>phone number:</strong> (713) 584-1234</Typography>
                <Typography variant="body1"><strong>password:</strong> pass</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ p: 1, border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}>
                <Typography variant="body1"><strong>role:</strong> user</Typography>
                <Typography variant="body1"><strong>phone number:</strong> (512) 555-1234</Typography>
                <Typography variant="body1"><strong>password:</strong> pass</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

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