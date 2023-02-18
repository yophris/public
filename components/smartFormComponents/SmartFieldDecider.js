import { Grid, Typography } from '@mui/material';
import React from 'react';
import SimpleFieldArrayForm from './SimpleFieldArrayForm';
import SmartApproverFieldItem from './SmartApproverFieldArray';
import SmartCheckBox from './SmartCheckBox';
import SmartDataCard from './SmartDataCard';
import SmartDatePicker from './SmartDatePicker';
import SmartDivider from './SmartDivider';
import SmartDocumentUploader from './SmartDocumentUploader';
import SmartFromToDatePicker from './SmartFromToDatePicker';
import SmartPhoneNumberInput from './SmartPhoneNumberInput';
import SmartSelect from './SmartSelect';
import SmartTabs from './SmartTabs';
import SmartTabsWithinForm from './SmartTabsWithinForm';
import SmartText from './SmartText';
import SmartTitle from './SmartTitle';
import SmartWorkWeekComponent from './SmartWorkWeekComponent';

export default function SmartFieldDecider({ field, index }) {
  const gridSize = field?.gridSize ?? 6;

  if (field.type === 'Text') {
    return (
      <Grid item {...field.gridSizes}>
        <SmartText field={field} />
      </Grid>
    );
  }

  if (field.type === 'Select') {
    return (
      <Grid item {...field.gridSizes}>
        <SmartSelect field={field} />
      </Grid>
    );
  }

  if (field.type === 'Date') {
    return (
      <Grid item {...field.gridSizes}>
        <SmartDatePicker field={field} />
      </Grid>
    );
  }
  if (field.type === 'FromToDate') {
    return (
      <Grid item {...field.gridSizes}>
        <SmartFromToDatePicker  />
      </Grid>
    );
  }

  if (field.type === 'FieldArray') {
    return (
      <Grid item md={12} mt={1}>
        <SimpleFieldArrayForm smartField={field} />
      </Grid>
    );
  }

  if (field.type === 'PhoneNumber') {
    return (
      <Grid item {...field.gridSizes}>
        <SmartPhoneNumberInput field={field} />
      </Grid>
    );
  }

  if (field.type === 'Title') {
    return (
      <Grid item xs={12}>
        <SmartTitle field={field} />
      </Grid>
    );
  }

  if (field.type === 'Divider') {
    return (
      <Grid item xs={12}>
        <SmartDivider field={field} />
      </Grid>
    );
  }

  if (field.type === 'ApproverFieldArray') {
    return (
      <Grid item xs={12}>
        <SmartApproverFieldItem smartField={field} />
      </Grid>
    );
  }
  //TODO:Duplication
  if (field.type === 'Heading') {
    return (
      <Grid item {...field.gridSizes}>
        <Typography variant="h3_bold_secondary" component="h3">
          {field.label}
        </Typography>
      </Grid>
    );
  }
  if (field.type === 'Tabs') {
    return (
      <Grid item {...field.gridSizes}>
        <SmartTabsWithinForm field={field} fieldArrayIndex={index} />
      </Grid>
    );
  }

  if (field.type === 'DocumentUpload') {
    return (
      <Grid item {...field.gridSizes}>
        <SmartDocumentUploader field={field} />
      </Grid>
    );
  }

  if(field.type === "WorkWeek"){
    return (
      <Grid item {...field.gridSizes}>
        <SmartWorkWeekComponent field={field} />
      </Grid>
    );
  }
}
