import React, { Component } from "react";

import List from './List'

class NewTask extends Component {
  constructor(){
    super()

    this.state = {
      task: '',
      taskList: []
    }
  }

  handleTask = (val) => {
    this.setState({
        task: val
    })
  }

  addToTaskList = () => {
      this.setState({
          taskList: [...this.state.taskList, this.state.task],
          task: ''
      })
  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.handleTask(e.target.value)}/>
        <button onClick={this.addToTaskList}>Add Task</button>
        <List taskList={this.state.taskList}/>
      </div>
    );
  }
}

export default NewTask;
