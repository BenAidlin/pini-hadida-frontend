import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Achievements from './pages/Achievements';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import { createTheme, } from "@mui/material";
import { grey, brown } from '@mui/material/colors';
import { Routes, Route, BrowserRouter as Router, } from 'react-router-dom';

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

  // pages and redirects
  let defaultPage = new Page("דף הבית",process.env.REACT_APP_route_prefix + "/", <Home theme={darkTheme}></Home>);
  let navPages = [  
    defaultPage,
    new Page("אודות", process.env.REACT_APP_route_prefix + "/About", <About theme={darkTheme}></About>),    
    new Page("הישגי המועדון", process.env.REACT_APP_route_prefix + "/Academy-Acievements", <Achievements theme={darkTheme}></Achievements>),    
    new Page("מערכת שבועית", process.env.REACT_APP_route_prefix + "/Schedule", <Schedule theme={darkTheme}></Schedule>),
    new Page("גלריה", process.env.REACT_APP_route_prefix + "/Gallery", <Gallery theme={darkTheme}></Gallery>)
  ];
  let userMenues = [
    // user menu will always have log out option
    new Page("פרופיל", process.env.REACT_APP_route_prefix + "/Profile", <Profile theme={darkTheme} userToken={userToken}></Profile>),
  ]

  const onLogin = (userToken) => {
    setUserToken(userToken);
    localStorage.setItem('loginData', userToken);
  }
  const onLogout = () => {
    setUserToken(null);
    localStorage.removeItem('loginData');
  }
  // jsx
  return (
    <div className="App">
      { /* Top */ }
      <Router>
        <Navbar theme={darkTheme} className={'navbar'} pages={navPages} userMenues={userMenues}                      
              onLogin = {(userToken) => onLogin(userToken)}
              onLogout = {() => onLogout()}
              userToken = {userToken}
        />
        { /* Body */ }
        <Routes>
          <Route path='/*' element={defaultPage.component}></Route>                    
          {            
            navPages.map(np =>             
              <Route exact path={np.route} element={np.component}></Route>
            )
          }
          {
            userMenues.map(np => 
              <Route exact path={np.route} element={np.component}></Route>
            )
          }
        </Routes>      
      { /* Bottom */ }      
      </Router>
    </div>
  );
}    

export default App;
