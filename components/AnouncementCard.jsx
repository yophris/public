import { Divider, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import Link from '@mui/material/Link';
import ProfileInfo from './ProfileInfo';

export default function AnouncementCard({
  title,
  option = { isPresent: false, text: '', link: '/' },
  isRHSOption = false,
}) {
  const [isReadMore, setIsReadMore] = React.useState(false);
  const originalMessage =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English";
  const truncatedMessage =
    originalMessage.length > 100
      ? originalMessage.substring(0, 400)
      : originalMessage;

  const handleReadMore = (event) => {
    event.preventDefault();
    setIsReadMore(!isReadMore);
  };
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
        <Stack spacing={2} p={2}>
          {[
            {
              maintext: 'Thomas Fletcher',
              subtext: '2 days ago',
              img: '../images/man1.png',
            },
          ].map((profile, index) => (
            <ProfileInfo key={index} profile={profile} direction="row" />
          ))}
        </Stack>
      </Stack>

      <Stack justifyContent="start" pl={2} pr={2} pb={2} textAlign="start">
        <Typography variant="body_regular_tertiary" component="p">
          {isReadMore ? originalMessage : truncatedMessage}
          <Typography
            onClick={handleReadMore}
            variant="body_bold_primary"
            component="a"
            sx={{ cursor: 'pointer' }}
          >
            {isReadMore ? ' Read less' : '...Read more'}
          </Typography>
        </Typography>
      </Stack>
    </Paper>
  );
}
