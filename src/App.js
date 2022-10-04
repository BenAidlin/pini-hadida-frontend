import { Component } from 'react';
import './App.css';
import Body from './components/Body';
import './components/Header';
import Header from './components/Header';
import Navbar from './components/Navbar';


class App extends Component {
  render(){
    let coach_name = "Pini Hadida";
    return (
      <div className="App">
        <Navbar></Navbar>
        <Header title={coach_name}/>        
        <Body coach_name={coach_name}/>
      </div>
    );
  }    
}

export default App;
