import React from 'react'

const Light = (props) => {
    
    return (
        <div
            className={`bg-${props.color} ${props.selectedLight} rounded-circle mb-2 py-5`}
            onClick={props.onClick}
            id={props.id}
        >
        </div>
    );
}

export default Light;