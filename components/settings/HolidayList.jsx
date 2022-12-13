import { Grid, Box, IconButton } from '@mui/material';
import AppButton from 'components/AppButton';
import TextInput from 'components/fields/TextInput';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

export default function HolidayList(props) {
  const { label, register, name, error, isRequired, isMultiline } = props;
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <TextInput {...props} />
      </Grid>
      <Grid item xs={4}>
        <TextInput {...props} />
      </Grid>
      <Grid item xs={4}>
        <div>
          <Box sx={{ height: '20px', marginBottom: 1 }}></Box>
          <AppButton
            restProps={{
              fontSize: '1.6rem',
              height: '44px',
              width: 'auto',
              padding: '10px 30px',
              borderRadius: '5px',
              borderColor: '#377DFF',
            }}
            variant="outlined"
          >
            + Add
          </AppButton>
        </div>
      </Grid>
      <Grid item mt={2} xs={12}>
        <CustomizedTables />
      </Grid>
    </Grid>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F7F9FB',
    color: theme.palette.text.secondary,
    fontSize: '1.4rem',
    fontWeight: 500,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  border: 'none',
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('New Year Day', 'Jan 1, 2022', false),
  createData('National Holiday', 'Sep 1, 2022', true),
];

function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Holiday Name</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Mark as optional</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">
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
