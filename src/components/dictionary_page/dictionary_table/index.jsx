import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Datatable from '../../datatable';
import data from './dictionary.json';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
}));

function DictionaryTable() {
  const classes = useStyles();
console.log(data);
  return (
    <div className={classes.root}>
      <Datatable data={data} />
    </div>
  )
}

export default DictionaryTable;
