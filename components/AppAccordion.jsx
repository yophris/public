import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Grid,
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AppButton from './AppButton';
import AppColorCircle from './AppColorCircle';
import AppTabs from './AppTabs';
import TextInput from './fields/TextInput';

export default function AppAccordion({ renderFields, errors, ...rest }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid item sx={{ paddingLeft: 0, margin: 0, width: '100%' }}>
      <Grid container sx={{ marginBottom: 2 }} spacing={2}>
        <Grid item xs={9}>
          <TextInput label="Select Leave Type to Add in policy" />
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ height: '20px', marginBottom: '8px' }} />
          <AppButton
            styleOverrides={{
              fontSize: '1.6rem',
              height: '44px',
              px: 0,
              borderRadius: '5px',
              borderColor: '#377DFF',
              width: '100%',
            }}
            variant="outlined"
          >
            Add Leave Type
          </AppButton>
        </Grid>
      </Grid>

      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
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
              Sick Leave
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingTop: 0 }}>
          <AppTabs
            tabs={rest.tabs}
            renderFields={renderFields}
            errors={errors}
          />
        </AccordionDetails>
      </Accordion>
    </Grid>
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
