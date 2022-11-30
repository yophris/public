import { Breadcrumbs, Stack, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import SearchInput from 'components/fields/SearchInput';
import SelectDropdown from 'components/fields/SelectDropdown';
import TextInput from 'components/fields/TextInput';
import SettingDrawer from './templates/SettingDrawer';
import SettingPageLayout from './templates/SettingPageLayout';
import AppDatePicker from 'components/fields/AppDatePicker';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';
import AppButton from 'components/AppButton';

const Organization = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const breadcrumbs = [
    <Link
      component={RouterLink}
      to="/app/settings"
      sx={{ fontSize: '1.6rem', fontWeight: 600, color: 'primary.main' }}
      underline="hover"
      key="1"
      color="inherit"
    >
      SETTINGS
    </Link>,
    <Typography key="2" variant="h3_bold_secondary">
      COMPANY
    </Typography>,
  ];

  return (
    <>
      <Stack
        sx={{
          padding: 2,
          background: '#FAFBFC',
          borderBottom: '1px solid #EBEBEB',
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="large" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <SettingPageLayout
        title="Organization Setting"
        subtitle="It is a long established fact that a reader will be distracted"
      >
        <Stack spacing={3}>
          <Typography variant="h3_bold_secondary" component="h3">
            Organization Details
          </Typography>
          {/* <form onSubmit={handleSubmit(onSubmit)}></form> */}
          <TextInput
            label="Organization Name"
            register={register}
            name="companyName"
          />
          <TextInput label="Industry" register={register} name="industry" />

          <AppDatePicker
            label="Established"
            register={register}
            name="established"
          />
          <SettingDrawer />

          <AppButton label={'Save'} variant="contained" />
        </Stack>
      </SettingPageLayout>
    </>
  );
};

export default Organization;
