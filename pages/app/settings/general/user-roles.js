import * as React from 'react';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import UserRolesPermissions from 'components/settings/UserRolesPermissions';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';

const userRoles = [
  {
    element: TextInput,
    attr: {
      label: 'Role Name',
      name: 'userRoles.name',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['User Roles Name is Required'],
        },
      ],
    },
    xs: 12,
  },
  {
    element: TextInput,
    attr: {
      label: 'Description',
      name: 'userRoles.description',
      isMultiline: true,
    },

    xs: 12,
  },
];
const employeeRequest = [
  {
    element: UserRolesPermissions,
    type: 'group',
    attrs: [
      {
        name: 'employeeRequest.termination',
        label: 'Manage Termination Request',
      },
      {
        name: 'employeeRequest.trasfer',
        label: 'Manage Transfer Request',
      },
      {
        name: 'employeeRequest.leave',
        label: 'Manage Leave Request',
      },
      {
        name: 'employeeRequest.resignation',
        label: 'Manage Resignation Request',
      },
      {
        name: 'employeeRequest.reimbursement',
        label: 'Manage Reimbursement Request',
      },
    ],
    isRequired: false,
  },
];
const employeeDirectory = [
  {
    element: UserRolesPermissions,
    type: 'group',
    attr: {
      name: 'employeeDirectory.all',
      label: 'Select all of the functionality',
    },
    attrs: [
      {
        name: 'employeeDirectory.showEmployeeStatus',
        label: 'Show Inactive / Deleted / Exited Employee',
      },
      {
        name: 'employeeDirectory.importEmployee',
        label: 'Import Employee to Directory',
      },
      {
        name: 'employeeDirectory.exportEmployee',
        label: 'Export Employee to Directory',
      },
      {
        name: 'employeeDirectory.deleteEmployee',
        label: 'Delete employee from Directory',
      },
    ],
    isRequired: false,
  },
];
const otherEmployeeAccess = [
  {
    element: UserRolesPermissions,
    type: 'group',
    selectAllOption: {
      isEnabled: true,
      label: 'View all fields of other employees',
    },
    attrs: [
      {
        name: 'otherEmployeeAccess.personalSectionView',
        label: 'Personal Section',
      },
      {
        name: 'otherEmployeeAccess.jobSectionView',
        label: 'Job Section',
      },
      {
        name: 'otherEmployeeAccess.employmentEducationView',
        label: 'Employment Education',
      },
      {
        name: 'otherEmployeeAccess.compensationView',
        label: 'Compensation Section',
      },
    ],
    isRequired: false,
  },
  {
    element: UserRolesPermissions,
    type: 'group',
    selectAllOption: {
      isEnabled: true,
      label: 'Edit all fields of other employees',
    },
    attrs: [
      {
        name: 'otherEmployeeAccess.personalSectionEdit',
        label: 'Personal Section',
      },
      {
        name: 'otherEmployeeAccess.jobSectionEdit',
        label: 'Job Section',
      },
      {
        name: 'otherEmployeeAccess.employmentEducationEdit',
        label: 'Employment Education',
      },
      {
        name: 'otherEmployeeAccess.compensationEdit',
        label: 'Compensation Section',
      },
    ],
    isRequired: false,
  },
];
const payroll = [
  {
    element: UserRolesPermissions,
    type: 'group',
    attrs: [
      {
        name: 'payroll.manageAllPayrolls',
        label: 'Manage All Payroll Processes',
      },
    ],
    isRequired: false,
  },
];

const userRolesForm = {
  key: 'userRoles',
  form: [
    {
      header: '',
      fields: userRoles,
    },
    {
      header: 'Permissions',
      subHeader:
        'This will be important to show or hide the pages according to user roles',
    },
    {
      header: 'Employee Request Setting',
      subHeader:
        'Select the areas where user-role can approve, reject employee request',
      noDivider: true,
      fields: employeeRequest,
    },
    {
      header: 'Employee Directory',
      subHeader:
        'This will be important to show or hide the pages according to user roles',
      fields: employeeDirectory,
    },
    {
      header: 'Access to other employee profile',
      subHeader:
        'This will be important to show or hide the pages according to user roles',
      fields: otherEmployeeAccess,
    },
    {
      header: 'Payroll',
      subHeader:
        'This will be important to show or hide the pages according to user roles',
      fields: payroll,
    },
  ],
  endpoint: 'settings/userRoles',
  texts: {
    title: 'User Roles',
    key: 'userRolesName',
    breadcrumbText: 'Manage Roles',
    drawerTitle: 'Add User Roles',
    mainTitle: 'List of User Roles',
    mainDescription: 'It is short description for userRoles',
    sideTitle: 'User Role',
    sideDescription:
      'This is long long long for userRoles saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  return (
    <SettingPageLayout texts={userRolesForm.texts}>
      <ListWithSidebarLayout config={userRolesForm} />
    </SettingPageLayout>
  );
}
