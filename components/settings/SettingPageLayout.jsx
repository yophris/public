import * as React from 'react';
import {
  Box,
  Breadcrumbs,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  useMediaQuery,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'next/link';
import AppDivider from 'components/AppDivider';

function SettingPageLayout({ children, texts }) {
  const matches = useMediaQuery('(max-width:900px)');

  const breadcrumbs = [
    <Link
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
      {texts?.breadcrumbText}
    </Typography>,
  ];

  return (
    <Box>
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
            overflow: 'hidden',
          }}
          variant="outlined"
        >
          <Grid container direction="row">
            <Grid
              item
              md={8}
              xs={12}
              sx={!matches && { borderRight: '1px solid #EFEFEF' }}
            >
              <Box sx={{ px: 2.5, pt: 2.5 }}>
                <Typography variant="h2_bold_secondary" component="h2">
                  {texts?.mainTitle}
                </Typography>

                <Typography variant="body_medium_muted" component="p">
                  {texts?.mainDescription}
                </Typography>
              </Box>
              <Stack sx={{ height: '80vh', paddingRight: 1, paddingTop: 3 }}>
                {children}
              </Stack>
            </Grid>
            <Grid
              item
              md={4}
              sx={matches ? { display: 'none' } : { display: 'block' }}
            >
              <Stack sx={{ margin: 2.5 }} spacing={1}>
                <Typography variant="h2_bold_secondary">
                  {texts?.sideTitle}
                </Typography>
                <Typography variant="h3_medium_muted">
                  {texts?.sideDescription}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Box>
  );
}

export default React.memo(SettingPageLayout);
