import * as React from 'react';
import { Box, Divider, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';

export default function MyCalendar({
  title,
  option = { isPresent: false, text: '', link: '/' },
}) {
  return (
    <Paper
      sx={{ borderRadius: 2.5, minWidth: 280, width: '100%' }}
      variant="outlined"
    >
      <Stack divider={<Divider orientation="horizontal" flexItem />}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Typography variant="h3_bold_secondary" component="h3">
            {title}
          </Typography>

          <Link href="/dashboard" underline="none">
            <Typography variant="body_bold_primary" component="p">
              {option.text}
            </Typography>
          </Link>
        </Stack>
        <Stack direction="row" p={2} alignItems="center">
          <Stack
            direction="row"
            sx={{
              border: '1px solid #EFEFEF',
              borderRadius: 1,
            }}
          >
            {[
              {
                day: 'SUN',
                dateNum: 1,
                reminders: [
                  {
                    text: 'Duty: 9 - 6',
                    bgcolor:
                      'linear-gradient(0deg, rgba(0, 133, 255, 0.1), rgba(0, 133, 255, 0.1)), #FFFFFF',
                    textColor: '#0085FF',
                  },
                  {
                    text: 'Work from Home',
                    bgcolor: '#EFEFEF',
                    textColor: '#585757',
                  },
                  {
                    text: 'Duty: 9 - 6',
                    bgcolor:
                      'linear-gradient(0deg, rgba(0, 133, 255, 0.1), rgba(0, 133, 255, 0.1)), #FFFFFF',
                    textColor: '#0085FF',
                  },
                  {
                    text: 'Work from Home',
                    bgcolor: '#EFEFEF',
                    textColor: '#585757',
                  },
                  {
                    text: 'Duty: 9 - 6',
                    bgcolor:
                      'linear-gradient(0deg, rgba(0, 133, 255, 0.1), rgba(0, 133, 255, 0.1)), #FFFFFF',
                    textColor: '#0085FF',
                  },
                  {
                    text: 'Work from Home',
                    bgcolor: '#EFEFEF',
                    textColor: '#585757',
                  },
                ],
              },
              {
                day: 'MON',
                dateNum: 2,
                reminders: [
                  {
                    text: 'Duty 9 - 6',
                    bgcolor:
                      'linear-gradient(0deg, rgba(0, 133, 255, 0.1), rgba(0, 133, 255, 0.1)), #FFFFFF',
                    textColor: '#0085FF',
                  },
                ],
              },
              {
                day: 'TUE',
                dateNum: 3,
                reminders: [
                  {
                    text: 'Casual Leave',
                    bgcolor:
                      'linear-gradient(0deg, rgba(255, 150, 27, 0.1), rgba(255, 150, 27, 0.1)), #FFFFFF',
                    textColor: '#FF9F2D',
                  },
                ],
              },
              {
                day: 'WED',
                dateNum: 4,
                reminders: [
                  {
                    text: 'Holiday',
                    bgcolor:
                      'linear-gradient(0deg, rgba(0, 186, 52, 0.1), rgba(0, 186, 52, 0.1)), #FFFFFF',
                    textColor: '#00BA34',
                  },
                ],
              },
              {
                day: 'THU',
                dateNum: 5,
                reminders: [
                  {
                    text: 'Duty 9 - 6',
                    bgcolor:
                      'linear-gradient(0deg, rgba(0, 133, 255, 0.1), rgba(0, 133, 255, 0.1)), #FFFFFF',
                    textColor: '#0085FF',
                  },
                  {
                    text: 'Work from Home',
                    bgcolor: '#EFEFEF',
                    textColor: '#585757',
                  },
                ],
              },
              {
                day: 'FRI',
                dateNum: 6,
                reminders: [
                  {
                    text: 'Earned Leave',
                    bgcolor:
                      'linear-gradient(0deg, rgba(255, 150, 27, 0.1), rgba(255, 150, 27, 0.1)), #FFFFFF',
                    textColor: '#FF9F2D',
                  },
                ],
              },
              {
                day: 'SAT',
                dateNum: 7,
                reminders: [
                  {
                    text: 'Leave',
                    bgcolor:
                      'linear-gradient(0deg, rgba(255, 59, 59, 0.1), rgba(255, 59, 59, 0.1)), #FFFFFF',
                    textColor: '#E92C2C',
                  },
                ],
              },
            ].map((cal, index) => (
              <Stack
                key={index}
                direction="column"
                sx={{
                  width: 180,
                  height: 180,
                  borderLeft: index > 0 && '1px solid #EFEFEF',
                }}
              >
                <Stack
                  sx={{ width: '100%', height: 42 }}
                  justifyContent="start"
                  alignItems="start"
                >
                  <Typography
                    p={1}
                    variant="h3_medium_secondary"
                    component="h3"
                  >
                    {cal.day}
                  </Typography>
                  <Divider
                    sx={{ margin: 0, borderColor: '#EFEFEF' }}
                    orientation="horizontal"
                    flexItem
                  />
                </Stack>
                <Stack
                  sx={{
                    height: '100%',
                    '& .MuiStack-root': {
                      marginTop: 0,
                    },
                  }}
                  justifyContent="space-between"
                  alignItems="start"
                  pl={1}
                  pr={1}
                  pb={1}
                >
                  <Typography variant="h1_medium_secondary" component="h1">
                    {cal.dateNum}
                  </Typography>
                  <Stack
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{ height: 100, width: '100%' }}
                  >
                    {cal.reminders &&
                      cal.reminders.map(
                        (rem, index) =>
                          index < 5 && (
                            <Box
                              key={index}
                              sx={{
                                padding: '2px 4px',
                                borderRadius: '4px',
                                background: rem.bgcolor,
                                color: rem.textColor,
                                width:
                                  cal.reminders.length > 3 ? '80px' : 'auto',
                              }}
                            >
                              <Typography
                                variant="body_regular"
                                component="p"
                                sx={{
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                                title={rem.text}
                              >
                                {rem.text}
                              </Typography>
                            </Box>
                          )
                      )}
                    {cal.reminders.length === 6 && (
                      <Box
                        sx={{
                          padding: '2px 4px',
                          width: '80px',
                        }}
                      >
                        <Typography
                          variant="body_regular"
                          component="p"
                          sx={{
                            cursor: 'pointer',
                            width: '80px',
                            textAlign: 'right',
                          }}
                        >
                          more...
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
