import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Bai7Props from '../lesson/bai7Props';
import Lesson9Event from '../lesson/lesson9Event';
import Lesson8Params from '../lesson/lesson8Params';


const Notfound = () => {
const [name, setName] = useState('');
const [data, setData] = useState([]);
const [counst, setCounst] = useState(0);

// const fetchApi=() => {
//     axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
//         setData(res.data);
//         console.log(res.data);
//     })
// }
//     useEffect(() => { //render rerender
//         console.log('useEffect ran!');
//         setCounst(counst +1);
//         // fetchApi();
//     },[]); //denpendency list, cai state nao duoc bo vao delist thi khi state do co thay doi, no se rereden(chay lai useEffect)

    return ( 
        <div>
         {/* <h1>404 NotFound Page</h1>
         <h1>Name is {name || 'No Name'}</h1>
         <h1>Count is {counst}</h1> */}
         <Lesson9Event></Lesson9Event>
        </div>
      
    );
};

export default Notfound;