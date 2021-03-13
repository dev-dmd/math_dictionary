import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SignedOutLinks from '../header/SignedOutLinks';
import SignedInLinks from '../header/SignedInLinks';
import video_icon from './video_tutorial.svg';
import Icon from '@material-ui/core/Icon';
import PaletteDrawer from '../palette_drawer';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    '& > *': {
      backgroundColor: 'transparent!important'
    }
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
  video_icon: {
    color: '#fff'
  }
}));

export default function PrimarySearchAppBar({ handleLoginClick, handleOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>        
          <Typography className={classes.title} variant="h6" noWrap>
            Serbian - English Mathematical Dictionary
          </Typography>
          <Typography className={classes.mobTitle} variant="h6" noWrap>
            Math Dictionary
          </Typography>
          <div className={classes.grow} />
          <PaletteDrawer />
          <IconButton className={classes.video_icon} onClick={handleOpen}>
            <Icon>
              <img height="100%" width="100%" src={video_icon}/>
            </Icon>
          </IconButton>
          <SignedOutLinks handleLoginClick={handleLoginClick} />
          <SignedInLinks handleLoginClick={handleLoginClick} />
        </Toolbar>
      </AppBar>   
    </div>
  );
}
