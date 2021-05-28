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
    maxHeight: 800,
  },
  topHead: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});

function Datatable({ data }) {
  const classes = useStyles();
  const columns = data[0] && Object.keys(data[0]);
  console.log(Object.values(data[0]));
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
            <TableContainer className={classes.container} >
              <Table stickyHeader className={classes.table}>
                <TableHead>
                  <TableRow>
                  {
                    data[0] && columns.slice(1,5).map((heading)=>
                    <StyledTableCell align="center" key={heading.length}>
                      {heading}
                    </StyledTableCell>
                    )
                  }          
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data && data.map((row) => (
                      <StyledTableRow hover key={row.id}>
                        <StyledTableCell align="center" component="th" scope="row">
                          {Object.values(row)[1]}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row">
                          {Object.values(row)[2]}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row">
                          {Object.values(row)[3]}
                        </StyledTableCell>  
                        <StyledTableCell align="center" component="th" scope="row">
                          {Object.values(row)[4]}
                        </StyledTableCell>                 
                      </StyledTableRow>
                    
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
      </Table>
    </TableContainer>
  )
}

export default Datatable
