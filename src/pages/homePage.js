import React from 'react';
import Bai7Props from '../lesson/bai7Props';
import Lesson8Params from '../lesson/lesson8Params';
import CounterWithDelay from '../components/CounterComponents';
import TextComponents from '../components/TextComponents';
import Profile from '../components/Profile';
import Product from '../components/Product';

const HomePage = () => { //cha
    return (
        <div>
        <Profile name = "John" age = "30" phone = "0123456789" address = "Ha Noi"/>
        <Product productName = 'Iphone' productPrice = '1000' quanlity = '10'/>
        <Lesson8Params/>
        </div>
    );
};

export default HomePage;