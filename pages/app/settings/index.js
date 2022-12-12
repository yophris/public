import * as React from 'react';
import Stack from '@mui/material/Stack';
import SettingsOverviewCard from 'components/settings/SettingsOverviewCard';
import { getSetting } from 'requests/settings';
import { useQuery } from 'react-query';

export default function SettingsMain() {
  //@abdullah data coming as undefined here when i console in settingsoverviwew card
  //but in the network i can see the response
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('overview', () => getSetting('settings/overview', { page: 1 }));

  return (
    <Stack spacing={2} sx={{ margin: 2 }}>
      {isLoading
        ? 'loading...'
        : settingsOverviewData.map((sod, index) => (
            <SettingsOverviewCard
              key={index}
              settingsData={sod}
              completedData={response}
            />
          ))}
    </Stack>
  );
}

//DATA
const settingsOverviewData = [
  {
    title: 'General Setting',
    subtitle: 'It is a long established fact that a reader will be distracted',
    settings: [
      {
        title: 'Organization',
        types: [
          {
            id: 'Company',
            path: 'general/Company',
            title: 'Company',
          },
          {
            id: 'Division',
            path: 'general/division',
            title: 'Division',
          },

          {
            id: 'Department',
            path: 'general/department',
            title: 'Department',
          },
          {
            id: 'Station',
            path: 'general/station',
            title: 'Station',
          },
          {
            id: 'Team',
            path: 'general/teams',
            title: 'Teams',
          },
          {
            id: 'CompanyDocument',
            path: 'general/company-documents',
            title: 'Organization Document',
          },
        ],
      },
      {
        title: 'Roles & Privileges',

        types: [
          {
            id: 'UserRoles',
            path: 'general/userRoles',
            title: 'User Roles',
          },
        ],
      },
    ],
  },
  {
    title: 'Employee Information System',
    subtitle: 'It is a long established fact that a reader will be distracted',
    settings: [
      {
        title: 'On-boarding Setting',
        types: [
          {
            id: 'OnboardingChecklist',
            path: 'onboarding_checklist',
            title: 'Checklist',
          },
        ],
      },
      {
        title: 'Off-boarding Setting',
        types: [
          {
            id: 'OffboardingChecklist',
            path: 'offboarding_checklist',
            title: 'Checklist',
          },
        ],
      },
    ],
  },
  {
    title: 'Workflow Management',
    subtitle: 'It is a long established fact that a reader will be distracted',
    settings: [
      {
        title: 'Leave Setting',
        types: [
          {
            id: 'Leavepolicyitem',
            path: 'leavePolicy',
            title: 'Leave Policy',
          },
          {
            id: 'Leave',
            path: 'leaveType',
            title: 'Leave Type',
          },
          {
            id: 'Holiday',
            path: 'holidayCalender',
            title: 'Holiday Calender',
          },
          {
            id: 'Workweek',
            path: 'workflow/workweek',
            title: 'Work Week',
          },
        ],
      },
      {
        title: 'Reimbursement Setting',
        types: [
          {
            id: 'Reimbursementpolicy',
            path: 'reimbursement_policy',
            title: 'Reimbursement Policy',
          },
          {
            id: 'Reimbursementtype',
            path: 'reimbursement_type',
            title: 'Reimbursement Type',
          },
        ],
      },
      {
        title: 'Approval Heirachy',
        types: [
          {
            id: 'Approvaltype',
            path: 'approval_type',
            title: 'Approval Type',
          },
          {
            id: 'Approvalhierarchy',
            path: 'approval_hierarchy',
            title: 'Approval Hierarchy',
          },
        ],
      },
    ],
  },
  {
    title: ' Finance / Payroll Managemnet',
    subtitle: 'It is a long established fact that a reader will be distracted',
    settings: [
      {
        title: 'Organization',
        types: [
          {
            id: '',
            path: 'finance/empPayroll',
            title: 'Payroll',
          },
        ],
      },
    ],
  },
];
