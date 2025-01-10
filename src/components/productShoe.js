import React from 'react';
import './CSS/productShoe.css';
const ProductShoe = (props) => {
    return (
        <div>
            <img src={props.img}/>
            <h1 className='title' >{props.title}</h1>
            <h3>{props.price}</h3>
        </div>
    );
};

export default ProductShoe;