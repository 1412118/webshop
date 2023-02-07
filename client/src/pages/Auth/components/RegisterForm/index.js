import * as React from 'react';
import { PropTypes } from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import InputField from '~/components/Layout/common/FormCotrols/InputField';
import PasswordField from '~/components/Layout/common/FormCotrols/PasswordField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar } from '@mui/material';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

const schema = yup
    .object({
        fullName: yup
            .string()
            .required('Please enter your full name')
            .test('The email should at least two words', 'Please enter at least two words', (value) => {
                //console.log('value', value);
                return value.split(' ').length >= 2;
            }),
        email: yup.string().required('Please enter your email').email('Email is invalid'),
        password: yup
            .string()
            .required('Please enter your password')
            .min(8, 'Your password muat be at least 8 characters'),
        confirmPassword: yup
            .string()
            .required('Please confirm your password')
            .oneOf([yup.ref('password')], 'Password and Confirm Password does not match'),
    })
    .required();

function RegisterForm(props) {
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    });

    const theme = createTheme();

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <InputField name="fullName" label="Full Name" form={form} />
                    <InputField name="email" label="Email" form={form} />
                    <PasswordField name="password" label="Password" form={form} />
                    <PasswordField name="confirmPassword" label="Confirm Password" form={form} />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign Up
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default RegisterForm;
