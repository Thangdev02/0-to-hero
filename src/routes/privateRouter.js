import React, { useEffect } from 'react';
import { use } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ element: Element, role, ...rest }) => { //Element vdu ContactPage, StorePage 
    const key = JSON.parse(localStorage.getItem('key'));
     //...rest tao ra 1 bien tam thoi, luu lai trang hien tai

     useEffect(() => {
        console.log(key)

     })
     //parse xong string ve Json
    //Da co key
    if (!key) {
        return <Navigate to="/login" />
    }

    if (key && key.role !== role) { //user
        return <Navigate to="/*" />
    }

    return <Element {...rest} />
};

export default PrivateRouter;