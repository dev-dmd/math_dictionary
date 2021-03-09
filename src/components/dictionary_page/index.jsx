import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function DictionaryPage() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
      <h1>Dictionary Page</h1>
        <Link to="/math_dictionary/digit">
          <Button variant="contained">Digit</Button>
        </Link>
        <Link to="/math_dictionary/greek">
          <Button variant="contained" color="primary">
            Greek
          </Button>
        </Link>
      </div>
  )
}

export default DictionaryPage;
