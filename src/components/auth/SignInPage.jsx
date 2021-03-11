import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
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
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <AppBar position="static" color="inherit" >
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
                Sing In
              </Typography>
              <Typography variant="caption" component="p" className={classes.pos} color="textSecondary">
                Sign up on the internal platform
              </Typography>
            </Paper>
            <form className={classes.textFields} noValidate autoComplete="off">
              <Paper elevation={0} className={classes.paper}>
                <FormControl variant="outlined">
                  <TextField
                    id="outlined-email-input"
                    label="Email Address"
                    type="email"
                    autoComplete="current-email"
                    variant="outlined"
                  />     
                  <FormHelperText id="my-email-text">We'll never share your email.</FormHelperText>        
                </FormControl>      
              </Paper>             
              <Paper elevation={0} className={classes.paper}>
              <FormControl variant="outlined">
              <InputLabel htmlFor="component-simple">Password</InputLabel>
                <OutlinedInput
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
                      onMouseDown={handleMouseDownPassword}
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
            </form>
          </CardContent>
          <CardActions>
            <Link to="/login">
              <Button size="small">Having an account</Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}

export default SignInPage;
