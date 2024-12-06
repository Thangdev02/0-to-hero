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
    const datas = [
        {
            id: 1,
            name: "Product 1",
            price: 10,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BALPyvmwlAw6j-uyzkaWtRp21EIh9TxJ2A&s",
            description: "Product 1 description"
        },
        {
            id: 2,
            name: "Product 2",
            price: 20,
            image: "https://lh4.googleusercontent.com/proxy/L0KtCLmIB7tSa43ZWzSGQJU0bpbG3SVV22eN5HQKX__jgeR-bDyh8UQBCMcg40GfuWqkTl65kUWFGLDXzGu6mgPZpFOPV_9FNBOqQz7vPT6vFou1vsVxmvwFhtRu-dtudPYVwwSW1Y0U9-95287jT2oYzaO6jxzI9U7tu9t2",
            description: "Product 2 description"
        },
        {
            id: 3,
            name: "Product 3",
            price: 30,
            image: "https://images.unsplash.com/photo-1606109886019-5d82d0611b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "Product 3 description"
        },
    ]

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://67526dd0d1983b9597b62d05.mockapi.io/users').then(response => {
            setUsers(response.data)
        })
    },[])
    console.log(users);

    // const fakeData = {
    //     id: 1,
    //     name: "Product 1",
    //     price: 10,
    //     image: "https://images.unsplash.com/photo-1606109886019-5d82d0611b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //     description: "Product 1 description"
    // }
    // const dataName = 'Product 1';
    //map()
    //API: useState, useEffect (react hooks) //RestFul API
    //: declare const, let, var
    //method map() //lap qua cai mang do, lay ra cac phan tu
    //tinh chat unique (doc nhat, duy nhat)
    return (
        <div>
            {/* <Profile name = "Jane" age = "30" phone = "0123456789" address = "Ha Noi"/> */}
            <h1>Store Page</h1>
            {users.map(user => (
                <Card key={user.id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={user.image}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {user.address.city}  Street: {user.address.street}
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
            ))}
        </div>
    );
};

export default ServicesPage;