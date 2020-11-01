import React from 'react'

interface Char {
    letter: string
    click: (event: React.MouseEvent<HTMLElement>) => void
}

const char = (props: Char) => {
    return (
        <div style={charStyle} onClick={props.click}>
            <h1 >{props.letter}</h1>
        </div>
    )
}

const charStyle = {
    display: 'inline-block',
    padding: '16px',
    "text-align": 'center',
    margin: '16px',
    border: '1px solid black'
}

export default char