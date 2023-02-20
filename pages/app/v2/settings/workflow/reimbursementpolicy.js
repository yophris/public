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
import ApprovalRange from 'components/settings/ApprovalRange';
import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import SettingsFormPage from '@/components/PageMaker/SettingsFormPage';

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
  },
];

const approvalRange = [
  {
    element: ApprovalRange,
    type: 'group',
    fields: [
      {
        element: TextInput,
        attr: {
          label: 'Min. Expenses',
          name: 'approvalRange.minExpense',
          inputAdornment: {
            text: 'INR',
            placement: 'start',
          },
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
            {
              text: 'Approval Heirarchy Type 1',
              value: 'Approval Heirarchy Type1',
            },
            {
              text: 'Approval Heirarchy Type 2',
              value: 'Approval Heirarchy Type2',
            },
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
          label: 'Max. Expenses',
          name: 'approvalRange.maxExpense',
          inputAdornment: {
            text: 'INR',
            placement: 'start',
          },
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
            {
              text: 'Approval Heirarchy Type 1',
              value: 'Approval Heirarchy Type1',
            },
            {
              text: 'Approval Heirarchy Type 2',
              value: 'Approval Heirarchy Type2',
            },
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
    ],
  },
  // {
  //   element: TextInput,
  //   attr: {
  //     label: 'Min. Expenses',
  //     name: 'reimbursementPolicy.leaveTypeName',
  //     unit: 'INR',
  //   },
  //   validation: {
  //     validationType: 'string',
  //     validations: [
  //       {
  //         type: 'required',
  //         params: ['Max Expences is Required'],
  //       },
  //     ],
  //   },
  //   xs: 6,
  // },
  // {
  //   element: AppDropdown,

  //   attr: {
  //     label: 'Select Approval Heirarchy Type',
  //     name: 'approvalRange.heirarchyType1',
  //     options: [
  //       {
  //         text: 'Approval Heirarchy Type 1',
  //         value: 'Approval Heirarchy Type1',
  //       },
  //       {
  //         text: 'Approval Heirarchy Type 2',
  //         value: 'Approval Heirarchy Type2',
  //       },
  //     ],
  //   },
  //   validation: {
  //     validationType: 'string',
  //     validations: [
  //       {
  //         type: 'required',
  //         params: ['Approval Heirarchy Type is Required'],
  //       },
  //     ],
  //   },
  //   xs: 6,
  // },

  // {
  //   element: TextInput,
  //   attr: {
  //     label: 'Max. Expenses',
  //     name: 'reimbursementPolicy.leaveTypeName',
  //     unit: 'INR',
  //   },
  //   validation: {
  //     validationType: 'string',
  //     validations: [
  //       {
  //         type: 'required',
  //         params: ['Max Expences is Required'],
  //       },
  //     ],
  //   },
  //   xs: 6,
  // },
  // {
  //   element: AppDropdown,

  //   attr: {
  //     label: 'Select Approval Heirarchy Type',
  //     name: 'approvalRange.heirarchyType2',
  //     options: [
  //       {
  //         text: 'Approval Heirarchy Type 1',
  //         value: 'Approval Heirarchy Type1',
  //       },
  //       {
  //         text: 'Approval Heirarchy Type 2',
  //         value: 'Approval Heirarchy Type2',
  //       },
  //     ],
  //   },
  //   validation: {
  //     validationType: 'string',
  //     validations: [
  //       {
  //         type: 'required',
  //         params: ['Approval Heirarchy Type is Required'],
  //       },
  //     ],
  //   },
  //   xs: 6,
  // },
];

const reimbursementPolicyForm = {
  key: 'reimbursementPolicy',
  form: [
    {
      header: 'Add Reimbursement Policy',
      fields: reimbursementPolicy,
    },
    {
      header: 'Approval Range',
      subHeader: 'You may add mulltiple Expense limit & Approval Heirarchy',
      fields: approvalRange,
    },
  ],
  endpoint: 'settings/reimbursementpolicy/',

  // validation: validation_station.concat(validation_address),
};

const plan = {
  sideBarTitle: 'Add Reimbursement Policy',
  endpoint: 'settings/reimbursementpolicy',
  getFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
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
  key: 'reimbursementPolicy',
  section: {
    fields: [
      { type: 'Title', title: 'Add Reimbursement Policy' },
      {
        label: 'Enter reimbursement Policy Name',
        // isRequired: true,
        type: 'Text',
        id: 'reimbursementPolicyName',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        config: {
          placeholder: 'Enter reimbursement Policy Name',
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
      { type: 'Divider' },
      {
        type: 'Title',
        title: 'Approval Range',
        subTitle: 'You may add mulltiple Expense limit & Approval Heirarchy',
      },
      {
        type: 'FieldArray',
        id: 'Approval Range',
        // title: 'Previous Employer Details',

        // title: 'Education Details',
        appendButtonText: '+ Add another range ',
        type: 'FieldArray',
        arrayFields: [
          {
            label: 'Min. Expenses',
            type: 'Text',
            fieldName: 'minExpenses',
            inputAdornment: {
              placement: 'start',
              text: 'INR',
            },
            gridSizes: { xs: 12, sm: 6, md: 6 },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Select Approval Heirarchy Type',
            type: 'Select',
            fieldName: 'minApprovalHeirarchyType',
            gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
            id: 'minApprovalHeirarchyType',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: '', label: 'None' },
                {
                  value: 'Approval Heirarchy 1',
                  label: 'Approval Heirarchy 1',
                },
                {
                  value: 'Approval Heirarchy 2',
                  label: 'Approval Heirarchy 2',
                },
              ],
            },
          },
          {
            label: 'Min. Expenses',
            type: 'Text',
            fieldName: 'maxExpenses',
            inputAdornment: {
              placement: 'start',
              text: 'INR',
            },
            gridSizes: { xs: 12, sm: 6, md: 6 },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Select Approval Heirarchy Type',
            type: 'Select',
            gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
            id: 'maxApprovalHeirarchyType',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: '', label: 'None' },
                {
                  value: 'Approval Heirarchy 1',
                  label: 'Approval Heirarchy 1',
                },
                {
                  value: 'Approval Heirarchy 2',
                  label: 'Approval Heirarchy 2',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default function Page() {
  return <SettingsFormPage plan={plan} />;

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
      <SmartSideBarForm plan={plan} />
    </SettingPageLayout>
  );
}
