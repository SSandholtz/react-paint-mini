import React from 'react'

function ColorPicker(props) {
    return (
        <div>
            <button onClick={() => props.handleColorClick('blue')}>blue</button>
            <button onClick={() => props.handleColorClick('yellow')}>yellow</button>
            <button onClick={() => props.handleColorClick('green')}>green</button>
            <button onClick={() => props.handleColorClick('purple')}>purple</button>
        </div>
    )
}

export default ColorPicker