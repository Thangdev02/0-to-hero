import React from 'react';

const LinkButton = (props) => {
    return (
        <div >
            <button 
            
                style={{
                    background: '#E6F7FF', padding: '20px',
                    borderRadius: '16px', border: 'none', fontWeight: 'bold',
                    color: props.color
                }}>{props.text}</button>
                <h1 >{props.name}</h1>
        </div>
    );
};

export default LinkButton;