import React from 'react';
import config from '../common/configValue';



const Bai5Config = () => {

    return (
        <div >
            <h1 style={{color: config.colors.mauCam}}>This is Color Config</h1>
            <h1  style={{color: config.colors.mauCam}}>This is Color Config2</h1>
            <h1  style={{color: config.colors.mauCam}}>This is Color Config2</h1>
            <h1  style={{color: config.colors.mauCam}}>This is Color Config2</h1>
            <h1  style={{color: config.colors.mauCam}}>This is Color Config2</h1>
            <h2 style={{color: config.colors.mauXanh}}>{config.sucess.loginSuccess}</h2>
        </div>
    );
};

export default Bai5Config;