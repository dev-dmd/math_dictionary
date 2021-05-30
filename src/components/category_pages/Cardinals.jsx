import React from 'react';
import { Button, Container, Grid, Paper, Toolbar, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import {
  Link
} from "react-router-dom";
import DatatableCardinals from '../datatable_cardinals';
import DatatableExampleTwo from '../datatable_cardinals/example_two';
import DatatableExample from '../datatable_cardinals/example';
import data from '../dictionary_page/category_data/category.json';
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
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 26,
    },
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

function Cardinals() {
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
              Cardinal Numbers
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
                <Grid className={classes.example} item xs={12} md={6}>            
                    <Card>
                      <CardContent>
                        <DatatableExample data={data.category[2].cardinal_page[1].example}/>
                        <DatatableExampleTwo data={data.category[2].cardinal_page[2].example_two}/>
                      </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper className={classes.paper}>
                    <DatatableCardinals data={data.category[2].cardinal_page[0].cardinal}/>
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

export default Cardinals;
