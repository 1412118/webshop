import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
    const { name, label, form } = props;
    const { errors } = form.formState;
    let hasError = !!errors[name];
    return (
        <>
            <Controller
                name={name}
                control={form.control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        id={name}
                        label={label}
                        name={name}
                        error={hasError}
                        helperText={hasError ? errors[name]?.message : ''}
                    />
                )}
                rules={{ required: true }}
            />
            {/* {error[`${name}`] !== undefined && (
                <p
                    style={{ color: 'red', fontSize: '0.75rem', marginLeft: '14px', letterSpacing: '0.0333em' }}
                    role="alert"
                >
                    {error[`${name}`].message}
                </p>
            )} */}
        </>
    );
};

InputField.propTypes = {};

export default InputField;
