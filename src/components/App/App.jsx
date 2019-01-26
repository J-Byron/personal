import React, { Component } from 'react';
import './App.css';

// *----------* Components *----------*
import HomePage from '../HomePage/HomePage'

// *----------* Page Components *----------*

// *----------* Styling *----------*

class App extends Component {

  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <div className="App">
            < HomePage />
        </div>
      </div>
    );
  }
}

export default App;
