import React from 'react'

interface countProps {
    value: number
}

export default (countProps: countProps) => {
    return (
        <div>
            <p>{countProps.value}</p>
        </div>
    )
}