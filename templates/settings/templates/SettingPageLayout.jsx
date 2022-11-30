import * as React from 'react';
import { Box, Divider, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

function SettingPageLayout({ children, title, subtitle, longDescription }) {
  console.log('setting pae layout');
  return (
    <Paper
      sx={{
        border: '1px solid #EFEFEF',
        borderRadius: 2.5,
        width: '100%',
        height: 'auto',
      }}
      variant="outlined"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        divider={
          <Divider
            sx={{ margin: '0 8px', border: '1px solid #EFEFEF' }}
            orientation="vertical"
            flexItem
          />
        }
      >
        <Stack spacing={4} sx={{ width: '70%', margin: 2.5 }}>
          <Box>
            <Typography variant="h2_bold_secondary" component="h2">
              {title}
            </Typography>

            <Typography variant="body_medium_muted" component="p">
              {subtitle}
            </Typography>
          </Box>
          <Stack spacing={2}>{children}</Stack>
        </Stack>
        <Stack spacing={1} sx={{ width: '30%', margin: 2.5 }}>
          <Typography variant="h2_bold_secondary">{title}</Typography>
          <Typography variant="h3_medium_muted">{longDescription}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default React.memo(SettingPageLayout);
