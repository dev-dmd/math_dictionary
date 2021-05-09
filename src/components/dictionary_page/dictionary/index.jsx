import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CategoryButtons from '../category_buttons';
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
import CategoryDrawer from '../category_drawer';
import DataTable from '../../datatable_dictionary';
import data from '../dictionary_data/dictionary.json';
import { Link } from 'react-router-dom';
import InfiniteTable from '../../datatable_dictionary';

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
  createButtons('digit', digit_icon, 'mesna vrednost cifre', 'place value of digit'),
  createButtons('figures', figure_icon, 'nazivi geometrijskih figura i tela ', 'names of geometric figures and solids'),
  createButtons('greek', greek_icon, 'grčki alfabet', 'greek alphabet'),
  createButtons('cardinals', cardinal_icon, 'kardinalni brojevi', 'cardinal numbers'),
  createButtons('polygons', polygons_icon, 'nazivi mnogouglova', ' names of polygons'),
  createButtons('large-nums', large_nums_icon, 'nazivi velikih brojeva', 'names of large numbers'),
  createButtons('prefixes', prefixes_icon, 'prefiksi mernih jedinica', 'prefixes for units of measurement'),
  createButtons('fraction', fraction_icon, 'razlomci', 'fractions'),
  createButtons('ordinal-num', ordinal_nums_icon, 'redni brojevi', 'ordinal numbers'),
  createButtons('roots', roots_icon, 'stepenovanje i korenovanje', 'exponents and radicals (roots)'),
  createButtons('trigonometry', trigonometry_icon, 'trigonometrija ', 'trigonometry'),
];

function Dictionary({ match }) {
  let dictionary = data.dictionary;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  function searchTable(rows) {
    return rows.filter((row) => row.Srpski.toLowerCase().indexOf(search.toLowerCase()) > -1 || row.English.toLowerCase().indexOf(search.toLowerCase()) > -1);
  }

  function onRequestSearch(e) {
    e.preventDefault();
    console.log('search request');
  }

  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <CategoryDrawer match={match}/>
          <Grid className={classes.btns_container} item xs>
            <Paper elevation={0} className={classes.btns}>  
            {
              matches ? rows.slice(0,6).map(row => (
              <Link to={`${match.url}${row.name}`}>      
                <CategoryButtons
                  key={row.name}
                  name={row.name}
                  icon={row.icon}
                  srb={row.srb_name}
                  eng={row.eng_name}
                />
              </Link> 
              )) : null
              }          
              </Paper>
            </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={0} className={classes.paperContainer}>
              <Paper elevation={0} className={classes.paper}>
                <DictionarySearch search={search} handleSearch={handleSearch} onRequestSearch={onRequestSearch} />
              </Paper>
              <Paper elevation={0} className={classes.paper}>
                <DataTable search={search} data={searchTable(dictionary)} />
              </Paper>
            </Paper>
          </Grid>
          <Grid className={classes.btns_container} item xs>
            <Paper elevation={0} className={classes.btns}>  
            {
              matches ? rows.slice(6,12).map(row => (
              <Link to={`${match.url}${row.name}`}>
                <CategoryButtons
                  key={row.name}
                  name={row.name}
                  icon={row.icon}
                  srb={row.srb_name}
                  eng={row.eng_name}
                />
              </Link> 
              )) : null
              }          
              </Paper>
            </Grid>
        </Grid>        
      </div>
  )
}

export default Dictionary;
