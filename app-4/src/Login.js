import React, { Component } from "react";


class Login extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername = (val) => {
    this.setState ({
      username: val
    })
  }

  handlePassword = (val) => {
    this.setState ({
      password: val
    })
  }

  alertInfo = () => {
    alert(`Username: ${this.state.username} / Password: ${this.state.password}`)
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleUsername(e.target.value)}/>
        <input onChange={(e) => this.handlePassword(e.target.value)}/>
        <button onClick={this.alertInfo}>User Info</button>
      </div>
    );
  }
}

export default Login;
