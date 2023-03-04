import SettingsFormPage from '@/components/PageMaker/SettingsFormPage';
import EditableList from '@/components/settings/EditableList';
import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import { Stack, Typography } from '@mui/material';
import AppDropdown from 'components/fields/AppDropdown';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useSettingFormPage } from 'hooks/useSettingPageForm';
import React from 'react';
import { useAlert } from 'react-alert';
import { useQuery, useQueryClient } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { extractFromJSON } from 'Utils';

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

const plan = {
  listLabelExp: '**.leaveName[0]',
  sideBarTitle: 'Add Leave Type',
  section: {
    fields: [
      {
        label: 'Enter Leave Type Name',
        // isRequired: true,
        type: 'Text',
        id: 'leaveName',
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
        id: 'forGender',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/const/Genders',
        },
      },
      {
        label: 'For Marital Status',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'forMaritalStatus',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/const/MaritalStatus',
        },
      },
      {
        label: 'is Paid Leave ?',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        id: 'isPaidLeave',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'inLine',
          options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No (Loss Of Pay)' },
          ],
        },
      },
    ],
  },
  postFn: createSetting,
  putFn: updateSetting,
  getFn: getSetting,
  deleteFn: deleteSetting,
  endpoint: 'settings/leave',
  key: 'leave',
  texts: {
    key: 'leave',
    breadcrumbText: 'Leave Type',
    drawerTitle: 'Add Leave Type',
    mainTitle: 'Leave Type',
    mainDescription: 'this is short description for division',
    sideTitle: 'Leave Types',
    sideDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
};

export default function Page() {
  const {
    setOpenSideMenu,
    openSideMenu,
    editData,
    setEditData,
    response,
    isLoading,
    editClickCB,
  } = useSettingFormPage(plan);

  return (
    <SettingPageLayout texts={plan.texts}>
      {/* <SmartFromToDatePicker /> */}
      <SmartSideBarForm
        plan={plan}
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
        editData={editData}
      />
      <Stack sx={{ rowGap: 1 }}>
        {isLoading
          ? 'Loading'
          : response?.data?.map((e, index) => (
              <EditableList
                key={index}
                label={extractFromJSON(e, plan?.listLabelExp || '**.leaveName')}
                cb={{
                  Edit: () => editClickCB(e),
                  Delete: () => onDeleteClick(e.id),
                }}
              />
            ))}
      </Stack>
    </SettingPageLayout>
  );
}
