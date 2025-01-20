import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Lesson9Event from '../lesson/lesson9Event';


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

// const handleCreateProduct = () => {
//     //callAPI axios.post(url, request body)
//     //fetchData()
//     //show ra dc cai list api moi nhat
// }

//named function
function greeting(){
    
}
    return ( 
        <div>
         {/* <h1>404 NotFound Page</h1>
         <h1>Name is {name || 'No Name'}</h1>
         <h1>Count is {counst}</h1> */}
         {/* <Lesson9Event></Lesson9Event> */}
         <h1>Notfound</h1>
        </div>
      
    );
};

export default Notfound;