import React from 'react';

const SubmitNameButton = (props) => {
    //la thang props thi tui em se truy cap duoc vao property, con thang params, no co tinh chat desctructuring, tui em dat ten thi chih goi duoc toi do thoi
    return (
        <div>
            <h1>Profile of {props.fullname}</h1>
            <button style={{ background: 'orange', padding: '20px', 
            borderRadius: '16px', border: 'none', fontWeight: 'bold', color:props.color }}>{props.name}</button>
        </div>
    );
};

export default SubmitNameButton;