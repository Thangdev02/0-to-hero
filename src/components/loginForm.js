import React from 'react';
import InputCustome from '../common/inputCustome';
import ButtonComponents from '../common/ButtonComponents';

const LoginForm = () => {
    return (
        <div>
            <h1>LoginForm</h1>
            <form>
                <div>
                    <label>Email</label>
                   <InputCustome></InputCustome>
                   <ButtonComponents></ButtonComponents>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;