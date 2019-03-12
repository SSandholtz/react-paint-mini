import React, { Component } from 'react'
import ColorPicker from './ColorPicker';

class Square extends Component {
    constructor () {
        super ()

        this.state = {
            backgroundColor: 'black'
        }
    }

    handleClick = () => {
        this.setState({
            backgroundColor: this.props.selectedColor
        })
    }

    render () {
        return (
            <div style={{
                height: 10,
                width: 10,
                border: '1px solid orange',
                backgroundColor: this.state.backgroundColor,
            }}
            
            onClick={this.handleClick}>
            </div>
        )
    }
}

export default Square