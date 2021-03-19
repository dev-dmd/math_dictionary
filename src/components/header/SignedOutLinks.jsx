import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  navBtn: {
    color: '#f4f4f4',
    fontSize: '14px',
    textTransform: 'capitalize',
    border: '2px solid #f4f4f4',
    borderRadius: '20px',
    padding: '3px 15px',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',      
    },
  },
  navLink: {
    padding: '10px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    justifyContent: 'space-between',
   
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

export default function SignedOutLinks({ handleLoginClick }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sectionDesktop}>
        <LightTooltip title="Admin Stranica">
          <NavLink exact to="/dashboard" className={classes.navLink} >
            <Button color="inherit" className={classes.navBtn}>
              Dashboard
            </Button>     
          </NavLink>
        </LightTooltip>
        <LightTooltip exact title="Prijavite se">
          <NavLink to="/login" className={classes.navLink} onClick={handleLoginClick} >
            <Button color="inherit" className={classes.navBtn}>
            Log in
            </Button>     
          </NavLink>
        </LightTooltip>
        <LightTooltip title="Napravite nalog">
          <NavLink to="/signin" className={classes.navLink} onClick={handleLoginClick}>
            <Button color="inherit" className={classes.navBtn}>
              Sign In
            </Button>     
          </NavLink>
        </LightTooltip>
      </div>
      <div className={classes.sectionMobile}>
        <NavLink to="/dashboard" className={classes.navLink} >
          <Button color="inherit" className={classes.navBtn}>
            Dashboard
          </Button>     
        </NavLink>
        <NavLink to="/login" className={classes.navLink} onClick={handleLoginClick} >
          <Button color="inherit" className={classes.navBtn}>
            Log in
          </Button>     
        </NavLink>
      </div>
    </div>
  );
}