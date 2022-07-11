import React, { Component } from 'react';
// import ComponentOne from './components/examples/ComponentOne'
// import ComponentTwo from './components/examples/ComponentTwo'
// import ComponentThree from './components/examples/ComponentThree'
import ButtonFunction from './components/buttons/ButtonFunction'
import TaskMgmt from './components/tasksmgmt/TaskMgmt';
import './App.css';
import './bootstrapfile.css';



class App extends Component {
  render(){
    return(
      <div className='App'>
        {/* <ButtonFunction></ButtonFunction> */}
        <TaskMgmt></TaskMgmt>
      </div>
    );
  }
}


// function ExampleComponents (){
//   return(
//     <div className='ExampleComponents'>
//       Hello World
//       <ComponentOne></ComponentOne>
//       <ComponentTwo></ComponentTwo>
//       <ComponentThree></ComponentThree>
//     </div>
//   );

// }

export default App;
