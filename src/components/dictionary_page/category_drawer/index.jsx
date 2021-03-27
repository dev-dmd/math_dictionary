import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon, ListItemIcon, ListSubheader, SwipeableDrawer } from '@material-ui/core';
import PaletteIcon from '@material-ui/icons/Palette';
import {
  Link
} from "react-router-dom";
import cardinal from '../category_icons/cardinal.svg';
import digit from '../category_icons/digit.svg';
import figures from '../category_icons/figure.svg';
import fractions from '../category_icons/fraction.svg';
import greek from '../category_icons/greek.svg';
import large_num from '../category_icons/large_num.svg';
import measurement from '../category_icons/measurement.svg';
import ordinal from '../category_icons/ordinal.svg';
import polygons from '../category_icons/polygons.svg';
import prefixes from '../category_icons/prefixes.svg';
import roots from '../category_icons/roots.svg';
import sinusoid from '../category_icons/sinusoid.svg';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    position: 'fixed',
    backgroundColor: 'rgba(200,200,200,.2)',
    borderRadius: '0 15px 15px 0',
    padding: '0px 0px',
    margin: '0px 0 0 -20px',
    boxShadow: '0 0 30px #a2fdec'
  },
  icons: {
    filter: 'invert(1)'
  }
}));

export default function CategoryDrawer({ match }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListSubheader>
          <ListItem>
            <ListItemText primary="Categories" />
          </ListItem>
        </ListSubheader>
        {[{text:'Units of Measurement', link:"units", icons: measurement}, {text:'Place value of digit', link:"digit", icons: digit}, {text:'Names of Geometric Figures and Solids', link:"figures", icons: figures}, {text:'Greek Alphabet', link:"greek", icons: greek}, {text:'Cardinal Numbers', link:"cardinal", icons: cardinal}, {text:'Names of Polygons', link:"polygons", icons: polygons}, {text:'Names of Large Numbers', link:"large-numbers", icons: large_num}, {text:'Prefixes for Units of Measurement', link:"prefixes", icons: prefixes}, {text:'Fractions', link:"fractions", icons: fractions}, {text:'Ordinal Numbers', link:"ordinal-numbers", icons: ordinal}, {text:'Exponents and Radicals (roots)', link:"roots", icons: roots}, {text:'Trigonometry', link:"trigonometry", icons: sinusoid}].map((row) => (
          <Link to={`${match.url}${row.link}`} key={row.text}>
            <ListItem button>
              <ListItemIcon>
                <Icon>
                  <img className={classes.icons} height="100%" width="100%" src={`${row.icons}`} alt={`${row.text}`} />
                </Icon>
              </ListItemIcon>
              <ListItemText primary={row.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.sectionMobile}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{<PaletteIcon style={{color: '#f4f4f4', fontSize: '32px'}}/>}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
