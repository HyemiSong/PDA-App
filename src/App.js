import React, {Component} from 'react';
import './App.css';
import PDA from "./components/PDA";

class App extends Component {
  state = {number:0}
  render(){
    return (
      <div className="App">
        <PDA></PDA>
      </div>
    );  
  }
}

export default App;
