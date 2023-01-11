import React from 'react';
import PropTypes from 'prop-types';

import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
    const handelSubmit = (values) => {
        console.log('Form Submit', values);
    };

    return (
        <div>
            <RegisterForm onSubmit={handelSubmit} />
        </div>
    );
}

export default Register;
