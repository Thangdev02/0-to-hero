import React from 'react';

const Profile = (props) => {
    return (
        <div>
            <div>
                <h1>Name: {props.name}</h1>
                <h1>Age: {props.age}</h1>
                <h1>Phone: {props.phone}</h1>
                <h1>Address: {props.address}</h1>
            </div>
        </div>
    );
};

export default Profile;