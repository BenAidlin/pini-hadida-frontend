import { useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import { createTheme } from "@mui/material";
import { grey, brown } from '@mui/material/colors';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
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
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const [showGoogleTooltip, setShowGoogleTooltip] = useState(false);
  
  console.log(userData);
  // navbar updates showedGoogleTooltip on location change
  const showedGoogleTooltip = useRef(false);

  // pages and redirects
  let defaultPage = new Page("דף הבית",process.env.REACT_APP_route_prefix + "/", <Home theme={darkTheme}></Home>);
  let navPages = [  
    defaultPage,
    new Page("אודות", process.env.REACT_APP_route_prefix + "/About", <Home theme={darkTheme}></Home>),    
    new Page("יצירת קשר", process.env.REACT_APP_route_prefix + "/Contact", <Home theme={darkTheme}></Home>),
    new Page("מערכת שבועית", process.env.REACT_APP_route_prefix + "/Schedule", <Home theme={darkTheme}></Home>),
    new Page("הישגי המועדון", process.env.REACT_APP_route_prefix + "/Achievements", <Home theme={darkTheme}></Home>),            
    new Page("גלריה", process.env.REACT_APP_route_prefix + "/Gallery", <Gallery theme={darkTheme}></Gallery>),    
  ];
  let userMenues = [
    // user menu will always have log out option
    new Page("פרופיל", process.env.REACT_APP_route_prefix + "/Profile", <Profile theme={darkTheme} userData={userData}></Profile>),
  ]
  
  // methods
  const onLogin = async (userToken) => {
    
    localStorage.setItem('loginData', userToken);
    const res = await fetch(process.env.REACT_APP_api_route + '/users/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: userToken
      }),
      headers:{
        'Content-Type' : 'application/json'
      }
    });
    let userData = await res.json()
    setUserData(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
    return userData;
  }
  const onLogout = () => {
    setUserData(null);
    localStorage.removeItem('userData');
  }
  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );    
  const onAppScroll = async (e) =>{      
    // every time the app scrolls, if in current page never showed tool tip show it
    // navbar updates showedGoogleTooltip on location change
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
              userData = {userData}
              showGoogleTooltip = {showGoogleTooltip}
              showedGoogleTooltip = {showedGoogleTooltip}
        />
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
