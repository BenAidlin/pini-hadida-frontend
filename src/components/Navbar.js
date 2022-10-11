import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";
import { Link, ThemeProvider, createTheme} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from './../extensions/images/logo-nobackground.png'
import { grey, red } from "@mui/material/colors";
import './../style/Navbar.css'
import Login from "../pages/Login";
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';

export default function Navbar(props) {  
  
  const pages = props.pages.map(page => page.name);  
  const userMenues = props.userMenues.map(um => um.name);  
  const onChangeNav = props.onChangeNav;  
  const onLogin = props.onLogin;
  const onLogout = props.onLogout;
  const [userToken, setUserToken] = useState(props.userToken);
  
  const navTitle = "Hadida Academy";


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const darkTheme = createTheme({
    palette: {
      //mode: "dark",
      primary: {
        // light: ...
        main: grey['900']
        // dark: ...
      },
      secondary:{
        // light: ...
        main: red['900'],
        // dark: ...
      }
    },
  });

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* logo in big */}
              <Box
                component="img"
                sx={{          
                  display: { xs: 'none', md: 'flex' }, mr: 1,      
                  maxHeight: 80
                }}
                alt="Your logo."
                src={Logo}
              >                
              </Box>              
              {/* title in big */}        
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',                                    
                }}
              >
                {navTitle}
              </Typography>

              {/* logo in small */}
              <Box
                component="img"
                sx={{          
                  display: { xs: 'flex', md: 'none' }, mr: 1,
                  maxHeight: 40
                }}
                alt="Your logo."
                src={Logo}
              >
              </Box>              
              {/* title in small */}      
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                textAlign='center'
                justifyContent='flex-end'
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.002rem',
                  color: 'inherit',
                  textDecoration: 'none',                  
                }}
              >
                {navTitle}
              </Typography>
              
              {/* pages menu in big */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
                {pages.reverse().map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}                  
                    className="navbar-button"
                  >
                  <Link 
                  component={RouterLink} 
                  to={"/" + page} 
                  sx={{ color: 'white', display: 'block' }}
                  style={{ textDecoration: 'none', fontFamily:'Segoe UI' }} 
                  onClick={()=>onChangeNav(page)}                  
                  >
                    {page}
                  </Link>                  
                </Button>
                ))}
              </Box>
              
              {/* hamburger menu in small */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent="flex-end">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.reverse().map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Box sx={{ ml:'auto' }}>
                      <Typography textAlign="center">
                        
                          <Link 
                            
                            style={{ textDecoration: 'none'}}
                            component={RouterLink} 
                            to={"/" + page} 
                            onClick={()=>onChangeNav(page)}
                            >
                              {page}
                          </Link>                                           
                      </Typography>
                      </Box>                       
                    </MenuItem>
                    ))}
                </Menu>
              </Box>
              
              {/* user menu in both when logged in, google login when not logged in */}
              {
                userToken != null ? 
                // logged in
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="לפתיחת הגדרות משתמש">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >         
                      {userMenues.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Box sx={{ ml:'auto' }}>
                          <Typography textAlign="center">
                            
                              <Link 
                                
                                style={{ textDecoration: 'none'}}
                                component={RouterLink} 
                                to={"/" + page} 
                                onClick={()=>onChangeNav(page)}
                                >
                                  {page}
                              </Link>                                           
                          </Typography>
                          </Box>                       
                        </MenuItem>
                        ))}

                      <MenuItem key={'התנתקות'} onClick={handleCloseNavMenu}>
                          <Box sx={{ ml:'auto' }}>
                          <Typography textAlign="center">                        
                              <Button                             
                                onClick={()=>{onLogout(); setUserToken(null);}}
                                >
                                  התנתקות
                              </Button>                                           
                          </Typography>
                          </Box>                       
                        </MenuItem>
                    </Menu>
                  </Box>          
                :// not logged in    (big then small)       
                <Tooltip title='להרשמה עם חשבון גוגל'>
                  <div>                                                          
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>                
                      <GoogleOAuthProvider clientId={process.env.REACT_APP_google_client_id}>
                          <GoogleLogin     
                                            
                              theme={'filled_black'}
                              logo_alignment={'left'}
                              shape={'circle'}
                              onSuccess={(res)=>{console.log(res); onLogin(res.credential); setUserToken(res.credential);}}
                              onError={()=>{alert("something went wrong with log in...")}}
                              cookiePolicy={'single_host_origin'}
                          ></GoogleLogin>            
                      </GoogleOAuthProvider>                
                    </Box>        
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>                
                      <GoogleOAuthProvider clientId={process.env.REACT_APP_google_client_id}>
                        <GoogleLogin     
                            type={'icon'}              
                            theme={'filled_black'}
                            logo_alignment={'left'}
                            shape={'circle'}
                            onSuccess={(res)=>{console.log(res); onLogin(res.credential); setUserToken(res.credential);}}
                            onError={()=>{alert("something went wrong with log in...")}}
                            cookiePolicy={'single_host_origin'}
                        ></GoogleLogin>            
                      </GoogleOAuthProvider>                
                    </Box>                           
                  </div>                  
                  </Tooltip>
              }                            
            </Toolbar>
          </Container>
        </AppBar>        
      </ThemeProvider>
    </Router>
  );
}