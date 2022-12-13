import { Box, Stack } from '@mui/material';
import AppTable from 'components/AppTable';
import AppAutocomplete from 'components/fields/AppAutoComplete';
import AppCountInput from 'components/fields/AppCountInput';
import AppDatePicker from 'components/fields/AppDatePicker';
import AppDropdown from 'components/fields/AppDropdown';
import AppForm from 'components/fields/AppForm';
import AppSwitch from 'components/fields/AppSwitch';
import TextInput from 'components/fields/TextInput';
import HolidayList from 'components/settings/HolidayList';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useAlert } from 'react-alert';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { addressFields } from '../general/station';

const holiday = [
  {
    element: TextInput,
    attr: {
      label: 'Holiday Calendar Name',
      name: 'holiday.holidayName',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Holiday Name is Required'],
        },
      ],
    },
    size: 8,
  },
  {
    element: AppSwitch,
    attr: {
      label: 'Allow Optional Holidays',
      name: 'holiday.divisionType',
    },

    size: 6,
  },
  {
    element: AppCountInput,
    attr: {
      label: 'Number of Optional holidays that can be availed',
      name: 'holiday.optionalHolidaysCount',
    },
    size: 12,
  },
  // {
  //   element: AppAutocomplete,
  //   attr: {
  //     label: 'Holiday Head',
  //     name: 'holiday.holidayHead',
  //     options: [
  //       { text: 'Holiday Head 1', value: 'dh1' },
  //       { text: 'Holiday Head 2', value: 'dh2' },
  //       { text: 'Holiday Head 3', value: 'dh3' },
  //     ],
  //   },
  //   size: 12,
  // },
];
const holidayTemplate = [
  {
    element: AppDropdown,
    attr: {
      label: 'Country',
      name: 'holidayTemplate.country',
      options: [
        { text: 'UAE', value: 'uae' },
        { text: 'India', value: 'ind' },
      ],
    },
    size: 6,
  },
  {
    element: AppDropdown,
    attr: {
      label: 'Year',
      name: 'holidayTemplate.year',
      options: [
        { text: '2019', value: '2019' },
        { text: '2020', value: '2020' },
        { text: '2021', value: '2021' },
        { text: '2022', value: '2022' },
      ],
    },

    size: 6,
  },
];

const holidayList = [
  {
    element: HolidayList,
    attr: {
      label: 'Holiday Calendar Name',
      name: 'holiday.holidayName',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Holiday Name is Required'],
        },
      ],
    },
    size: 12,
  },
];

const holidayForm = {
  key: 'holiday',
  form: [
    {
      header: '',
      fields: holiday,
    },
    {
      header: 'Holiday List',
      subHeader:
        'To add a pre-defined holiday, Add from templete on right side or Add Custom Holiday',
      fields: holidayList,
    },
  ],
  endpoint: 'settings/holiday',
  texts: {
    title: 'Holiday',
    key: 'holidayName',
    breadcrumbText: 'Holiday',
    drawerTitle: 'Add Holiday',
    mainTitle: 'Add New Holiday Calendar',
    mainDescription: 'It is short description for holiday',
    sideTitle: 'Add Holiday from templates',
    sideDescription: 'This is india public holidays',
  },
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};
const holidayTemplateForm = {
  key: 'holiday',
  form: [
    {
      header: '',
      fields: holidayTemplate,
    },
  ],
  endpoint: 'settings/holiday',
  texts: {
    title: 'Holiday',
    key: 'holidayName',
    breadcrumbText: 'Holiday',
    drawerTitle: 'Add Holiday',
    mainTitle: 'Add New Holiday Calendar',
    mainDescription: 'It is short description for holiday',
    sideTitle: 'Add Holiday from templates',
    sideDescription: 'This is india public holidays',
  },
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  const qc = useQueryClient();
  const alert = useAlert();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get' + holidayForm.key, () =>
    holidayForm.getAllFn(holidayForm.endpoint)
  );

  // create
  const onCreate = useMutation(
    (data) =>
      response?.data
        ? holidayForm.putFn(holidayForm.endpoint, response.data.id, data)
        : holidayForm.postFn(holidayForm.endpoint, data),
    {
      onSuccess: () => {
        qc.invalidateQueries('get' + holidayForm.key);
        alert.success(response?.data ? `Updated` : `Company Created`);
      },
      onError: (data) => {
        alert.error('Failed');
      },
    }
  );
  return (
    <SettingPageLayout texts={holidayForm.texts} SideChildren={SideChildren}>
      <AppForm
        form={holidayForm.form}
        submitData={(data) => onCreate.mutate({ ...data })}
        edit={response?.data}
        cancelDrawer={null}
      />
    </SettingPageLayout>
  );
}

//Zustand need to be configured for this component, The table data is
//from third party api, we can add those to our holiday table
const SideChildren = () => {
  return (
    <Stack spacing={3}>
      <AppForm
        form={holidayTemplateForm.form}
        cancelDrawer={null}
        showButtons={false}
        padding={0}
      />
      {/* make this dynamic */}
      <AppTable />
    </Stack>
  );
};
