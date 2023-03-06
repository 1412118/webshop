import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Controller } from 'react-hook-form';
import { FormHelperText, OutlinedInput } from '@mui/material';

const PasswordField = (props) => {
    const { name, label, form } = props;
    const { errors } = form.formState;
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((prevState) => !prevState);
    let hasError = !!errors[name];
    return (
        <FormControl error={hasError} variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                render={({ field }) => (
                    <OutlinedInput
                        {...field}
                        id={name}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={label}
                        //error={hasError ? true : false}
                    />
                )}
            />
            {
                <FormHelperText error id="username-error">
                    {errors[name]?.message}
                </FormHelperText>
            }
        </FormControl>
    );
};

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
};

export default PasswordField;
