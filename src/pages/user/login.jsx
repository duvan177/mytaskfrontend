import React from 'react';
import {Avatar, Button, CssBaseline , TextField, FormControlLabel, Checkbox, Link, Paper, Box , Grid  , Typography} from '@material-ui/core/';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import  {useForm ,  Controller}  from "react-hook-form";




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
},  
}));  



export default function Login() {
    const { register, handleSubmit, watch, errors ,  control } = useForm();
const onSubmit = (data) => console.log('data form' ,data);

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid 
          item 
        style={{display:"flex" , justifyContent:"center"}}
          xs={12}>
          
              <Grid item xs={6} >
        <Controller
          rules={{ required: true, 
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, }}
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
      {errors.email?.type == "required" && <span style={{color:"red"}}>valor requerido</span>}
      {errors.email?.type == "pattern" && <span style={{color:"red"}}>correo inválido</span>}

                 <Controller
          rules={{ required: true , minLength:6}}
        name="password"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => 
         
        <TextField
        variant="outlined"
        margin="normal"
        onChange={onChange}
        value={value}
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      
      />    
    }
      />
     {errors.password?.type == "minLength" && <span style={{color:"red"}}>Debe contener mas de 6 carácteres</span>}
     {errors.password?.type == "required" && <span style={{color:"red"}}>valor requerido</span>}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
              </Grid>
      
              </Grid>
         
          
           
          </form>
        </div>
      </Grid>
    </Grid>
  );
}