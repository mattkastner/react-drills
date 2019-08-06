import React from 'react'

class Image extends React.Component {

    render(){
        return (
            <div>
                <img alt="cat fight" src={this.props.imageUrl}/>
            </div>
        )
    }
}

export default Image