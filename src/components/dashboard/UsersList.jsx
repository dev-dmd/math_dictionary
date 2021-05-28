import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
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
  math: {
    '& > *': {
      width: '10%!important'
    }
  }
});

export default function UsersList({ data }) {
  const classes = useStyles();
  // const columns = data[0] && Object.keys(data[0]);
  const addTitles = ['Ime', 'Prezime', 'Email', 'Lozinka'];
  return (
    <div>
      <TableContainer className={classes.container} component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
            {
              addTitles.map((heading, index)=>
              <StyledTableCell key={index}>
                {heading}
              </StyledTableCell>
              )
            }          
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((row) => (
              <StyledTableRow hover key={row.id}>
                <StyledTableCell className={classes.math} component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.lastName}
                </StyledTableCell>
                <StyledTableCell>
                  {row.email}
                </StyledTableCell>
                <StyledTableCell>
                  {row.password}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
