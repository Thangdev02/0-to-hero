import React from 'react';

const Product = (props) => {
    //params nhan vao   
    return (
        <div>
            <h1>Product: {props.productName}</h1>
            <h1>Price: {props.productPrice}</h1>
            <h1>Quantity: {props.quanlity}</h1>
        </div>
    );
};

export default Product;