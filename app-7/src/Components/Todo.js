import React, {Component} from 'react'

class Todo extends Component {
    render(){
        return(<div key={this.props.index}>{this.props.item}</div>)
    }
}

export default Todo