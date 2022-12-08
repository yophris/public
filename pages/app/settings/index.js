import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import SettingsOverviewCard from 'components/settings/SettingsOverviewCard';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SettingsMain() {
  return (
    <Stack spacing={2} sx={{ margin: 2 }}>
      <SettingsOverviewCard
        title="General Setting"
        subtitle="It is a long established fact that a reader will be distracted"
        settings={[
          {
            title: 'Organization',
            types: [
              {
                path: 'general/Company',
                title: 'Company',
                isCompleted: true,
              },
              {
                path: 'general/division',
                title: 'Division',
              },

              {
                path: 'general/department',
                title: 'Department',
                isCompleted: true,
              },
              {
                path: 'general/station',
                title: 'Station',
              },
              {
                path: 'general/teams',
                title: 'Teams',
                isCompleted: true,
              },
              {
                path: 'general/company-documents',
                title: 'Organization Document',
              },
            ],
          },
          {
            title: 'Roles & Privileges',

            types: [
              {
                path: 'general/userRoles',
                title: 'User Roles',
                isCompleted: true,
              },
            ],
          },
        ]}
      >
        <Typography variant="h3_bold_secondary" component="h3">
          Settings testing
        </Typography>
      </SettingsOverviewCard>
      <SettingsOverviewCard
        title="  Employee Information System"
        subtitle="It is a long established fact that a reader will be distracted"
        settings={[
          {
            title: 'On-boarding Setting',
            types: [
              {
                path: 'onboarding_checklist',
                title: 'Checklist',
              },
            ],
          },
          {
            title: 'Off-boarding Setting',
            types: [
              {
                path: 'offboarding_checklist',
                title: 'Checklist',
                isCompleted: true,
              },
            ],
          },
        ]}
      >
        <Typography variant="h3_bold_secondary" component="h3"></Typography>
      </SettingsOverviewCard>

      <SettingsOverviewCard
        title="Workflow Management"
        subtitle="It is a long established fact that a reader will be distracted"
        settings={[
          {
            title: 'Leave Setting',
            types: [
              {
                path: 'leavePolicy',
                title: 'Leave Policy',
              },
              {
                path: 'leaveType',
                title: 'Leave Type',
                isCompleted: true,
              },
              {
                path: 'holidayCalender',
                title: 'Holiday Calender',
              },
              {
                path: 'work_week',
                title: 'Work Week',
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Reimbursement Setting',
            types: [
              {
                path: 'reimbursement_policy',
                title: 'Reimbursement Policy',
                isCompleted: true,
              },
              {
                path: 'reimbursement_type',
                title: 'Reimbursement Type',
              },
            ],
          },
          {
            title: 'Approval Heirachy',
            types: [
              {
                path: 'heirachy_type',
                title: 'Heirachy Type',
              },
              {
                path: 'workflow_approval',
                title: 'Workflow Approval Setup',
              },
            ],
          },
        ]}
      ></SettingsOverviewCard>

      <SettingsOverviewCard
        title=" Finance / Payroll Managemnet"
        subtitle="It is a long established fact that a reader will be distracted"
        settings={[
          {
            title: 'Organization',
            types: [
              {
                path: 'finance/empPayroll',
                title: 'Payroll',
                isCompleted: true,
              },
            ],
          },
        ]}
      ></SettingsOverviewCard>
    </Stack>
  );
}
