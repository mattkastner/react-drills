import React, { Component } from "react";
import "./App.css";

import NewTask from './Components/NewTask'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>My to-do list:</h2>
        <NewTask />
      </div>
    );
  }
}

export default App;
