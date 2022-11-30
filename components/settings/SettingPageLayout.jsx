import * as React from 'react';
import { Box, Breadcrumbs, Divider, Link, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'next/link';

const breadcrumbs = [
  // <Link href="/app/settings">SETTINGS</Link>,
  <Link
    component={RouterLink}
    href="/app/settings"
    sx={{
      fontSize: '1.6rem',
      fontWeight: 600,
      color: 'primary.main',
      cursor: 'pointer',
    }}
    underline="hover"
    key="1"
    color="inherit"
  >
    SETTINGS
  </Link>,
  <Typography key="2" variant="h3_bold_secondary">
    {/* {texts?.title} */}
    Division
  </Typography>,
];

function SettingPageLayout({ children, texts }) {
  console.log('setting pae layout');
  return (
    <Box sx={{ height: '100%' }}>
      <Stack
        sx={{
          padding: 2,
          background: '#FAFBFC',
          borderBottom: '1px solid #EBEBEB',
        }}
      >
        <Breadcrumbs
          separator={'>'}
          sx={{
            '& .MuiBreadcrumbs-separator': {
              fontSize: '2rem',
              fontWeight: 500,
            },
          }}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Stack
        sx={{
          margin: 2,
          background: '#F5F6FA',
        }}
      >
        <Paper
          sx={{
            border: '1px solid #EFEFEF',
            borderRadius: 2.5,
            width: '100%',
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
                  {texts.mainTitle}
                </Typography>

                <Typography variant="body_medium_muted" component="p">
                  {texts.mainDescription}
                </Typography>
              </Box>
              <Stack sx={{ height: '75vh' }} spacing={2}>
                {children}
              </Stack>
            </Stack>
            <Stack spacing={1} sx={{ width: '30%', margin: 2.5 }}>
              <Typography variant="h2_bold_secondary">
                {texts.sideTitle}
              </Typography>
              <Typography variant="h3_medium_muted">
                {texts.sideDescription}
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}

export default React.memo(SettingPageLayout);
