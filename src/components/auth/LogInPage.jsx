import React, { useState } from 'react';
import './style.css';
import { AppBar, Button, Card, CardActions, CardContent, Container, FormControl, FormHelperText, IconButton, InputLabel, TextField, Toolbar, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link, NavLink } from 'react-router-dom';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useAuth } from '../auth/hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'calc(100% - 16px)',
    margin: '8px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    borderRadius: '25px',
    color: '#f4f4f4',
    padding: '3px 10px',
    backgroundColor: 'purple'
  },
  text: {
    flexGrow: 1,
    marginLeft: theme.spacing(2)
  },
  container: {
    padding: '100px 0'
  }
}));

const SignInPage = ({ handleHomeClick }) => {
  const classes = useStyles();
  const { sendSignInLinkToEmail } = useAuth();
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSubmit = async () => {    
   await sendSignInLinkToEmail(values.email)
  }

  return (
    <>
      <AppBar className={classes.root} position="static" color="inherit" >
        <Container maxWidth="sm">
          <Toolbar>          
            <Typography variant="h6" className={classes.title}>
              New
            </Typography>
            <Typography variant="caption" className={classes.text}>
              Visit our website and find out more
            </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <FacebookIcon />
            </IconButton>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <LinkedInIcon />
            </IconButton>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <InstagramIcon />
              </IconButton>
            </a>
            <NavLink to="/" onClick={handleHomeClick}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">           
                <HomeIcon />           
              </IconButton>            
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="sm" className={classes.container}> 
        <Card className={classes.root}>
          <CardContent>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant="h5" component="h2" gutterBottom>
                Log In
              </Typography>
              <Typography variant="caption" component="p" color="textSecondary">
                Log in on the internal platform
              </Typography>
            </Paper>
            <form onSubmit={handleSubmit} className={classes.textFields} noValidate autoComplete="off">
              <Paper elevation={0} className={classes.paper}>
                <FormControl variant="outlined">
                  <TextField
                    name='email'
                    id="outlined-email-input"
                    label="Email Address"
                    type="email"
                    autoComplete="current-email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange('email')}
                  />     
                  <FormHelperText id="my-email-text">We'll never share your email.</FormHelperText>        
                </FormControl>      
              </Paper>             
              <Paper elevation={0} className={classes.paper}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-simple">Password</InputLabel>
                    <OutlinedInput
                    name='password'
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    label="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                  }
                  labelWidth={70}
                  />
                  <FormHelperText id="my-password-text">We'll never share your password.</FormHelperText>
                </FormControl>            
              </Paper>
              <Paper elevation={0} className={classes.paper}>
                  <Button type="submit" color="primary" variant="contained" fullWidth>Log in</Button>
              </Paper>
            </form>
          </CardContent>
          <CardActions>
            <Link to="/signin">
              <Button style={{textTransform: 'lowercase'}} size="small">Create new account</Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}

export default SignInPage;
