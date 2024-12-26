import React from 'react';

const Bai2 = () => {

    //Khai báo biến

    //Value
    // const number = 0; //int number
    // const name = 'John';
    // const isTrue = true;
    // const double = 10.5;
    // const array = [1, 2, 3]; //mang , mang co nhieu phan tu
    // const object = {name: 'John', age: 30}; //doi tuong , doi tuong co nhieu thong tin
    //truoc dau 2 cham -> key
    //sau dau 2 cham -> values
    // -> data type - kieu du lieu
    // console.log(typeof number)
    // console.log(typeof name)
    // console.log(typeof isTrue)
    // console.log(typeof double)
    // console.log(typeof array)

    // const user ={
    //     name: 'John',
    //     age: 30,
    //     isActive: true,
    //     address: 'Ha Noi',
    // }
    // console.log("Result:", user)
    // console.log(typeof user)

    //type of value

    // console.log(array);
    // console.log(typeof array);

    // console.log(object);
    //typeOf

    //     let x = 10
    //     x = 20;
    //     var y = 30;
    //     y = 40;
    //     const z = 50;
    //     z = 60;
    //    const typeOfNumber = typeof array;


    //Declare Let Const Var -> vi minh khong muon du lieu bi anh huong ma khong kiem soat -> Const
    // Datatype, JavaSciprt -> initial type  : any , khhi e chua assign du lieu

    const x = 10;
    const y = "Hello"
    const isSuccess = true;
    const price = 10.5;
    const user = {
        name: "John",
        age: 30
    }
    const array = [
        {
            name: "John", //key/ value
            age: 30
        },
        {
            name: "John",
            age: 30
        }
    ]
    // console.log(user)
    // console.log(array)


    const string = 10;
    const number = 'Hello'
    const account = {
        name: "John",
        age: 30
    }


    // const quanlity = 10;
    const quanlity = "10";
    const quanlity2 = 10;
    console.log( quanlity)
    console.log( quanlity2)

    const array2 =[
        {
            name: "John",
            age: 30
        },
        {
            name: "Div",
            age: 32
        }
    ]; //mang []
    console.log(array2)
    console.log( typeof array2)

    const acc = {
        userName: "John",
        age: 30
    }
    console.log(acc) //doi tuong {}
    console.log( typeof acc)


    return (
        <div>
            <h1>Bai 2</h1>
            {/* <h3>Restult:{typeOfNumber} </h3> */}
        </div>
    );
};

export default Bai2;