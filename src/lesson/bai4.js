import React from 'react';

const Bai4 = () => {
    //Method - phuong thuc
    //1.push(): Thêm một hoặc nhiều phần tử vào cuối mảng.
    // let numbers = [1, 2, 3];
    // console.log("Old array:", numbers)
    // numbers.push(4);  // [1, 2, 3, 4]
    // console.log("New array:", numbers)


    //2.pop(): Loại bỏ phần tử cuối cùng khỏi mảng và trả về phần tử đó.
    // let numbers = [1, 2, 3];
    // let removedElement = numbers.pop();  // [1, 2], removedElement = 3
    // console.log("Removed element:", removedElement)

    //3.forEach(): Thực thi một hàm với mỗi phần tử trong mảng.
    // let numberss = [1, 2, 3];
    // numberss.forEach(function (num) {
    //     let doubledNumbers = num * 3;
    //     console.log("number:", doubledNumbers);  // Output: 1, 2, 3 (in ra từng phần tử)
    // });

    // //4.map(): Thực thi một hàm với một phần tử trong mảng.
    // let products = ["Banana", "Apple", "Orange"];
    // let showProuct = products.map(product => product );  // [2, 4, 6]
    // console.log(showProuct);
    
    //Chuoi - String
    //1.toUpperCase(), toLowerCase(): Chuyển đổi toàn bộ chuỗi thành chữ thường,hoa.

    // let name = "John Doe";
    // let name2 = "JOHN Doe";
    // if(name.toUpperCase() === name2.toUpperCase()){
    //     console.log("OK")
    // }
    // product Name  = "Laptop";
    // nguoi dung tui em, nhap vao input search "laptop"
    // console.log(greeting.toUpperCase());  // "HELLO"
    // console.log(greeting.toLowerCase());  // "HELLO"

    //2.trim(): Loại bỏ khoảng trắng ở đầu và cuối chuỗi.
    let name = "   John Doe   ";
    let trimmedName = name.trim();  // "John Doe"
    // console.log(trimmedName);

    //doituong Object
    //1.Object.keys(): Trả về một mảng chứa tất cả các khóa (keys) của đối tượng.
    //2.Object.value(): Trả về một mảng chứa tất cả gia tri (value) của đối tượng.

    // let person = { name: "Alice", age: 25 };
    // console.log(person.age)
    // console.log(Object.key(person));  // ["name", "age"]
    // console.log(Object.values(person));  // ["name", "age"]

    // 3.Object.entries(): Trả về một mảng các cặp [key, value] của đối tượng.

    let person = { name: "Alice", age: 25 };
    console.log(Object.entries(person));  // [["name", "Alice"], ["age", 25]]


    return (
        <div>

        </div>
    );
};

export default Bai4;