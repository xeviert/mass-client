import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthApiService from "../Service/auth-api-service";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PhoneNumberInput from './PhoneNumberInput';

const Register = () => {
  const [error, setError] = useState(null);
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(null);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError(null);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    AuthApiService.postNewUser({
      phone_number,
      password,
    })
      .then(() => {
        navigate("/");
      })
      .catch((res) => {
        setError(res.error);
      });
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
          <PersonAddAltOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: 1 }}>
          <PhoneNumberInput
            value={phone_number}
            onChange={setPhoneNumber}
            placeholder=' enter phone #'
            name='phone_number'
            required
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirm-password"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={!!passwordMatchError}
            helperText={passwordMatchError}
          />

          {error && <Typography color="error">{error}</Typography>}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!!passwordMatchError}
          >
            Register
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to='/login' variant="body2">
                {"Already have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
