import React, {Component} from 'react'

import Todo from './Todo'

class List extends Component {

    render(){
        const mappedTasks = this.props.taskList.map((task, i, arr) => {
            return (<Todo item={task} index={i} />)
        })
        return(
            <div>
                {mappedTasks}
            </div>
        )
    }

}

export default List