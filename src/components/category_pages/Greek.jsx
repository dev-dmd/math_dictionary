import React from 'react';
import { Button, Container, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Datatable from '../datatable_greek';
import data from '../dictionary_page/category_data/category.json';
import {
  Link
} from "react-router-dom";
import Header from '../header';
import Footer from '../footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity: '.9'
  },
  page: {
    backgroundColor: '#262626',
    minHeight: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.contrastText
  },
  title: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center'
  },
}));

function Greek() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
    <Header />
      <Toolbar>
        <Grid items xs={3}>
          <Link exact to="/">
              <Button
                variant="outline"
                color=""
                className={classes.menuButton}
                startIcon={<KeyboardReturnIcon />}
              >
                go back
              </Button>          
            </Link>
        </Grid>
        <Grid items xs={6}>
          <Typography className={classes.title}  variant="h4" component="h2">
            Greek Alphabet
          </Typography>
        </Grid>
        <Grid items xs={3}>
        {/*Empty block */}
        </Grid>
      </Toolbar>
      <div className={classes.root}>
       <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <Datatable data={data.category[1].greek}/>
            </Paper>
          </Grid>
        </Grid>
       </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Greek;
