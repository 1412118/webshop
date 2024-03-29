import * as yup from 'yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar, LinearProgress, FormControlLabel, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styled from 'styled-components';
import InputField from '~/components/FormCotrols/InputField';
import PasswordField from '~/components/FormCotrols/PasswordField';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

const schema = yup
    .object({
        email: yup.string().required('Please enter your email').email('Email is invalid'),
        password: yup
            .string()
            .required('Please enter your password')
            .min(8, 'Your password must be at least 8 characters'),
    })
    .required();

function LoginForm(props) {
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const theme = createTheme();

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
        form.reset();
    };

    const { isSubmitting } = form.formState;

    return (
        <div>
            <Container component="main" sx={{ display: 'flex', justifyContent: 'center' }}>
                <StyledBox
                    sx={{
                        width: '450px',
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid #dadce0',
                        borderRadius: '8px',
                        padding: '48px 30px 36px',
                    }}
                >
                    {isSubmitting && <StyledLinearProgress />}
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <InputField name="email" label="Email" form={form} />
                        <PasswordField name="password" label="Password" form={form} />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                    </form>
                    <Grid container>
                        <Grid item xs>
                            <Link to="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </StyledBox>
            </Container>
        </div>
    );
}

const StyledBox = styled(Box)`
    position: relative;
`;

const StyledLinearProgress = styled(LinearProgress)`
    && {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

export default LoginForm;
