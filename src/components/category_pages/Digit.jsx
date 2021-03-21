import React from 'react';
import { Button, Container, Grid, Paper, Toolbar, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import {
  Link
} from "react-router-dom";
import DatatableDigit from '../datatable_digit';
import DatatabelExample from '../datatable_examples';
import data from '../dictionary_page/category_data/category.json';
import Header from '../header';
import Footer from '../footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity: '.9'
  },
  page: {
    backgroundColor: '#262626'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.contrastText
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  paperWraper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent'
  },
  title: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  pos: {
    marginBottom: 12,
  },
  example: {
    display: 'flex',
    alignItems: 'stretch'
  }
}));

const Digit = () => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Header />
      <Toolbar className={classes.toolbar}>
        <Grid items xs={3}>
          <Link exact to="/">
            <Button
              variant="outline"
              className={classes.menuButton}
              startIcon={<KeyboardReturnIcon />}
            >
              go back
            </Button>          
          </Link>
        </Grid>
        <Grid items xs={6}>
          <Typography className={classes.title}  variant="h4" component="h2">
            Place value of Digits
          </Typography>
        </Grid>
        <Grid items xs={3}>
          {/*Empty block */}
        </Grid>
      </Toolbar>
      {/* Category Content */}
      <div className={classes.root}>
       <Container maxWidth="xl">
        <Paper elevation={0} className={classes.paperWraper}>
          <Grid container spacing={3}>
            <Grid className={classes.example} item xs={6}>            
                <Card>
                  <CardContent>
                    <DatatabelExample data={data.category[0].example}/>
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <DatatableDigit data={data.category[0].digits}/>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
       </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Digit;
