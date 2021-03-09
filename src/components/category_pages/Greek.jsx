import React from 'react';
import { Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Greek = () => {
  const classes = useStyles();
  return (
    <div>
      <Toolbar>
        <Link exact to="/math_dictionary">
            <Button
              variant="contained"
              color="primary"
              className={classes.menuButton}
              startIcon={<KeyboardReturnIcon />}
            >
              go back
            </Button>          
          </Link>
      </Toolbar>
        <h2>Category Page</h2>
        <h3>Greek</h3>
    </div>
  )
}

export default Greek;
