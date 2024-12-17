import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ emlement: Element, role, ...rest }) => {
    const key = JSON.parse(localStorage.getItem('key'));
    //parse xong string ve Json
    //Da co key
    if (!key) {
        return <Navigate to="/login" />
    }

    if (key && key.role !== role) {
        // if (key.role === 'admin') {
        //     return <Navigate to="/admin" />
        // } else {
        //     return <Navigate to="/" />
        // }
        return <Navigate to="/*" />
    }

    return <Element {...rest} />
};

export default PrivateRouter;