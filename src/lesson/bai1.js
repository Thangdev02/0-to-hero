import React from 'react';

const Bai1 = () => {

    //Declare Variable
    //Let
    // let x = 10;
    // x = 20;  // Giá trị có thể thay đổi
    // x = 30;  // Giá trị có thể thay đổi 
    // console.log(30);  // Output: 20
    

    //Const 
    //Không thể thay đổi giá trị: Một khi giá trị đã được gán cho const
    // const y = 10; //tranh gia tri bi thay doi ma minh khong kiem soat dc
    // y = 20;  // Giá trị ko thể thay đổi
    // y =30;
    // Sẽ gây lỗi: Assignment to constant variable.


    //var
    // var z = 10;
    // z = 20;  // Giá trị có thể thay đổi
    // z = 50;  // Giá trị có thể thay đổi



    // function testVar() {
    //     if (true) {
    //         var x = 10; //global
    //     }
    //     console.log("Var:", x);  // In ra 10, vì var có phạm vi hàm
    // }
    // testVar();
    // testVar();
    // function testLet() {
    //     if (true) {
    //         let y = 20; //block
    //     }
    //     console.log("Let:", y);  // Lỗi: y is not defined, vì let có phạm vi khối
    // }

    // testLet();


    var z = 10
    z = 40;
  
    return (
        <div>
            <h1>Bai 1</h1>
            <h3>Result: {z} </h3>
        </div>
    );
};

export default Bai1;