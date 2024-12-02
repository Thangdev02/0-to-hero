import React, { useRef } from 'react';
import LoginForm from '../components/loginForm';

const Bai6ReactHook = () => {
    const inputRef = useRef(null);


    

    // // useEffect không có dependency array
    // useEffect(() => {
    //     console.log("Effect ran after every render!");
    // });  // Chạy sau mỗi render (mỗi khi component render lại)

    // // useEffect với dependency array là [count]
    // useEffect(() => {
    //     console.log("Effect ran because 'count' changed!");
    // }, [count]);  // Chạy khi count thay đổi

    //useState //tao 1 state luu tru gia tri co the thay doi// khong bi anh huong boi let const var

    //useRef
    const handleFocus = () => {
        // Truy cập và focus vào input element khi nút được nhấn
        inputRef.current.focus();
      };
    return (
        <div>
            {/* <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Count</button> */}
            <input ref={inputRef} type="text" placeholder="Click button to focus" />
            <button onClick={handleFocus}>Focus Input</button>

                <LoginForm />
        </div>
    );
};

export default Bai6ReactHook;
