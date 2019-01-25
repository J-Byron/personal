import React, { Component } from 'react';
import './App.css';

// *----------* Components *----------*
import Header from '../Header/Header';

// *----------* Page Components *----------*

// *----------* Styling *----------*

class App extends Component {

  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <div className="App">
            < Header />
        </div>
      </div>
    );
  }
}

export default App;
