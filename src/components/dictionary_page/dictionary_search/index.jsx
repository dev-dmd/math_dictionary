import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 0px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    opacity: '.8'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: '5px'
  },
  iconButton: {
    padding: 10,
  },
}));


function DictionarySearch({ search, handleSearch, onRequestSearch }) {
  const classes = useStyles();
  
  return (
    <div>
      <Paper component="form" className={classes.root}>
        <InputBase
          value={search}
          onChange={handleSearch}
          className={classes.input}
          placeholder="Search words in Serbian or English"
          inputProps={{ 'aria-label': 'Search words in Serbian or English' }}
        />
        <IconButton onClick={onRequestSearch} type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

export default DictionarySearch;
