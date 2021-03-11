import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CategoryButtons() {
  const classes = useStyles();
  return ( 
    <Grid item xs>
      <Paper className={classes.paper}>
        <Link to="/math_dictionary/digit">
          <Button variant="contained">Digit</Button>
        </Link>
        <Link to="/math_dictionary/greek">
          <Button variant="contained" color="primary">
            Greek
          </Button>
        </Link>
      </Paper>
    </Grid>
  )
}

export default CategoryButtons;
