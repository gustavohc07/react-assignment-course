import React from 'react'

interface Validation {
    textLength: number
}

const validation = (props: Validation) => {
    const validatesTextLength = (): string => {
        if (props.textLength === 0) return ''

        if (props.textLength < 6) {
            console.log(props.textLength)
            return 'Text too short!'
        } else if (props.textLength > 20) {
            return 'Text too long!'
        }

        return ''
    }

    return(
        <div>
            <p><strong>{validatesTextLength()}</strong></p>
        </div>
    )
}

export default validation