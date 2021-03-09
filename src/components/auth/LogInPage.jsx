import React from 'react';
import { AppBar, Button, Card, CardActions, CardContent, Container, FormControl, FormHelperText, IconButton, TextField, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
            <Typography variant="h5" component="h2" gutterBottom>
              Log In
            </Typography>
            <Typography variant="caption" component="p" className={classes.pos} color="textSecondary">
              Log in on the internal platform
            </Typography>
            <form className={classes.textFields} noValidate autoComplete="off">
              <div>
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
              </div>             
              <div>
                <FormControl variant="outlined">
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                  />
                  <FormHelperText id="my-password-text">We'll never share your password.</FormHelperText>
                </FormControl>            
              </div>
            </form>
          </CardContent>
          <CardActions>
            <Link to="/signin">
              <Button size="small">Create new account</Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}

export default SignInPage;
