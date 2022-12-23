import AppDropdown from 'components/fields/AppDropdown';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import React from 'react';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { useQuery, useQueryClient } from 'react-query';
import { useAlert } from 'react-alert';

const reimbursementPolicy = [
  {
    element: TextInput,
    attr: {
      label: 'Enter reimbursement Policy Name',
      name: 'reimbursementPolicy.leaveTypeName',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Reimbursement Policy name is Required'],
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
  }
];

const approvalRange=[
  {
    element: TextInput,
    attr: {
      label: 'Max Expences',
      name: 'reimbursementPolicy.leaveTypeName',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Max Expences is Required'],
        },
      ],
    },
    xs: 6,
  },
  {
    element: AppDropdown,

    attr: {
      label: 'Select Approval Heirarchy Type',
      name: 'approvalRange.heirarchyType1',
      options: [
        { text: 'Approval Heirarchy Type 1', value: 'Approval Heirarchy Type1' },
        { text: 'Approval Heirarchy Type 2', value: 'Approval Heirarchy Type2' }

      ],
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Approval Heirarchy Type is Required'],
        },
      ],
    },
    xs: 6,
  },

  {
    element: TextInput,
    attr: {
      label: 'Max Expences',
      name: 'reimbursementPolicy.leaveTypeName',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Max Expences is Required'],
        },
      ],
    },
    xs: 6,
  },
  {
    element: AppDropdown,

    attr: {
      label: 'Select Approval Heirarchy Type',
      name: 'approvalRange.heirarchyType2',
      options: [
        { text: 'Approval Heirarchy Type 1', value: 'Approval Heirarchy Type1' },
        { text: 'Approval Heirarchy Type 2', value: 'Approval Heirarchy Type2' }

      ],
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Approval Heirarchy Type is Required'],
        },
      ],
    },
    xs: 6,
  },
]

const reimbursementPolicyForm = {
  key: 'reimbursementPolicy',
  form: [
    {
      header: 'Add Reimbursement Policy',
      fields: reimbursementPolicy,
    },
    {
      header: 'Approval Range',
      fields: approvalRange,
    },
  ],
  endpoint: 'settings/reimbursementpolicy/',
  texts: {
    key: 'reimbursementPolicy',
    breadcrumbText: 'reimbursement Policy',
    drawerTitle: 'Add Reimbursement Policy',
    mainTitle: 'Reimbursement Policy',
    mainDescription: 'this is short description for reimbursement Policy',
    sideTitle: 'Reimbursement Policy',
    sideDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  // validation: validation_station.concat(validation_address),
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
  } = useQuery('get' + reimbursementPolicyForm.key, () =>
    reimbursementPolicyForm.getAllFn(reimbursementPolicyForm.endpoint)
  );
  return (
    <SettingPageLayout texts={reimbursementPolicyForm.texts}>
      <ListWithSidebarLayout config={reimbursementPolicyForm} />
    </SettingPageLayout>
  );
}
