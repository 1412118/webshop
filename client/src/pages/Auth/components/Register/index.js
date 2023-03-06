import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RegisterForm from '../RegisterForm';
import coreAPI from '~/components/api/coreAPI';

Register.propTypes = {};

function Register(props) {
    const [value, setValue] = useState({
        fullName: '',
        email: '',
        password: '',
        messsage: '',
        success: false,
    });

    const handelSubmit = (values) => {
        console.log('Form Submit', values);
        //console.log('props', props);
        const { fullName, email, password, error, success } = { ...values, message: '', success: false };
        coreAPI.register({ fullName, email, password }).then((data) => {
            console.log(data);
            return data;
        });
    };

    return (
        <div>
            <RegisterForm onSubmit={handelSubmit} />
        </div>
    );
}

export default Register;
