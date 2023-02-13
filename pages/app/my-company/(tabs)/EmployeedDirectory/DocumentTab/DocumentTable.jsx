import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { alpha, styled, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';

function descendingComparator(index, a, b, orderBy) {
  if (b[index][orderBy] < a[index][orderBy]) {
    return -1;
  }
  if (b[index][orderBy] > a[index][orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(index, order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(index, a, b, orderBy)
    : (a, b) => -descendingComparator(index, a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    headCells,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    setColumnIndex,
  } = props;
  const createSortHandler = (event, property, index) => {
    onRequestSort(event, property);
    setColumnIndex(index);
  };

  return (
    <TableHead sx={{ backgroundColor: 'background.main' }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={(e) => createSortHandler(e, headCell.id, index)}
            >
              <Typography variant="body_medium_muted" component="p">
                {headCell.label}
              </Typography>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar(props) {
  const { numSelected, handleDelete, selectedItem } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.secondary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="body_medium_secondary"
          id="subtitle"
          component="p"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h3_bold_secondary"
          id="tableTitle"
          component="h3"
        >
          List of Documents
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={(e) => handleDelete(e, selectedItem)}>
            <DeleteIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

const PageNumber = ({ page, handleClick, active = false, isLast = false }) => {
  return (
    <Box
      onClick={(e) => handleClick(e, page)}
      component="span"
      sx={{
        fontSize: '1.2rem',
        fontWeight: 500,
        backgroundColor: active ? 'secondary.main' : 'background.secondary',
        color: active ? 'text.light' : 'text.secondary',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        padding: '6px 12px',
        marginRight: !isLast && '8px',
        cursor: 'pointer',
      }}
    >
      {page + 1}
    </Box>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.text.secondary,
    fontSize: '1.4rem',
    fontWeight: 500,
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.4rem',
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const [pages, setPages] = React.useState([]);
  const [currentPages, setCurrentPages] = React.useState([]);
  const [activePage, setActivePage] = React.useState(0);
  const [lowerLimit, setLowerLimit] = React.useState(0);
  const [upperLimit, setUpperLimit] = React.useState(2);

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    // setCurrentPages((prev) => prev.map((val) => (val - 3 < 1 ? val : val - 3)));
    // onPageChange(event, page - 1);
    // setLimits;
    // if (lowerLimit >= 0 && upperLimit <= pages.length - 1) {
    setLowerLimit((prev) => (prev - 3 < 0 ? prev : prev - 3));
    setUpperLimit((prev) => (prev <= 3 ? prev : prev - 3));
    // }
  };

  // const setLimits = (type) => {
  //   setLowerLimit((prev) => (prev - 1 < 1 ? prev : prev - 1));
  //   setUpperLimit((prev) => (prev + 1 > pages.length ? prev : prev + 1));
  // };

  const handleNextButtonClick = (event) => {
    // setCurrentPages((prev) =>
    //   prev.map((val) => (val + 3 > pages.length ? val : val + 3))
    // );
    if (lowerLimit >= 0 && upperLimit < pages.length - 1) {
      setLowerLimit((prev) => (prev + 3 > pages.length ? prev : prev + 3));
      setUpperLimit((prev) => (prev + 3 > pages.length ? prev : prev + 3));
    }
    // onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const handlePageClick = (event, p) => {
    onPageChange(event, p);
    setActivePage(p);
  };

  React.useEffect(() => {
    let totalPages = count / rowsPerPage;
    if (count % rowsPerPage) totalPages += 1;
    let newPages = Array.from({ length: totalPages }, (value, index) => index);

    setPages(newPages);
    setLowerLimit(0);
    setUpperLimit(newPages.length > 3 ? 2 : newPages.length - 1);
    setActivePage(0);
  }, [count, rowsPerPage]);

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      {/* <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton> */}
      <IconButton
        onClick={handleBackButtonClick}
        disabled={lowerLimit === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      {pages &&
        pages.map((page, index) => {
          if (page >= lowerLimit && page <= upperLimit) {
            return (
              <Box
                onClick={(e) => handlePageClick(e, page)}
                component="span"
                sx={{
                  backgroundColor:
                    page === activePage
                      ? 'secondary.main'
                      : 'background.secondary',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: page === activePage ? 'text.light' : 'text.secondary',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  marginRight: upperLimit !== page && '8px',
                  padding: '6px 12px',
                  textAlign: 'center',
                  userSelect: 'none',
                }}
              >
                {page + 1}
              </Box>
            );
          }
        })}
      {/* <PageNumber
                isLast={false}
                page={page}
                active={page === activePage}
                handleClick={handlePageClick}
              /> */}
      <IconButton
        onClick={handleNextButtonClick}
        disabled={upperLimit === pages.length - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      {/* <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton> */}
    </Box>
  );
}

//@headCells
//@rows in the form of [[<component> | string, <component> | string],[<component> | string, <component> | string]....]
export default function DocumentTable({ headCells, rows, handleDelete }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(headCells[0].id);
  const [selected, setSelected] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState();
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [columnIndex, setColumnIndex] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property, index) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    setColumnIndex(index);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      //since each row is array, it's ok to reference only the first item of each row

      // Select all should only select the current page
      // const newSelected = rows.slice(
      //   page * rowsPerPage,
      //   page * rowsPerPage + rowsPerPage
      // ).map((n, i) => n[0]);

      // This selects all the regardless of the page
      const newSelected = rows.map((n, i) => n[0]);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, row) => {
    const selectFirstCell = row[0];
    const selectedIndex = selected.indexOf(selectFirstCell);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, selectFirstCell);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelectedItem(row);
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (name) => {
    return selected.indexOf(name) !== -1;
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          handleDelete={handleDelete}
          selectedItem={selectedItem}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              headCells={headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              setColumnIndex={setColumnIndex}
            />
            <TableBody>
              {rows &&
                stableSort(rows, getComparator(columnIndex, order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, rowIndex) => {
                    const isItemSelected = isSelected(row[0]);
                    const labelId = `enhanced-table-checkbox-${rowIndex}`;
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={rowIndex}
                        selected={isItemSelected}
                      >
                        <StyledTableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
                            onClick={(event) => handleClick(event, row)}
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </StyledTableCell>
                        {/* {stableSort(row, getComparator(order, orderBy))
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        ) */}
                        {row.map((data, j) => (
                          <StyledTableCell key={j}>
                            {data.component}
                          </StyledTableCell>
                        ))}
                      </TableRow>
                    );
                  })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{
            '& .MuiTablePagination-selectLabel, .MuiInputBase-root, .MuiTablePagination-displayedRows':
              {
                color: 'text.secondary',
                fontSize: '1.4rem',
                fontWeight: 500,
              },
            '.MuiTablePagination-menuItem': {
              color: 'text.secondary',
              fontSize: '1.4rem',
              fontWeight: 500,
            },
            '& .MuiSvgIcon-root ': {
              fontSize: '2.2rem',
            },
          }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}

// DocumentTable.propTypes = {
//   headCells: PropTypes.array.isRequired,
//   rows: PropTypes.array.isRequired,
// };
