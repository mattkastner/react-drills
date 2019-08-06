import React, { Component } from "react";
import "./App.css";

import Image from './Image'

class App extends Component {
  constructor(){
    super()

    this.state = {
      image: 'https://i.ytimg.com/vi/SQudKvrwDAU/maxresdefault.jpg'
    }
  }

  render() {
    return (
      <div className="App">
        <Image imageUrl={this.state.image}/>
      </div>
    );
  }
}

export default App;
