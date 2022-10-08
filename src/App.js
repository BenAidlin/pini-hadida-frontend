import { Component, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Students from './pages/StudentsPage';
import About from './pages/About';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

// optional pages handle
class Page {
  constructor(name, component){
    this.name = name;
    this.component = component;
  }
}
let defaultPage = new Page("דף הבית", <Home></Home>);
let navPages = [  
  defaultPage,
  new Page("אודות", <About></About>),    
  new Page("תלמידים", <Students></Students>),
  
];
let userMenues = [
  new Page("הרשמה", <Signup></Signup>),
  new Page("התחברות", <Login></Login>),
  new Page("פרופיל", <Profile></Profile>),
  new Page("התנתקות", <Logout></Logout>)
]
// app component handle
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage : "",
    };
  }

  render(){    
    return (
      <div className="App">
        { /* Top */ }
        <Navbar pages={navPages} userMenues={userMenues}        
           onChangeNav={(gotoPage) => this.setState({currentPage : gotoPage})} 
        />
        
        { /* Body */ }
        {
          // if currentPage is not in the "pages" keys, render default
          navPages.filter(page => page.name === this.state.currentPage).length != 0 ?             
            navPages.filter(page => page.name === this.state.currentPage)[0].component :
          userMenues.filter(page => page.name === this.state.currentPage).length != 0 ?
            userMenues.filter(page => page.name === this.state.currentPage)[0].component :
          defaultPage.component
        }

        { /* Bottom */ }
      </div>
    );
  }    
}

export default App;
