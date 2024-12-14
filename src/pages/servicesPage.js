import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import { data } from 'react-router-dom';
import Data from '../data/Data';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const ServicesPage = () => {
    // 
    const [users, setUsers] = useState([]);
    const url = 'https://67526dd0d1983b9597b62d05.mockapi.io/users';
    const [newUser, setNewUser] = useState([
        {
            name: '',
            avartar: '',
            address: '',
            createdAt: new Date().toISOString(),
        }
    ]);
    const fetchUser = async () => {
        const reponse = await axios.get(url);
        const result = reponse.data;
        console.log("Result",result);
        const sortedUsers = result.sort((a, b) => b.id - a.id);
        setUsers(sortedUsers);
    }


    const userText = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const addUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, newUser);
            const result = response.data;
            setUsers((prevUsers) => [result, ...prevUsers]); // Thêm người dùng mới vào đầu danh sách
            alert('Thêm người dùng thành công');
            setNewUser({ name: '', avatar: '', address: '', createdAt: new Date().toISOString() }); // Reset form
        } catch (error) {
            throw new Error(error);
        }
    };

    // const addUser = async (e) => {
    //     e.preventDefault();
    //     try{
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(newUser)
    //         });
    //         const result = await response.json();
    //         setUsers((prevUsers) => [result, ...prevUsers]); // Thêm người dùng mới vào đầu danh sách
    //         setNewUser({ name: '', avatar: '', address: '', createdAt: new Date().toISOString() }); // Reset form

    //     }
    //     catch (error) {
    //         throw new Error(error);
    //     }
    // }
    useEffect(() => {
        fetchUser();
        console.log(users);
    }, [])
    console.log(users);

  



    return (
        <div>
            {/* <Profile name = "Jane" age = "30" phone = "0123456789" address = "Ha Noi"/> */}
            <h1>Store Page</h1>
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" value={newUser.name} onChange={userText}></input>
                    <label>Avartar</label>
                    <input type="text" name="avartar" value={newUser.avartar} onChange={userText}></input>
                    <label>Address</label>
                    <input type="text" name="address" value={newUser.address} onChange={userText}></input>
                    {/* <label>CreatedAt</label>
                    <input type="text" name="createdAt" value={newUser.createdAt} onChange={userText}></input> */}
                    <button onClick={addUser}>Add User</button>
                </form>
            </div>
            {users.length > 0 ? (
                users.map(user => (
                    <Card key={user.id} sx={{ maxWidth: 345 }}>
                        <h1>{user.id}</h1>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {user.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {user.phone}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">{user.email}</Button>
                            <Button size="small">{user.website}</Button>
                        </CardActions>
                    </Card>
                ))) : (
                <p>No Data...</p>
            )}
        </div>
    );
};

export default ServicesPage;