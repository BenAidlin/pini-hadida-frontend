import { Component, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Students from './pages/StudentsPage';
import About from './pages/About';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Profile from './pages/Profile';

// optional pages handle
class Page {
  constructor(name, component){
    this.name = name;
    this.component = component;
  }
}
let defaultPage = new Page("Home", <Home></Home>);
let navPages = [
  defaultPage,
  new Page("About", <About></About>),  
  new Page("Students", <Students></Students>)
];
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
        <Navbar pages={navPages}        
           onChangeNav={(gotoPage) => this.setState({currentPage : gotoPage})} 
        />
        
        { /* Body */ }
        {
          // if currentPage is not in the "pages" keys, render default
          navPages.filter(page => page.name === this.state.currentPage).length != 0 ? 
            navPages.filter(page => page.name === this.state.currentPage)[0].component :
            defaultPage.component
        }

        { /* Bottom */ }
      </div>
    );
  }    
}

export default App;
