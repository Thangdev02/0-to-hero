import React, { useState } from 'react';

const Lesson9Event = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);//ab
    }
    //onChange event se sai khi minh muon gan 1 du lieu tu input
    //onChange no se chay khi cai input do co su thay doi

    const handleClick = (name) => {
        alert(`${name}Hello`);
    }

    // const clickMe = ()=> {
    //     console.log("CLicked")
    // }

    // const [name, setName] = useState("");

    // const handleSubmit = (event) => {
    //     event.preventDefault(); // thang nay la 1 dong code dung de ngan chan hanh vi ngoai le cua form
    //     //vi du: dang nhap du lieu chua xong thi tu submit
    //     alert(`Form submitted with name: ${name}`);
    // };

    //OnHover
    const [hover, setHover] = useState(false);

    // //onFocus
    const [focus, setFocus] = useState(false);

    const clickToHello = (name) =>{
        alert("Hello",name);
    }

    return (
        <div>
            {/* OnChange */}
            <input type="text" onChange={handleChange} />
            <p>{value}</p>

            {/* OnClick */}
            <button onClick={() => handleClick("Thang")}>Submit</button> 
                {/* <button onClick={clickMe}>CLick</button> */}
        {/* <h1 onClick={clickToHello}>
        Click o day
        </h1> */}
            {/* <button onClick={clickToHello}>
                Click me
            </button> */}
            {/* OnHover */}
                {/* nen sai css */}
            {/* <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    width: "200px",
                    height: "100px",
                    backgroundColor: hover ? "lightblue" : "lightgray",
                    textAlign: "center",
                    lineHeight: "100px",
                }}
            >
                {hover ? "Hello!" : "Hover over me!"}
            </div> */}

 {/* Khi nao muon gui cai form thi ha sai onSUbmit, con bth thi sai onCLick */}
            {/* <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <button type="submit">Submit</button>
            </form>  */}


            <div>
                <input
                    type="text"
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    placeholder="Focus on me"
                />
                <p>{focus ? "Input is focused!" : "Input is not focused!"}</p>
            </div>

        </div>




    );
};

export default Lesson9Event;