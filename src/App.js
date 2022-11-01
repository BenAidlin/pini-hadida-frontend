import { useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import { createTheme } from "@mui/material";
import { grey, brown } from '@mui/material/colors';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import scrolldown from './extensions/images/scrolldown-gif4.gif'
import { useEffect } from 'react';
import FloatingActionButtons from './components/FloatingActionButtons';

// app theme
const darkTheme = createTheme({
  palette: {
    //mode: "dark",
    primary: {
      // light: ...
      main: grey['900']
      // dark: ...
    },
    secondary: {
      main: brown['200']
    },
    decorative:{
      lightBrown: brown['100'],
      darkGrey: grey['800']
    }
  },
  typography: {
    fontFamily: 'Segoe UI',
    color: 'white'
  }
});
// optional pages handle
class Page {
  constructor(name, route, component){
    this.name = name;
    this.route = route;
    this.component = component;
  }
}
// app component handle
function App() {  
  
  // app states
  const [userToken, setUserToken] = useState(localStorage.getItem('loginData'));  
  const [showGoogleTooltip, setShowGoogleTooltip] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  
  // navbar updates showedGoogleTooltip on location change
  const showedGoogleTooltip = useRef(false);
  
  
  // pages and redirects
  let defaultPage = new Page("דף הבית",process.env.REACT_APP_route_prefix + "/", <Home theme={darkTheme}></Home>);
  let navPages = [  
    defaultPage,
    new Page("אודות", process.env.REACT_APP_route_prefix + "/About", <Home theme={darkTheme}></Home>),    
    new Page("הישגי המועדון", process.env.REACT_APP_route_prefix + "/Achievements", <Home theme={darkTheme}></Home>),    
    new Page("מערכת שבועית", process.env.REACT_APP_route_prefix + "/Schedule", <Home theme={darkTheme}></Home>),
    new Page("גלריה", process.env.REACT_APP_route_prefix + "/Gallery", <Gallery theme={darkTheme}></Gallery>)
  ];
  let userMenues = [
    // user menu will always have log out option
    new Page("פרופיל", process.env.REACT_APP_route_prefix + "/Profile", <Profile theme={darkTheme} userToken={userToken}></Profile>),
  ]
  
  // methods
  const onLogin = (userToken) => {
    setUserToken(userToken);
    localStorage.setItem('loginData', userToken);
  }
  const onLogout = () => {
    setUserToken(null);
    localStorage.removeItem('loginData');
  }
  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );    
  const onAppScroll = async (e) =>{      
    // every time the app scrolls, if in current page never showed tool tip show it
    // navbar updates showedGoogleTooltip on location change
    if(window.scrollY > 100)
      setShowScrollArrow(false);
    else setShowScrollArrow(true);
    if (!showedGoogleTooltip.current){
      setShowGoogleTooltip(true);
      await sleep(2000);
      setShowGoogleTooltip(false);
      showedGoogleTooltip.current = true;
    }
  };
  useEffect(()=>{
    window.addEventListener('scroll', onAppScroll, true);
  })
  // jsx
  return (
    <div className="App" style={{overflowY: 'visible'}}>
      { /* Top */ }
      <Router>
        <Navbar theme={darkTheme} className={'navbar'} pages={navPages} userMenues={userMenues}                      
              onLogin = {(userToken) => onLogin(userToken)}
              onLogout = {() => onLogout()}
              userToken = {userToken}
              showGoogleTooltip = {showGoogleTooltip}
              showedGoogleTooltip = {showedGoogleTooltip}
        />
        <div className='scrollDownImageDiv'>
          <img style={{display: showScrollArrow ? 'block' : 'none', cursor: 'unset'}} src={scrolldown} alt={"scroll down to see mode"}></img>  
        </div>        
        <div className='contactFabDiv'>
          <FloatingActionButtons></FloatingActionButtons>
        </div>
        { /* Body */ }
        <Routes>
          <Route path='/*' element={defaultPage.component}></Route>                    
          {            
            navPages.map(np =>             
              <Route exact key={np.route} path={np.route} element={np.component}></Route>
            )
          }
          {
            userMenues.map(np => 
              <Route exact key={np.route} path={np.route} element={np.component}></Route>
            )
          }
        </Routes>      
      { /* Bottom */ }      
      </Router>
    </div>
  );
}    

export default App;
