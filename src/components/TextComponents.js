import React from 'react';

const TextComponents = (props) => {
    //params nhan ve
    //call back goi ham trong ham, de quy. Khi nao ma e goi toi ham do, xong cai ham do lai goi toi cai ham goi no
    return (
        <div>
            <h1>User</h1>
            <h1 style={{color:'red'}}> {props.name} </h1>   
            <h2>{props.age}</h2>
            <h3>{props.address}</h3>
        </div>
    );
};

export default TextComponents;