import * as React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.text.muted,
    fontSize: '1.4rem',
    fontWeight: 500,
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.4rem',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  alignItems: 'flex-start',
  '& .MuiTableCell-root': {
    fontSize: '1.6rem',
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function DocTable({ tableData, tableHeader, actionComponents }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('tabledata: ', tableData);

  const handleMenu = (option) => {
    let callback = cb[option];
    if (callback) {
      callback();
      handleClose();
    }
  };

  return (
    <TableContainer components={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: '#F7F9FB' }}>
          <TableRow>
            {tableHeader &&
              tableHeader.map((header, index) => (
                <StyledTableCell key={index}>{header}</StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {tableData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.type}
                <Typography mt={1} variant="subbody_medium_muted" component="p">
                  {row.requestedOn}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.valid.from}
                {' - '}
                {row.valid.to}
                <Typography mt={1} variant="subbody_medium_muted" component="p">
                  {new Date(row.valid.to).getFullYear() -
                    new Date(row.valid.from).getFullYear()}{' '}
                  {'years left'}
                </Typography>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.issuedCountry}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.DownloadComponent}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.MenuComponent}
              </StyledTableCell>
            </StyledTableRow>
          ))} */}
          {tableData.map((data, i) => (
            <StyledTableRow key={i}>
              {data.map((d, j) => (
                <StyledTableCell key={j} component="th" scope="row">
                  {d}
                </StyledTableCell>
              ))}
              {actionComponents &&
                actionComponents.map((ActionComponent, i) => (
                  <StyledTableCell key={i} component="th" scope="row">
                    <ActionComponent />
                  </StyledTableCell>
                ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
