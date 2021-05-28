import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PhotoIcon from '@material-ui/icons/Photo';
import { IconButton, Typography } from '@material-ui/core';
import ImageModal from '../dictionary_page/image_modal';
import InfiniteScroll from 'react-infinite-scroll-component';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.disabled,
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
    color: theme.palette.grey[300],
    fontSize: '24px',
    fontWeight: '600',
    textAlign: 'center',
    padding: '20px'
  }
}));

function Datatable({ data, search }) {
  const classes = useStyles();
  const columns = data[0] && Object.keys(data[0]);
  const addSrpskiToFirstElement = 'Srpski';
  const newOrderColumns = [addSrpskiToFirstElement].concat(columns).slice(0, 3);
  const [src, setSrc] = useState('');
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState({
    items: Array.from({ length: 50 }),
  });

  const fetchMore = () => {
    setRows({
      items: rows.items.concat(Array.from({ length: 50 }))
    });
  };

  const handleOpen = (prop) => {
    setOpen(true);
    setSrc(prop);
  };

  const handleClose = () => {
    setOpen(false);
    setSrc('');
  };

  return (
    <TableContainer id="scrollableDiv" className={classes.container} component={Paper}> 
      <InfiniteScroll
      dataLength={rows.items}
      next={fetchMore}
      hasMore={true}
      height={650}
      scrollableTarget="scrollableDiv"
    >   
      <Table stickyHeader className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
            {
              newOrderColumns.map((heading, index)=>
              <StyledTableCell key={index}>
                {heading}
              </StyledTableCell>
              )
            }          
            </TableRow>
          </TableHead>        
          <TableBody>        
            {search === '' || data.length === 0 ? data = [] : data && data.slice(0, rows.items.length).map((row) => (
              <StyledTableRow hover key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.Srpski}
                </StyledTableCell>
                <StyledTableCell>
                  {row.English}
                </StyledTableCell>
                <StyledTableCell align="center">
                {
                  row.Primer !== "0" ? (
                  <IconButton onClick={() => handleOpen(row.Primer)}>
                    <PhotoIcon />
                  </IconButton>
                ): null
                }
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
      </Table>
      {
        search === '' || data.length === 0 ? <Typography className={classes.empty}>result not found</Typography> : null
      }
      <ImageModal handleClose={handleClose} open={open} src={src} />
      </InfiniteScroll>
    </TableContainer>
  )
}

export default Datatable;
