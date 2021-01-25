import React from 'react';
import { Controller, useForm } from "react-hook-form";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    Container, makeStyles, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField,
    CssBaseline, Button, Avatar
} from '@material-ui/core'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        // Fix IE 11 issue.
        marginTop: theme.spacing(5),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const { register, handleSubmit, watch, errors, control } = useForm();
    const onSubmit = data => {
        console.log(data);
    }; //
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                        <Controller
                                rules={{
                                    required: true,
                                }}
                                name="firstname"
                                control={control}
                                defaultValue=""
                                render={({ onChange, value }) =>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        onChange={onChange}
                                        value={value}
                                        fullWidth
                                        label="Firts Name"
                                        autoComplete="firstname"
                                        autoFocus

                                    />}
                            />
                            {errors.firstname?.type == "required" && <span style={{ color: "red" }}>valor requerido</span>}
                      

                        </Grid>
                        <Grid item xs={12} sm={12}>

                            <Controller
                                rules={{
                                    required: true,
                                }}
                                name="lastname"
                                control={control}
                                defaultValue=""
                                render={({ onChange, value }) =>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        onChange={onChange}
                                        value={value}
                                        fullWidth
                                        label="Last Name"
                                        autoComplete="lastname"
                                        autoFocus

                                    />}
                            />
                            {errors.lastname?.type == "required" && <span style={{ color: "red" }}>valor requerido</span>}
                      

                        </Grid>
                        <Grid item xs={12}>

                        <Controller
                                rules={{
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                }}
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ onChange, value }) =>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        onChange={onChange}
                                        value={value}
                                        fullWidth
                                        label="Email Address"
                                        autoComplete="email"
                                        autoFocus

                                    />}
                            />
                            {errors.email?.type == "required" && <span style={{ color: "red" }}>valor requerido</span>}
                            {errors.email?.type == "pattern" && <span style={{ color: "red" }}>correo inválido</span>}

                        </Grid>
                        <Grid item xs={12}>
                        <Controller
                                rules={{
                                    required: true,
                                }}
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ onChange, value }) =>
                                    <TextField
                                    type="password"
                                        variant="outlined"
                                        margin="normal"
                                        onChange={onChange}
                                        value={value}
                                        fullWidth
                                        label="Password"
                                        autoComplete="password"
                                        autoFocus

                                    />}
                            />
                            {errors.password?.type == "required" && <span style={{ color: "red" }}>valor requerido</span>}
                      
                        </Grid>


                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}