import React from 'react';

const ButtonComponents = (props) => {
    return (
        <div>
            <button style={{background: props.backgroundColor}} type='button'>{props.text}</button>
        </div>
    );
};

export default ButtonComponents;