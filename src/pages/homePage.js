import React, { useEffect } from 'react';
import Bai7Props from '../lesson/bai7Props';
import Lesson8Params from '../lesson/lesson8Params';
import CounterWithDelay from '../components/CounterComponents';
import TextComponents from '../components/TextComponents';
import Profile from '../components/Profile';
import Product from '../components/Product';
import Search from '../components/Search';
import ShowProduct from '../components/showProduct';
import Filter from '../components/Filter';
import CardProduct from '../components/CardProduct';

const HomePage = () => { //cha
    // // Hàm thực hiện công việc (nhiệm vụ chính)
    // // undefined
    // let x;
    // console.log(x); // undefined (chưa được gán giá trị)

    // function test() { }
    // console.log(test()); // undefined (hàm không trả về giá trị)

    // // null
    // let y = null;
    // console.log(y); // null (được gán một cách cố ý)

    // let obj = { name: "John" };
    // console.log("age", obj.age); // undefined (thuộc tính không tồn tại)


    function countAndDoSomething(count, callback) {
        // console.log("Counting:", count);

        // Sử dụng setTimeout để trì hoãn việc gọi callback
        setTimeout(() => {
            callback(); // Gọi callback sau khi trì hoãn
        }, 2000); // Trì hoãn 2 giây
    }

    // Hàm callback mà bạn muốn thực hiện sau khi đếm
    function sayHello() {
        // console.log("Hello! The count is done.");
    }

    // Gọi hàm chính với callback
    countAndDoSomething(5, sayHello);


    function showName(name, callback) {
        // console.log('Starting');

        setTimeout(() => {
            callback(name);
        }, 2000);
    }
    function getName(name) {
        // console.log(`Your name is ${name}`);
    }
    showName('Thang', getName);


    const handleSubmit = (event) => {
        event.preventDefault(); // 1 thang dung de chan xu ly thua, tranh chuyen trang khi form chua duoc submit
        console.log("Form submitted!");
    };

    const handleSubmit2 = (event) => {
        event.preventDefault(); // 1 thang dung de chan xu ly thua, tranh chuyen trang khi form chua duoc submit
        console.log("Form 2 submitted!");
    };


    //Onchange, onSubmit, onClick
    useEffect(() => {

        //on resize
        const handleResize = () => {
            console.log("Window resized to:", window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    //event, nhung su kien xay ra trong trang web
    return (
        <div>
            <CardProduct />
            {/* <Profile name = "John" age = "30" phone = "0123456789" address = "Ha Noi"/>
        <Product productName = 'Iphone' productPrice = '1000' quanlity = '10'/>*/}
            {/* <Lesson8Params />
            <ShowProduct />
            <Search />
            <Filter /> */}

            {/* <input
                type="text"
                onChange={(e) => console.log("Input value changed:", e.target.value)}
                placeholder="Type something"
            />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter text" />
                <button type="submit">Submit</button>
            </form>

                <input type="text" placeholder="Enter text" />
                <button onClick={handleSubmit2} type="submit">Click me</button>
 */}

            {/* <input
                type="text"
                onFocus={() => console.log("Input is focused")}
                onBlur={() => console.log("Input lost focus")}
                placeholder="Focus me"
            /> */}

            {/* <div
                onMouseEnter={() => console.log("Mouse entered")}
                onMouseLeave={() => console.log("Mouse left")}
                style={{ padding: "20px", backgroundColor: "lightgray" }}
            >
                Hover over me
            </div> */}

            {/* <input
                type="text"
                onKeyDown={(e) => console.log("Key down:", e.key)}
                onKeyUp={(e) => console.log("Key up:", e.key)}
                placeholder="Press a key"
            /> */}


            {/* <div
                style={{ height: "300px", overflowY: "scroll" }}
                onScroll={() => console.log("Scrolled!")}
            >
                <div style={{ height: "500px" }}>Scroll down</div>
            </div> */}

        </div>



    );
};

export default HomePage;