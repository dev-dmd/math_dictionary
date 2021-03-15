import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CategoryButtons from '../category_buttons';
import DictionaryTable from '../dictionary_table';
import DictionarySearch from '../dictionary_search';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Button Icons
import measurement_icon from '../category_icons/measurement.svg';
import digit_icon from '../category_icons/digit.svg';
import figure_icon from '../category_icons/figure.svg';
import greek_icon from '../category_icons/greek.svg';
import cardinal_icon from '../category_icons/cardinal.svg';
import polygons_icon from '../category_icons/polygons.svg';
import large_nums_icon from '../category_icons/large_num.svg';
import prefixes_icon from '../category_icons/prefixes.svg';
import fraction_icon from '../category_icons/fraction.svg';
import ordinal_nums_icon from '../category_icons/ordinal.svg';
import roots_icon from '../category_icons/roots.svg';
import trigonometry_icon from '../category_icons/sinusoid.svg';
// Button Icons
import category_data from '../category_data/category.json';
import CategoryDrawer from '../category_drawer';
console.log(category_data);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      marginTop: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent'
  },
  paperContainer: {
    padding: theme.spacing(2),
    borderRadius: '20px',
    border: `3px solid white`,
    backgroundColor: 'transparent'
  },
  btns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    width: '100%',
    gap: 10,
    backgroundColor: 'transparent'
  },
  btns_container: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

function createButtons(name, icon, srb_name, eng_name) {
  return { name, icon, srb_name, eng_name};
}

const rows = [
  createButtons('measurement', measurement_icon, 'merne jedinice', 'units of measurement'),
  createButtons('digit', digit_icon, 'place value of digit', 'mesna vrednost cifre'),
  createButtons('figures', figure_icon, 'place value of digit', 'mesna vrednost cifre'),
  createButtons('greek', greek_icon, 'place value of digit', 'mesna vrednost cifre'),
  createButtons('cardinal', cardinal_icon, 'place value of digit', 'mesna vrednost cifre'),
  createButtons('polygons', polygons_icon, 'place value of digit', 'mesna vrednost cifre'),
  createButtons('large-nums', large_nums_icon, 'place value of digit', 'mesna vrednost cifre'),
  createButtons('prefixes', prefixes_icon, 'place value of digit', 'mesna vrednost cifre'),
  createButtons('fraction', fraction_icon, 'place value of digit', 'mesna vrednost cifre'),
  createButtons('ordinal-num', ordinal_nums_icon, 'place value of digit', 'mesna vrednost cifre'),
  createButtons('roots', roots_icon, 'place value of digit', 'mesna vrednost cifre'),
  createButtons('trigonometry', trigonometry_icon, 'place value of digit', 'mesna vrednost cifre'),
];

function Dictionary() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
        <CategoryDrawer />
          <Grid className={classes.btns_container} item xs>
            <Paper elevation={0} className={classes.btns}>  
            {
              matches ? rows.slice(0,6).map(row => (
                <CategoryButtons
                  name={row.name}
                  icon={row.icon}
                  srb={row.srb_name}
                  eng={row.eng_name}
                />
                )) : null
              }          
              </Paper>
            </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} className={classes.paperContainer}>
              <Paper elevation={0} className={classes.paper}>
                <DictionarySearch />
              </Paper>
              <Paper elevation={0} className={classes.paper}>
                <DictionaryTable />
              </Paper>
            </Paper>
          </Grid>
          <Grid className={classes.btns_container} item xs>
            <Paper elevation={0} className={classes.btns}>  
            {
              matches ? rows.slice(6,12).map(row => (
                <CategoryButtons
                  name={row.name}
                  icon={row.icon}
                  srb={row.srb_name}
                  eng={row.eng_name}
                />
                )) : null
              }          
              </Paper>
            </Grid>
        </Grid>
      </div>
  )
}

export default Dictionary;
