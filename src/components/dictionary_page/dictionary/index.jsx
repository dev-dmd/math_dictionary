import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CategoryButtons from '../category_buttons';
import DictionaryTable from '../dictionary_table';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      marginTop: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Dictionary() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
        {
          matches ? <CategoryButtons /> : null
        }          
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <DictionaryTable />
            </Paper>
          </Grid>
          {
            matches ? <CategoryButtons /> : null
          }
        </Grid>
      </div>
  )
}

export default Dictionary;
