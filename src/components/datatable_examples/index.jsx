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
    padding: '20px 10px'
  },
  body: {
    fontSize: 14,
    padding: '30px'
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
    height: '100%'
  },
});

function Datatable({ data }) {
  const classes = useStyles();
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
        <TableHead>
          
            <StyledTableRow hover>
            <StyledTableCell component="th" scope="row">
              Primer | Example
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
              {/**Empty */}
            </StyledTableCell>               
            </StyledTableRow>
    
        </TableHead>
        <TableBody>
          {data && data.map((row) => {
            console.log(row)
            return (
              <StyledTableRow hover key={row.id}>
                <StyledTableCell component="th" scope="row">
                 {row.num}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.Srpski === 0 ? row.English : row.Srpski}
                </StyledTableCell>              
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Datatable
