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
    color: theme.palette.primary.contrastText,
    backgroundColor: 'transparent'
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
          <Paper elevation={0} className={classes.paper}>
            Math Dictionary &copy; 2021 - {getCurrentYear()}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Index;