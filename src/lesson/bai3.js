import React from 'react';

const Bai3 = () => {

    //Ham - Function

    //1.Hàm Có Tên (Named Function)
    function greet() {
        console.log("Hello, World!");
    }
    const name = "Joshn";
     function showName() {
        console.log("My name is " + name);
    }
    // showName();
    //call()

    //2. Hàm Biểu Thức (Function Expression - Anonymous Function)

    // const sayHello = function sayHello2() {
    //     console.log("Hello from named function expression!");
    // };

    // sayHello();

    const square = function () { //ham vo danh
        console.log("Hello, World!");
    };
    square();


    // const sayHi = function sayHello() {
    //     console.log("Hello from named function expression!");
    // }

    // const sayHii = function () {
    //     console.log("Hello from named function expression!");
    // }
    // square();
    //3. Hàm Mũi Tên (Arrow Function)
   
    const meet = () => {
        console.log("Hello, World! 22222");
    };
    meet()

    const showname = () => {
        console.log("My name is " + name);
    }
    

    //Onclick

    // const sayHello = () => {
    //     console.log("Hello from named arrow function!");
    // };
    return (
        <div>
            <h1>Bai 3</h1>
            <button onClick={showname}>Click</button>
        </div>
    );
};

export default Bai3;