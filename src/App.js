import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Students from './pages/StudentsPage';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

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
  let defaultPage = new Page("דף הבית", <Home></Home>);
  let navPages = [  
    defaultPage,
    new Page("אודות", <About></About>),    
    new Page("תלמידים", <Students></Students>),    
  ];
  let userMenues = [
    // user menu will always have log out option
    new Page("פרופיל", <Profile userToken={userToken}></Profile>),
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
      <Navbar pages={navPages} userMenues={userMenues}        
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
