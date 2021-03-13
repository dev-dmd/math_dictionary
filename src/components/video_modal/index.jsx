import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '@material-ui/core';
import video from './mp4-pig.mp4';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #a3a3a3',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
  },
  media: {
    height: 270,
    [theme.breakpoints.down('sm')]: {
      width: 270,
      height: 150,
    },
  },
}));

export default function VideoModal({ open, onClose }) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={classes.media}>       
              <CardMedia
              component="video"
              controls
              
              src={video}
              title="math"
              />      
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}