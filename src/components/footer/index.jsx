import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

function Index() {
  const classes = useStyles();
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Math Dictionary &copy; 2021 - {getCurrentYear()}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Index;