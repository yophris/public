import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, Stack } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AppTabs from 'components/AppTabs';
import { useFieldArray } from 'react-hook-form';
import AppButton from 'components/AppButton';
import AppColorCircle from 'components/AppColorCircle';
import AppDropdown from 'components/fields/AppDropdown';

export default function LeaveTypeRulesSetting({
  renderFields,
  errors,
  ...rest
}) {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: rest.control,
      name: rest.name,
    }
  );

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //this should be fetched from leavetype api
  const options = [
    { text: 'Sick Leave', value: 'sl' },
    { text: 'Earned Leave', value: 'el' },
    { text: 'Annual Leave', value: 'al' },
  ];

  const [selectedOption, setSelectedOption] = React.useState({
    text: '',
    value: '',
  });
  const [tabHeading, setTabHeading] = React.useState([]);

  const handleOptionChange = (event) => {
    const value = options.find((option) => option.value === event.target.value);
    setSelectedOption(value);
  };

  const handleAddField = () => {
    if (selectedOption.text !== '') {
      setTabHeading([...tabHeading, selectedOption.text]);
      append(rest.fieldForArray);
    }
  };

  return (
    <Grid item sx={{ paddingLeft: 0, margin: 0, width: '100%' }}>
      <Grid container sx={{ marginBottom: 2 }} spacing={2}>
        <Grid item xs={9}>
          <AppDropdown
            label="Select Leave Type to Add in policy"
            options={options}
            control={rest.control}
            setValue={rest.setValue}
            getValues={rest.getValues}
            value={selectedOption.value}
            onChange={handleOptionChange}
          />
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ height: '20px', marginBottom: '8px' }} />
          <AppButton
            onClick={handleAddField}
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

      {fields &&
        fields.map((field, index) => (
          <Accordion
            key={index}
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
                  {tabHeading[index]}
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingTop: 0 }}>
              <AppTabs
                index={index}
                tabs={rest.tabs}
                renderFields={renderFields}
                errors={errors}
                name={rest.name}
                setFieldValue={rest.setValue}
                leaveType={options.find((o) => o.text === tabHeading[index])}
              />
            </AccordionDetails>
          </Accordion>
        ))}
    </Grid>
  );
}
