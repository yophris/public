import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
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

const reimbursementType = [
  {
    element: TextInput,
    attr: {
      label: 'Reimbursement Type Name',
      name: 'reimbursementType.leaveTypeName',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Reimbursement type name is Required'],
        },
      ],
    },
    xs: 12,
  },
  {
    element: TextInput,
    attr: {
      label: 'Description',
      name: 'reimbursementType.description',
      isMultiline: true,
    },
    xs: 12,
  },
];

const reimbursementTypeForm = {
  key: 'reimbursementType',
  form: [
    {
      header: '',
      fields: reimbursementType,
    },
  ],
  endpoint: 'settings/reimbursementtype/',
  texts: {
    key: 'reimbursementType',
    breadcrumbText: 'Reimbursement Type',
    drawerTitle: 'Add Reimbursement Type',
    mainTitle: 'Reimbursement Type',
    mainDescription: 'this is short description for division',
    sideTitle: 'Reimbursement Types',
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
  sideBarTitle:"Add Reimbursement Type",
  section: {
    fields: [
      {
        label: 'Reimbursement Type Name',
        // isRequired: true,
        type: 'Text',
        id: 'reimbursementTypeName',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        config: {
          placeholder: 'Reimbursement Type Name',
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
  } = useQuery('get' + reimbursementTypeForm.key, () =>
    reimbursementTypeForm.getAllFn(reimbursementTypeForm.endpoint)
  );
  return (
    <SettingPageLayout texts={reimbursementTypeForm.texts}>
      <SmartSideBarForm plan={plan} />
    </SettingPageLayout>
  );
}
