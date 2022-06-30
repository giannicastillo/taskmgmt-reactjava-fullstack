import React, { Component } from 'react';
import ComponentOne from './components/examples/ComponentOne'
import ComponentTwo from './components/examples/ComponentTwo'
import ComponentThree from './components/examples/ComponentThree'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className='App'>
        Hello World
        <ComponentOne></ComponentOne>
        <ComponentTwo></ComponentTwo>
        <ComponentThree></ComponentThree>
      </div>
    );
  }
}




export default App;
