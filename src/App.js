import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Achievements from './pages/Achievements';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import { createTheme } from "@mui/material";
import { grey, brown } from '@mui/material/colors';

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
  constructor(name, component){
    this.name = name;
    this.component = component;
  }
}
// app component handle
function App() {  
  
  // app states
  const [currentPage, setCurrentPage] = useState("");
  const [userToken, setUserToken] = useState(localStorage.getItem('loginData'));

  // pages and redirects
  let defaultPage = new Page("דף הבית", <Home theme={darkTheme}></Home>);
  let navPages = [  
    defaultPage,
    new Page("אודות", <About theme={darkTheme}></About>),    
    new Page("הישגי המועדון", <Achievements theme={darkTheme}></Achievements>),    
    new Page("מערכת שבועית", <Schedule theme={darkTheme}></Schedule>),
    new Page("גלריה", <Gallery theme={darkTheme}></Gallery>)
  ];
  let userMenues = [
    // user menu will always have log out option
    new Page("פרופיל", <Profile theme={darkTheme} userToken={userToken}></Profile>),
  ]
  // methods
  const onNavChange = (gotoPage) => {
    setCurrentPage(gotoPage);
  };
  const onLogin = (userToken) => {
    setUserToken(userToken);
    localStorage.setItem('loginData', userToken);
  }
  const onLogout = () => {
    setUserToken(null);
    setCurrentPage('');
    localStorage.removeItem('loginData');
  }
  // jsx
  return (
    <div className="App">
      { /* Top */ }
      <Navbar theme={darkTheme} className={'navbar'} pages={navPages} userMenues={userMenues}        
          onChangeNav={(gotoPage) => onNavChange(gotoPage)} 
          onLogin = {(userToken) => onLogin(userToken)}
          onLogout = {() => onLogout()}
          userToken = {userToken}
      />
      
      { /* Body */ }
      {
        // if currentPage is not in the "pages" keys, render default
        navPages.filter(page => page.name === currentPage).length !== 0 ?             
          navPages.filter(page => page.name === currentPage)[0].component :
        userMenues.filter(page => page.name === currentPage).length !== 0 ?
          userMenues.filter(page => page.name === currentPage)[0].component :
        defaultPage.component
      }

      { /* Bottom */ }      
    </div>
  );
}    

export default App;
