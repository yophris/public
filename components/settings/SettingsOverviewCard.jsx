import * as React from 'react';
import { Divider, Grid, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import AppProgressBar from '../AppProgressBar';
import Image from 'next/image';

export default function SettingsOverviewCard({ settingsData, completedData }) {
  const { title, subtitle, settings = [] } = settingsData;
  return (
    <Paper
      sx={{
        borderRadius: 2.5,
        minWidth: 280,
        width: '100%',
        height: 'auto',
      }}
      variant="outlined"
    >
      <Stack
        direction="row"
        flexWrap="wrap"
        rowGap={1}
        columnGap={1}
        justifyContent="space-between"
        sx={{ padding: 2, height: '100%' }}
      >
        <Stack>
          <Typography variant="h2_bold_secondary" component="h2">
            {title}
          </Typography>
          <Typography variant="body_medium_muted" component="p">
            {subtitle}
          </Typography>
        </Stack>
        <Typography variant="body_bold_primary">
          <AppProgressBar
            total="10"
            consumed="4"
            light={false}
            colorVal="tertiary.main"
          />
        </Typography>
      </Stack>
      <Divider orientation="horizontal" sx={{ borderColor: '#EFEFEF' }} />
      <Grid
        container
        sx={{ padding: 2 }}
        rowSpacing={2}
        columnSpacing={{ xs: 4, md: 3 }}
      >
        {settings.map((setting, index) => (
          <Grid
            item
            md={4}
            key={index}
            sx={{
              rowGap: 1,
            }}
            flexWrap
          >
            <Typography variant="h3_medium_secondary" component="h3">
              {setting.title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ flexWrap: 'wrap', rowGap: 0.6, marginTop: 1 }}
            >
              {setting.types.map((type, index) => {
                let path = '';
                let title = '';
                let isCompleted;
                if (typeof type == 'object') {
                  path = type.path;
                  title = type.title;
                  isCompleted = completedData?.[type.id];
                }

                return (
                  <span key={index}>
                    {isCompleted && (
                      <Image
                        src="/images/circleTickBgGreen.svg"
                        width={11}
                        height={11}
                        style={{ marginRight: '4px' }}
                        alt="completed"
                      />
                    )}
                    <Link
                      href={`/app/settings/${path.toString().toLowerCase()}`}
                    >
                      <Typography variant="body_medium_primary">
                        {title}
                      </Typography>
                    </Link>
                    {index !== setting.types.length - 1 && (
                      <Divider
                        sx={{
                          display: 'inline',
                          borderColor: 'text.muted',
                          height: '10px',
                          margin: '0 8px',
                        }}
                        orientation="vertical"
                      />
                    )}
                  </span>
                );
              })}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
