import React from 'react';

const Params = ({ name, age }) => { //tinh chat JSX, desctruring
    return (
        <div>
            <h1>Name: {name}</h1> 
            <h1>Age: {age}</h1>
        </div>
    );
};

export default Params;