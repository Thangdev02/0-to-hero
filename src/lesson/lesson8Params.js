import React from 'react';
import Params from '../components/Params';

const Lesson8Params = () => {
    //Param, la tham so truyen vao component
    // co the truyen du lieu, truyen doi tuong, state.
    //return string
    function getText(name, age) {
        // return name, age
        return `${name} is ${age} years old`;
    }


    function hello(name){ //param tham so
        console.log("hello", name);
    }
    hello(1); //argument //doi so

    //return object
    function getText2(name, age) {
        return { name, age } //object
    }

    //return array
    function getText3(name, age) {
        return [name, age]; //array
    }
    const displayText = getText3("Helloaaaa", 10);


    const name = "John";
    const age = 30;
    return (
        <div>
            {/* <h1>{displayText}</h1> */}

            <h1>{displayText.name}</h1>
            <h1>{displayText.age}</h1>
            {/* <h1>{displayText[0]}</h1>
            <h1>{displayText[1]}</h1> */}
            {/* <Params name="John" age={30} /> */}
            <Params name={name} age={age} />

        </div>
    );
};

export default Lesson8Params;