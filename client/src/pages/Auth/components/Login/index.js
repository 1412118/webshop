import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Header from '~/common/Header';
import { login } from '~/store/Redux/user/userSlice';
import LoginForm from '../LoginForm';

Login.propTypes = {};

function Login(props) {
    const [value, setValue] = useState({
        email: '',
        password: '',
        message: '',
        success: false,
    });

    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        try {
            console.log('Form Submit', values);
            const { email, password, message, success } = { ...values, message: '', success: false };
            const action = login({ email, password });
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('User logged in: ', user);
        } catch (e) {
            console.log('Failed to login');
        }
    };

    const redirectUser = () => {
        if (value.success === true) {
            return <Navigate to="/" />;
        }
    };

    return (
        <>
            <Header />
            <LoginForm onSubmit={handleSubmit} />
            {redirectUser()}
        </>
    );
}

export default Login;
