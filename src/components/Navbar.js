import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link, ThemeProvider, } from "@mui/material";
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
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar(props) {  
  // navbar state
  const theme = props.theme;
  const pages = props.pages;  
  const userMenues = props.userMenues;  
  const onLogin = props.onLogin;
  const onLogout = props.onLogout;
  const showGoogleTooltip = props.showGoogleTooltip;
  const showedGoogleTooltip = props.showedGoogleTooltip;
  const [userToken, setUserToken] = useState(props.userToken);  
  const navTitle = "Hadida Academy";  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();
  
  // navbar methods
  useEffect(()=>{
    // when location changes, update app state so it will show tool tip in scroll
    showedGoogleTooltip.current = false;
  }, [location, showedGoogleTooltip])

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
  const navigate = useNavigate();


  return (
    
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* logo in big */}
              <Box
                onClick={()=>navigate(process.env.REACT_APP_route_prefix)}
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
                onClick={()=>navigate(process.env.REACT_APP_route_prefix)}
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
                onClick={()=>navigate(process.env.REACT_APP_route_prefix)}
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
                onClick={()=>navigate(process.env.REACT_APP_route_prefix)}
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
                    key={page.name}
                    onClick={handleCloseNavMenu}    
                    sx={{}}                                  
                  >
                  <Link 
                    component={RouterLink} 
                    to={page.route} 
                    sx={{pl:1, pr:1, color: theme.typography.color, display: 'block',  "&:hover":{backgroundColor:theme.palette.decorative.darkGrey}}}
                    style={{ textDecoration: 'none'  }}                   
                    className="navbar-button"           
                    >
                    {page.name}
                  </Link>                  
                </Button>
                ))}
              </Box>
              
              {/* hamburger menu in small */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent="flex-start">
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
                    <Link             
                      key={page.route}                
                      style={{ textDecoration: 'none', backgroundColor:theme.palette.decorative.lightBrown}}                            
                      component={RouterLink} 
                      to={page.route}                             
                      >
                      <MenuItem sx={{position:'relative'}} key={page.name} onClick={handleCloseNavMenu}>
                        <Box sx={{ ml:'auto' }}>
                          <Typography >
                            {page.name}
                          </Typography>
                        </Box>                       
                      </MenuItem>
                    </Link>                                                                 
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
                              <Link  
                              key = {page.route}                               
                              style={{ textDecoration: 'none'}}
                              component={RouterLink} 
                              to={page.route}     
                                                          
                              >
                                <MenuItem key={page.name} onClick={()=>{handleCloseNavMenu(); handleCloseUserMenu();}}>
                                  <Box sx={{ ml:'auto' }}>
                                    <Typography textAlign="center" >
                                      {page.name}
                                    </Typography>
                                  </Box>                       
                                </MenuItem>
                              </Link>                                           
                          
                        ))}
                      <Link                                 
                              style={{ textDecoration: 'none'}}
                              component={RouterLink} 
                              onClick={()=>{onLogout(); setUserToken(null);}}
                              >
                      <MenuItem key={'התנתקות'} onClick={()=>{handleCloseNavMenu(); handleCloseUserMenu();}}>
                          <Box sx={{ ml:'auto' }}>
                          <Typography textAlign="center">                                                                                                                  
                                התנתקות                              
                          </Typography>
                          </Box>                       
                        </MenuItem>
                        </Link>                                           
                    </Menu>
                  </Box>          
                :// not logged in    (big then small)       
                <Tooltip arrow open={showGoogleTooltip} title='להרשמה עם חשבון גוגל'>
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

  );
}