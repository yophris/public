import { Paper, Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function AppCard({
  children,
  title,
  option = { isPresent: false, text: '', link: '/' },
  isRHSOption = false,
}) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Paper
      sx={{
        borderRadius: 2.5,
        padding: 2,
        minWidth: 280,
        width: '100%',
        height: 'auto',
      }}
      variant="outlined"
    >
      <Stack sx={{ height: '100%' }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h3_bold_secondary" component="h3">
            {title}
          </Typography>
          {option.isPresent ? (
            <Link href="/dashboard" underline="none">
              <Typography variant="body_bold_primary">{option.text}</Typography>
            </Link>
          ) : (
            isRHSOption && (
              <FormControl sx={{ minWidth: 70 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                    '& .MuiSelect-select': { padding: 1 },
                  }}
                >
                  <MenuItem value="">Filter</MenuItem>
                  <MenuItem value={10}>Week</MenuItem>
                  <MenuItem value={20}>Month</MenuItem>
                  <MenuItem value={30}>Year</MenuItem>
                </Select>
              </FormControl>
            )
          )}
        </Stack>
        {children}
      </Stack>
    </Paper>
  );
}
