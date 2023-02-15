import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AppColorCircle from '../AppColorCircle';

export default function AppAccordion({ tabHeading, children }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log('accordion change, ', tabHeading);
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === tabHeading}
      onChange={handleChange(tabHeading)}
      sx={{
        '&.MuiPaper-root.MuiAccordion-root.Mui-expanded': {
          margin: 0,
          marginBottom: 1.25,
        },
        '&:last-of-type, &:first-of-type': {
          borderRadius: '8px',
        },
        overflow: 'hidden',
        borderRadius: '8px',
        marginBottom: '10px',
        marginTop: 2.5,
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              fontSize: '3rem',
              color: '#444444',
            }}
          />
        }
      >
        <Stack
          sx={{
            width: '100%',
            marginRight: 2,
          }}
          direction="row"
          alignItems="center"
          spacing={1.5}
        >
          <AppColorCircle size={18} colorVal="#46C0C0" />
          <Typography variant="h3_medium_secondary" component="h3">
            {tabHeading}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingTop: 0 }}>{children}</AccordionDetails>
    </Accordion>
  );
}

const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, progresscolor }) => {
    return {
      height: 10,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
          theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: progresscolor,
      },
    };
  }
);
