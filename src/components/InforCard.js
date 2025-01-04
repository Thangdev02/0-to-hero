import React from 'react';

const InforCard = (props) => { 
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', width: 'fit-content', backgroundColor: '#f1f1f1' }}>
            <h1 style={{color: props.color}}>This is InforCard of {props.name}</h1>
            <h3>Full name: {props.name}</h3>
            <h3>Address: {props.address} </h3>
        </div>

    );
};

export default InforCard;