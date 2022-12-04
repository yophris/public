import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function SearchInput({ ...rest }) {
  return (
    <Paper
      elevation={0}
      sx={{
        alignItems: 'center',
        backgroundColor: 'background.main',
        border: '1px solid #EFEFEF',
        borderRadius: 2,
        display: 'flex',
        marginTop: 0,
        flex: 'auto',
      }}
    >
      <SearchIcon
        sx={{
          fontSize: '1.4rem',
          margin: '15px 12px 15px 20px',
          color: 'text.muted',
        }}
      />
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: '1.4rem', color: 'text.secondary' }}
        placeholder="Search Department"
        inputProps={{ 'aria-label': 'search department' }}
      />
    </Paper>
  );
}
