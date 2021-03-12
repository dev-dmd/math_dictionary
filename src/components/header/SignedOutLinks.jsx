import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  mobTitle: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  navBtn: {
    color: '#f4f4f4',
    fontSize: '14px',
    textTransform: 'capitalize',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function SignedOutLinks({ handleLoginClick }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sectionDesktop}>
        <NavLink to="/dashboard" >
          <Button color="inherit" className={classes.navBtn}>
            Dashboard
          </Button>     
        </NavLink>
        <NavLink to="/login" onClick={handleLoginClick} >
          <Button color="inherit" className={classes.navBtn}>
          Log in
          </Button>     
        </NavLink>
        <NavLink exact to="/signin" onClick={handleLoginClick}>
          <Button color="inherit" className={classes.navBtn}>
          Sign In
          </Button>     
        </NavLink>
      </div>
      <div className={classes.sectionMobile}>
        <NavLink to="/dashboard" >
          <Button color="inherit" className={classes.navBtn}>
            Dashboard
          </Button>     
        </NavLink>
        <NavLink to="/login" onClick={handleLoginClick} >
        <Button color="inherit" className={classes.navBtn}>
        Log in
        </Button>     
        </NavLink>
      </div>
    </div>
  );
}