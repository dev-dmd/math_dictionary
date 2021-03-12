import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    borderRadius: '20px',
    border: '3px solid #fff',
    backgroundColor: 'transparent',
    boxSizing: 'border-box'
  },
  media: {
    width: '70%',
    height: 100,
    backgroundSize: 'contain'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    color: '#f4f4f4'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  btn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent!important'
  }
}));

function CategoryButtons({ name, icon, srb, eng }) {
  const classes = useStyles();
  return (     
    <Link to={`/math_dictionary/${name}`}>      
        <Card className={classes.root}>
          <CardActionArea className={classes.btn}>
          <CardMedia
            className={classes.media}
            image={icon}
            title={name}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="caption">
              {srb}
            </Typography>
            <Divider variant="middle" style={{backgroundColor: '#a3a3a3'}} />
            <Typography variant="caption">
              {eng}
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>     
    </Link>     
  )
}

export default CategoryButtons;
