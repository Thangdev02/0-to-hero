import React from 'react';

const Bai4 = () => {
    //Method - phuong thuc troong JAvascript

    // nhung phuong ve Array

    //1.push(): Thêm một hoặc nhiều phần tử vào cuối mảng.
    // let numbers = [1, 2, 3];
    // console.log("Old array:", numbers)
    // numbers.push({id: 1, name: "John"});  // [1, 2, 3, 4]
    // console.log("New array:", numbers)
    // numbers.push({
    //     id: 1,
    //     name: "John"
    // })
    // console.log("New array:", numbers)

    //sai khi tao 1 gia tri moi trong 1 mang
    //list Product 10, push 11 thang

    //2.pop(): Loại bỏ phần tử cuối cùng khỏi mảng và trả về phần tử đó.
    // let numbers = [1, 2, 3];
    // let numberRemoved = numbers.pop();  // [1, 2], removedElement = 3
    // console.log("Removed element:", numberRemoved)
    // numbers.push(4);
    // console.log(numbers)


    // let user = ["John", "Doe", 12, {id: 1, name: "John"}]
    // let removed = user.pop();
    // console.log(user)
    // console.log(removed)

    //3.forEach(): Thực thi một hàm với mỗi phần tử trong mảng.
    // let quanlities = [1, 2, 3];
    // quanlities.forEach(function (quanlity) { //tham so tu dat ten  quanlity tao ra de nhan ve tung phan tu trong mang sau khi loc
    //     const result = quanlity
    //     console.log("Result", result)

    // })
    // console.log(quanlities)
    // let numberss = [1, 2, 3];
    // numberss.forEach(function (num) {
    //     let doubledNumbers = num * 3;
    //     console.log("number:", doubledNumbers);  // Output: 1, 2, 3 (in ra từng phần tử)
    // });

    //4.map(): Thực thi một hàm với một phần tử trong mảng.
    // let products = ["Banana", "Apple", "Orange"];
    // let showProuct = products.map(product => product[2]);  // [2, 4, 6] index bat dau bang so 0
    // console.log("Map",showProuct);
    // console.log("Product:", products); //khi nao hoc toi map du lieu tu API

    //Chuoi - String
    //1.toUpperCase(), toLowerCase(): Chuyển đổi toàn bộ chuỗi thành chữ thường,hoa.

    // let name = 1;
    // // console.log(name.toLowerCase())
    // let name2 = "1";
    // if(name === name2){
    //     console.log("OK")
    // }
    // else{
    //     console.log("Not OK")
    // }
    // product Name  = "Laptop";
    // nguoi dung tui em, nhap vao input search "laptop"
    // console.log(greeting.toUpperCase());  // "HELLO"
    // console.log(greeting.toLowerCase());  // "HELLO"

    //     let str = 'Hello World'
    //    const result = str.toLowerCase()
    //    console.log(result)



    //2.trim(): Loại bỏ khoảng trắng ở đầu và cuối chuỗi.
    // let name = "   John Doe   ";
    // console.log(name);
    // let trimmedName = name.trim();  // "John Doe"
    // console.log(trimmedName);

    //doituong Object
    //1.Object.keys(): Trả về một mảng chứa tất cả các khóa (keys) của đối tượng.
    //2.Object.value(): Trả về một mảng chứa tất cả gia tri (value) của đối tượng.

    // let person = { name: "Alice", age: 25 };
    // // console.log(person.name)
    // console.log(Object.keys(person));  // ["name", "age"]
    // console.log(Object.values(person));  // ["name", "age"]

    // 3.Object.entries(): Trả về một mảng các cặp [key, value] của đối tượng.

    // let person = { name: "Alice", age: 25 };
    // console.log(person);  // [["name", "Alice"], ["age", 25]]
    // console.log(Object.entries(person));  // [["name", "Alice"], ["age", 25]]


    return (
        <div>

        </div>
    );
};

export default Bai4;