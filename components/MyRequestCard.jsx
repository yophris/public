import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Divider, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

export default function MyRequestCard({ items }) {
  const handleNavigation = () => {};

  return (
    items &&
    items.map((item, index) => (
      <span key={index}>
        <Stack direction="column" spacing={2} sx={{ marginY: 1 }}>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body_medium_secondary" component="p">
              {item.text}
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Box
                sx={{
                  background: 'rgba(44, 115, 255, 0.1)',
                  borderRadius: '5px',
                  padding: '1px 4px',
                }}
              >
                <Typography variant="body_medium_primary" component="p">
                  {item.balance}
                </Typography>
              </Box>
              <IconButton onClick={handleNavigation}>
                <ChevronRightIcon sx={{ fontSize: '2rem', color: '#333' }} />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        {items.length - 1 !== index && <Divider />}
      </span>
    ))
  );
}
