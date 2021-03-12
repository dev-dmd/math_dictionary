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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  container: {
    maxHeight: 650,
  },
});

function Datatable({ data }) {
  const classes = useStyles();
  const columns = data.dictionary[0] && Object.keys(data.dictionary[0]);
  console.log(columns.slice(1,4));
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          {
            data.dictionary[0] && columns.slice(1,4).map((heading)=>
            <StyledTableCell>
              {heading}
            </StyledTableCell>
            )
          }          
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.dictionary.slice(0,50).map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.Srpski}
              </StyledTableCell>
              <StyledTableCell>{row.English}</StyledTableCell>
              <StyledTableCell align="right">
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
