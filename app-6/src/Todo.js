import React, {Component} from 'react'

class Todo extends Component {

    render(){
        const mappedTasks = this.props.tasks.map((task, i, arr) => {
            return (<div>
                {task}
            </div>)
        })
        return(
            <div>
                {mappedTasks}
            </div>
        )
    }

}

export default Todo