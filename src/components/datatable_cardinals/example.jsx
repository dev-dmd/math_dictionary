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
    padding: '30px'
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
  const columns = data[0] && Object.keys(data[0]);

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
        <TableHead>
        <StyledTableCell align="left">
              Primer | Example
            </StyledTableCell>  
          <StyledTableRow>          
            {
              data[0] && columns.slice(1,3).map((heading)=>
              <StyledTableCell align="left" key={heading.length}>
                {heading}
              </StyledTableCell>
              )
            }          
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => {
            console.log(row)
            return (
              <StyledTableRow hover key={row.id}>
                <StyledTableCell align="left" component="th" scope="row">
                  {row.Srpski}
                </StyledTableCell>
                <StyledTableCell align="left" component="th" scope="row">
                  {row.English}
                </StyledTableCell>           
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Datatable;
