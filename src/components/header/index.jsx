import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SignedOutLinks from '../header/SignedOutLinks';
import SignedInLinks from '../header/SignedInLinks';
import video_icon from './videoBtn.svg';
import Tooltip from '@material-ui/core/Tooltip';
import VideoModal from '../video_modal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      boxShadow: 'none',
      backgroundColor: 'transparent!important'
    }
  },
  grow: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      display: 'block',
    }
  },
  toolbar: {
    justifyContent: 'space-evenly',
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
    textAlign: 'center',
    padding: '15px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
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
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
    '& > .MuiIconButton-label img': {
      display: 'flex',
      alignItems: 'center'
    }
  }
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

export default function Header({ handleLoginClick }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography className={classes.mobTitle} variant="h6" noWrap>
          Math Dictionary
        </Typography>
        <Toolbar className={classes.toolbar}>        
            <Typography className={classes.title} variant="h6" noWrap>
              Serbian - English Mathematical Dictionary
            </Typography>
            <div className={classes.grow} />
            <LightTooltip title="Video tutorial">
              <IconButton className={classes.video_icon} onClick={handleOpen}>
                <img height="50%" width="50%" src={video_icon} alt="video tutorial" />           
              </IconButton>
            </LightTooltip>      
            <SignedOutLinks handleLoginClick={handleLoginClick} />
            <SignedInLinks handleLoginClick={handleLoginClick} />
        </Toolbar>        
      </AppBar>
      <VideoModal onClose={handleClose} open={open} />
    </div>
  );
}
