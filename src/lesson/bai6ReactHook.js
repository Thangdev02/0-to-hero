import React, { useEffect, useRef, useState } from 'react';
import LoginForm from '../components/loginForm';
import axios from 'axios';

const Bai6ReactHook = () => {

    const inputRef = useRef(null); //useRef, tuong tac voi giao dien
    // const [names, setNames] = useState('');
    // const [display, setDisplay] = useState('');
    // const handleShownamefromInput=()=>{
    //     setDisplay(names);
    // }
    // const refest = () => {
    //     setNames([]);
    //     setDisplay('');

    // }
    // const handleChange=(e)=>{
    //     setNames(e.target.value)
    // }

   
   //Cho phep minh chay 1 cai gi do khi vua vao trang
 //useEffect la 1 cai hook, va no se chay khi trang duuoc goi toi

    const handleFocus = () => {
        if (inputRef.current) {
          inputRef.current.focus(); // Focus the input using the ref
        }
      };

const [count, setCount] = useState(0);


useEffect(() => {
    setCount(count + 1)
},[]) //[] dependencies list check xemm cai state nao thay doi thi moi rerender
//rerender khi count thay doi thi no se tu dong chay
    return (
        <div>
            {/* <input type="text" onChange={handleChange}></input>
            <button onClick={handleShownamefromInput}>Show name</button>
            <button onClick={refest}>Refest</button>
            <h1>Display: {display}</h1> */}


            <input type="text" ref={inputRef} placeholder="Type something..." />
            <button onClick={handleFocus}>Focus Input</button>

            <h1>Count: {count}</h1>
            {/* <button onClick={tang}>Increase</button>
            <button onClick={giam}>Decrease</button>  */}
        </div>
    );
};

export default Bai6ReactHook;
