import * as React from 'react';
import { Divider, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import AppProgressBar from '../AppProgressBar';

export default function SettingsOverviewCard({
  children,
  title,
  subtitle,
  settings = [],
}) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
      <Stack direction="row" sx={{ padding: 2 }}>
        {settings.map((setting, index) => (
          <Stack
            key={index}
            spacing={1}
            sx={{
              width: `${100 / settings.length}%`,
              marginX: 1,
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
              sx={{ flexWrap: 'wrap', rowGap: 0.6 }}
            >
              {setting.types.map((type, index) => {
                let path = type;
                let title = type;
                if (typeof type == 'object') {
                  path = type.path;
                  title = type.title;
                }

                return (
                  <span key={index}>
                    <Link
                      href={`/app/settings/${path.toString().toLowerCase()}`}
                    >
                      <Typography variant="body_medium_primary" component="a">
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
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}
