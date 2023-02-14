import * as React from 'react';
import AppTabs, { TabPanel } from '@/components/common/AppTabs';
import { Box, Grid } from '@mui/material';
import AppButton from 'components/AppButton';
import { useFieldArray } from 'react-hook-form';

import AppDropdown from 'components/fields/AppDropdown';
import AppAccordion from '../common/AppAccordion';

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
    debugger;
    if (selectedOption.text !== '') {
      setTabHeading([...tabHeading, selectedOption.text]);
      append(rest.fieldForArray);
    }
  };

  // const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  // const handleSelectedTabIndex = (index) => {
  //   setSelectedTabIndex(index);
  // };

  const modifyFields = (field, index) => {
    rest.setValue(
      `${rest.name}.${index}.${rest.name}Id`,
      options.find((o) => o.text === tabHeading[index])
    );
    const modifiedField = {
      ...field,
      attr: {
        ...field.attr,
        name: `${rest.name}.${index}.${field.attr.name}`,
      },
    };
    console.log('modified field: ', field);
    return <Box>{renderFields(modifiedField, errors)}</Box>;
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
          <AppAccordion tabHeading={tabHeading[index]}>
            <AppTabs
              tabs={rest.tabs}
              index={index}
              modifyFields={modifyFields}
              // handleSelectedIndex={handleSelectedTabIndex}
            >
              {/* <Box key={j}>{renderFields(modifiedField, errors)}</Box> */}
              {/* {rest.tabs.map((tab, i) => {
                console.log('tabs being renders', tab);
                return (
                  <TabPanel key={i} value={selectedTabIndex} index={i}>
                    {tab.fields.map((field, j) => {
                      rest.setValue(
                        `${rest.name}.${index}.${rest.name}Id`,
                        options.find((o) => o.text === tabHeading[index])
                      );
                      const modifiedField = {
                        ...field,
                        attr: {
                          ...field.attr,
                          name: `${rest.name}.${index}.${field.attr.name}`,
                        },
                      };
                      console.log('modified field: ', field);
                      return (
                        <Box key={j}>{renderFields(modifiedField, errors)}</Box>
                      );
                    })}
                  </TabPanel>
                );
              })} */}
            </AppTabs>
          </AppAccordion>
        ))}
    </Grid>
  );
}

//tabs and their children
//selected index has to be maintained in the component level
//all the logics should be on the host
