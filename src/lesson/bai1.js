import React from 'react';

const Bai1 = () => {

    //Declare Variable Khai bao bien
    //var, let, const

    const x = 10;

    console.log(x);
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


    // const y = 10;
    // y = 20;
    // console.log("Result:", y);

    //var
    // var z = 10;
    // z = 20;  // Giá trị có thể thay đổi
    // z = 50;  // Giá trị có thể thay đổi

    // console.log("Result:", z);



    // function varTest(){
    //         if(true){
    //             var x = 10 //var -> global variable
    //         }
    //         console.log("Result X:", x)
    // }
    // varTest();
 //khai bao bien la sai const // de tranh truong hop du lieu bi bien dong ma minh khong biet
    function testVar(){

        if(true){
            var z = 20; //var let, var co pham vi global, let thi local
            
        }
        console.log("Result Z:", z)
    }
    testVar();
    
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


   

    return (
        <div>
            <h1>Bai 1</h1>
        </div>
    );
};

export default Bai1;