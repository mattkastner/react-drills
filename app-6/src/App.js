import React, { Component } from "react";
import "./App.css";

import Todo from './Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      taskList: [],
      task: '',
    }
  }

  handleInput = (val) => {
    this.setState({
      task: val
    })
  }

  addToList = () => {
    this.setState ({
      taskList: [...this.state.taskList, this.state.task],
      task: ''
    })
  }
  render() {
    return (
      <div className="App">
        <h2>My to-do list:</h2>
        <input onChange={(e) => this.handleInput(e.target.value)}/>
        <button onClick={this.addToList}>Submit Task</button>
        <Todo  tasks={this.state.taskList}/>
      </div>
    );
  }
}

export default App;
