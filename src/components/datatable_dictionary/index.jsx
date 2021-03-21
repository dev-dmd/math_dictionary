import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PhotoIcon from '@material-ui/icons/Photo';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.disabled,
    // fontFamily: 'Crayon sans-serif'
    fontWeight: theme.typography.fontWeightBold
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
  },
  container: {
    height: 650,
    opacity: '.8'
  },
  empty: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    color: theme.palette.grey[300],
    fontSize: '24px',
    fontWeight: '600',
  }
}));

function Datatable({ data, search }) {
  const classes = useStyles();
  const columns = data[0] && Object.keys(data[0]);
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          {
            data[0] && columns.slice(1,4).map((heading)=>
            <StyledTableCell key={heading.length}>
              {heading}
            </StyledTableCell>
            )
          }          
          </TableRow>
        </TableHead>
        <TableBody>
        
          {search === '' || data.length === 0 ? <TableBody className={classes.empty}>{ data = ['result not found'] }</TableBody> : data && data.slice(0,100).map((row) => (
            <StyledTableRow hover key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.Srpski}
              </StyledTableCell>
              <StyledTableCell>{row.English}</StyledTableCell>
              <StyledTableCell align="center">
              {
                row.Image !== "0" ? <PhotoIcon /> : null
              }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Datatable
