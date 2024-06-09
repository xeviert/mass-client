import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Button, Container, Typography, MenuItem, Drawer, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppContext } from '../AppContext';
import ToggleColorMode from './ToggleColorMode';

const logoStyle = {
  width: '120px',
  height: 'auto',
  marginLeft: '16px',
  marginRight: '16px',
  cursor: 'pointer',
};

function NavBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const { user, processLogout } = useContext(AppContext);

  const handleLogoutClick = () => {
    processLogout();
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <img
                  src='/images/logo.png'
                  style={logoStyle}
                  alt="logo of sitemark"
                />
              </Link>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {user && user.id && (
                  <MenuItem
                    sx={{ py: '6px', px: '12px' }}
                    component={Link}
                    to={user.role === 'admin' ? '/admin' : '/'}
                  >
                    <Typography variant="body2" color="text.primary">
                      {user.role === 'admin' ? 'Admin' : 'Home'}
                    </Typography>
                  </MenuItem>
                )}
                <MenuItem
                  sx={{ py: '6px', px: '12px' }}
                  component={Link}
                  to='/about'
                >
                  <Typography variant="body2" color="text.primary">
                    About
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{ py: '6px', px: '12px' }}
                  component={Link}
                  to='/resources'
                >
                  <Typography variant="body2" color="text.primary">
                    Resources
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              {user && user.id ? (
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={handleLogoutClick}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component={Link}
                    to='/login'
                  >
                    Sign in
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component={Link}
                    to='/register'
                  >
                    Sign up
                  </Button>
                </>
              )}
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem component={Link} to='/about'>
                    About
                  </MenuItem>
                  <MenuItem component={Link} to='/resources'>
                    Resources
                  </MenuItem>
                  <Divider />
                  {user && user.id ? (
                    <>
                      <MenuItem component={Link} to={user.role === 'admin' ? '/admin' : '/'}>
                        {user.role === 'admin' ? 'Admin' : 'Home'}
                      </MenuItem>
                      <MenuItem onClick={handleLogoutClick}>
                        <Button
                          color="primary"
                          variant="contained"
                          sx={{ width: '100%' }}
                        >
                          Logout
                        </Button>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          component={Link}
                          to='/register'
                          sx={{ width: '100%' }}
                        >
                          Sign up
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="outlined"
                          component={Link}
                          to='/login'
                          sx={{ width: '100%' }}
                        >
                          Sign in
                        </Button>
                      </MenuItem>
                    </>
                  )}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default NavBar;
