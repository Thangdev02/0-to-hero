import React from 'react';
import Params from '../components/Params';
import Params2 from '../components/Params2';

const Lesson8Params = () => {
    //parameter ( tham so )



    // // undefined
    // let x;
    // console.log(x); // undefined (chưa được gán giá trị)

    // function test() { }
    // console.log(test()); // undefined (hàm không trả về giá trị)

    // // null
    // let y = null;
    // console.log(y); // null (được gán một cách cố ý)

    // let obj = { name: "John" };
    // console.log(obj.age); // undefined (thuộc tính không tồn tại)

    //Param, la tham so truyen vao component
    // co the truyen du lieu, truyen doi tuong, state.
    //return string

    //javascript //typescript

    // khi truyen du lieu bang ham, thi sai param, truyen qua components thi sai props
    // function showNumber(number, number2) { //tham so, parameter
    //     // console.log("Result is:", number, number2);
    //     // return number ;
    // }
    // showNumber(10, 20); //argument, doi so


    // function showName(name, age) { //parameter
    //     console.log("My name is", name)
    //     console.log("I'm", age)
    // }
    // showName('Thang', 21) //doi so, argumentative

    //goi ham thi co gi quan trong, cai truyen di, va cai nhan ve

    //tao ra 1 ham, nhan vao 2 tham so a va b, lam ham tinh tong a va b

    // function sum(a, b) {
    //     console.log("Result is:", a + b);
    // }

    // sum(10, 20);

    // //tao 1 ham, nhan vao 3 tham so, (a + b) * c
    // function div(a, b, c) {
    //     return (a+b) * c
    // }

    // div(10, 10, 3);

    //Call back la gi?
    // function showName(name, sayHello) { //call back nay la function
    //     console.log(name) //lay name in ra thoi
    //     sayHello(); //goi ham callback
    // }

    // function sayHello() {
    //     console.log("Hello!");
    // }
    // showName("John", sayHello)


    // function showA(a, showB){
    //     console.log("Result:",a)
    //     showB();
    // }

    // function showB(){
    //     console.log("Done!!!!")
    // }

    // showA('A',showB)



    // function getAge(age, callback) {
    //     console.log(age)
    //     callback(); //ham goi nguoc, call back
    // }

    // function notify() {
    //     console.log("Da get Age thanh cong")
    // }

    // getAge(20, notify)
    // //tao 1 ham de fetch data tu API, sau do goi ham show data len man hinh

    // function getText(name, age) { //call back
    //     // return name, age
    //     return `${name} is ${age} years old`;
    // }


    // function hello(name, age) { //param tham so
    //     // console.log("hello", name, age);
    // }
    // hello('Thang', 18); //argument //doi so

    // //return object
    // function getText2(name, age) {
    //     return { name, age } //object
    // }

    // //return array
    // function getText3(name, age) {
    //     return [name, age]; //array
    // }
    // const displayText = getText2("Helloaaaa", 10);

    // const handleClick = (event) => {
    //     event.preventDefault(); // Ngừng hành động mặc định
    //     // console.log("Button was clicked!", event);
    // };


    const name = "John";
    const age = 30;
    return (
        <div>
          
             <Params name={name} age={age} />

        </div>
    );
};

export default Lesson8Params;