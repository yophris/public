import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { Checkbox, IconButton, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F7F9FB',
    color: theme.palette.text.secondary,
    fontSize: '1.4rem',
    fontWeight: 500,
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

function createData(name, date, isOptional) {
  return { name, date, isOptional };
}

const rows = [
  createData('New Year Day', 'Jan 1, 2022 (Sun)', false),
  createData('National Holiday', 'Sep 1, 2022 (Sat)', true),
];

export default function AppTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Holiday Name</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">Mark as optional</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.date.split('(')[0]}
                <Typography variant="body_medium_muted" component="p">
                  {'('}
                  {row.date.split('(')[1]}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Checkbox
                  size="large"
                  sx={{ p: 0, '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
                  checked={row.isOptional}
                />
              </StyledTableCell>
              <StyledTableCell align="left">
                <IconButton>
                  <Image
                    src="/images/trashIcon.svg"
                    width={14}
                    height={14}
                    alt="checked"
                  />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
