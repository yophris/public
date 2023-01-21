import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import AppDropdown from 'components/fields/AppDropdown';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import React from 'react';
import { useAlert } from 'react-alert';
import { useQuery, useQueryClient } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';

const leaveType = [
  {
    element: TextInput,
    attr: {
      label: 'Enter Leave Type Name',
      name: 'leaveType.leaveTypeName',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Leave type name is Required'],
        },
      ],
    },
    xs: 12,
  },
  {
    element: TextInput,
    attr: {
      label: 'Description',
      name: 'leaveType.description',
      isMultiline: true,
    },
    xs: 12,
  },
  {
    element: AppDropdown,

    attr: {
      label: 'For Gender',
      name: 'leaveType.gender',
      options: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
        { text: 'Otrers', value: 'others' },
      ],
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Gender is Required'],
        },
      ],
    },
    xs: 6,
  },
  {
    element: AppDropdown,
    attr: {
      label: 'For Marital Status',
      name: 'leaveType.maritalStatus',
      options: [
        { text: 'Single', value: 'single' },
        { text: 'Married', value: 'married' },
      ],
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Marital status is Required'],
        },
      ],
    },
    xs: 6,
  },
  {
    element: AppDropdown,
    attr: {
      label: 'Leave is',
      name: 'leaveType.maritalStatus',
      options: [
        { text: 'Paid Leave', value: 'pl' },
        { text: 'Loss of pay', value: 'lop' },
      ],
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Leave type is Required'],
        },
      ],
    },
    xs: 12,
  },
];

const leaveTypeForm = {
  key: 'leaveType',
  form: [
    {
      header: '',
      fields: leaveType,
    },
  ],
  endpoint: 'settings/leave/',
  texts: {
    key: 'leaveType',
    breadcrumbText: 'Leave Type',
    drawerTitle: 'Add Leave Type',
    mainTitle: 'Leave Type',
    mainDescription: 'this is short description for division',
    sideTitle: 'Leave Types',
    sideDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  // validation: validation_station.concat(validation_address),
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

const plan = {
  sideBarTitle: 'Add Leave Type',
  section: {
    fields: [
      {
        label: 'Enter Leave Type Name',
        // isRequired: true,
        type: 'Text',
        id: 'leaveTypeName',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        config: {
          placeholder: 'Enter Leave Type Name',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'Description',
        type: 'Text',
        id: 'description',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        isMultiline: true,
        config: {
          placeholder: 'Description',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'For Gender',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'gender',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'inLine',
          options: [
            { value: '', label: 'None' },
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Others', label: 'Others' },
          ],
        },
      },
      {
        label: 'For Marital Status',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'maritalStatus',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'inLine',
          options: [
            { value: '', label: 'None' },
            { value: 'Single', label: 'Male' },
            { value: 'Married', label: 'Married' },
            { value: 'Others', label: 'Others' },
          ],
        },
      },
      {
        label: 'Leave is',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        id: 'leaveIs',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'inLine',
          options: [
            { value: '', label: 'None' },
            { value: 'Paid Leave', label: 'Paid Leave' },
            { value: 'Loss of Pay', label: 'Loss of Pay' },
          ],
        },
      },
    ],
  },
};

export default function Page() {
  const qc = useQueryClient();
  const alert = useAlert();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get' + leaveTypeForm.key, () =>
    leaveTypeForm.getAllFn(leaveTypeForm.endpoint)
  );
  return (
    <SettingPageLayout texts={leaveTypeForm.texts}>
      <SmartSideBarForm plan={plan} />
    </SettingPageLayout>
  );
}
