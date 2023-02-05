import SimpleSmartForm from '@/components/smartFormComponents/SimpleSmartForm';
import { Grid } from '@mui/material';
import AppSideViewButton from 'components/AppSideViewButton';
import AppAutocomplete from 'components/fields/AppAutoComplete';
import AppCheckbox from 'components/fields/AppCheckbox';
import AppDropdown from 'components/fields/AppDropdown';
import AppForm from 'components/fields/AppForm';
import WorkweekReadonly from 'components/fields/AppWorkweekCheckbox/WorkweekReadonly';
import TextInput from 'components/fields/TextInput';
import LeaveTypeRulesSetting from 'components/settings/LeaveTypeRulesSetting';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useMutation } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';

const leavePolicy = [
  {
    element: TextInput,
    attr: {
      label: 'Leave Policy Name',
      name: 'leavePolicy.name',
    },
    xs: 6,
  },
  {
    element: AppAutocomplete,
    attr: {
      label: 'Select Workweek',
      name: 'leavePolicy.workweekId',
      asyncData: {
        endpointApi: getSetting,
        endpoint: 'settings/workweek',
        key: 'workweek',
      },
    },
    children: {
      element: WorkweekReadonly,
      attr: {
        name: 'leavePolicy.workReadonly',
        lookup: 'leavePolicy.workweekId',
      },
      xs: 12,
      md: 6,
    },
    xs: 12,
  },
  {
    element: AppAutocomplete,
    attr: {
      label: 'Select Holiday Calendar',
      name: 'leavePolicy.holidayCalendarId',
      asyncData: {
        endpointApi: getSetting,
        endpoint: 'settings/workweek',
        key: 'workweek',
      },
    },
    children: {
      element: AppSideViewButton,
      attr: {
        name: 'leavePolicy.calendarSideView',
        lookup: 'leavePolicy.holidayCalendarId',
      },
      xs: 12,
      md: 6,
    },
    xs: 12,
  },
];

const policyPeriod = [
  {
    element: AppDropdown,
    attr: {
      label: 'Select Start Month',
      name: 'policyPeriod.startMonth',
      options: [
        { text: 'January 2022', value: 'jan' },
        { text: 'February 2022', value: 'feb' },
        { text: 'March 2022', value: 'mar' },
      ],
    },
    xs: 6,
  },
  {
    element: AppDropdown,
    attr: {
      label: 'Select End Month',
      name: 'policyPeriod.endMonth',
      options: [
        { text: 'September 2022', value: 'sep' },
        { text: 'November 2022', value: 'nov' },
        { text: 'December 2022', value: 'dec' },
      ],
    },
    xs: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Applicable from start date',
      name: 'policyPeriod.startDate',
      options: [
        { text: 'September 2022', value: 'sep' },
        { text: 'November 2022', value: 'nov' },
        { text: 'December 2022', value: 'dec' },
      ],
    },
    xs: 6,
  },
  {
    element: AppDropdown,
    attr: {
      label: 'Select Approval Heirarchy Type',
      name: 'policyPeriod.heirarchyType',
      options: [
        { text: 'Heirarchy 1', value: 'h1' },
        { text: 'Heirarchy 2', value: 'h2' },
        { text: 'Heirarchy 3', value: 'h3' },
      ],
    },
    xs: 6,
  },
];
const leaveType = [
  {
    element: LeaveTypeRulesSetting,
    type: 'group',
    name: 'leaveType',
    fieldForArray: {
      leaveTypeId: '',
      accurateRule: {
        balanceType: '',
        startDate: '',
      },
      balanceRule: {
        limit: '',
        daysToReq: '',
        carryForwardType: '',
      },
      requestRule: {
        restrictBackdated: false,
        limit: '',
      },
    },
    tabs: [
      {
        id: 'accurateRule',
        text: 'Accurat Rule',
        fields: [
          {
            element: AppDropdown,
            attr: {
              label: 'Select Balance Type',
              name: 'accurateRule.balanceType',
              options: [
                { text: 'Fixed Balance 1', value: 'f1' },
                { text: 'Fixed Balance 2', value: 'f2' },
                { text: 'Fixed Balance 3', value: 'f3' },
              ],
            },
          },
          {
            element: TextInput,
            attr: {
              inputAdornment: {
                text: 'Days',
                placement: 'end',
              },
              label: 'Accurate Rate',
              name: 'accurateRule.startDate',
            },
          },
        ],
      },
      {
        id: 'balanceRule',
        text: 'Balance Rules',
        fields: [
          {
            element: TextInput,
            attr: {
              label: 'Enter Limit',
              name: 'balanceRule.limit',
              inputAdornment: {
                text: 'Days',
                placement: 'end',
              },
            },
          },
          {
            element: TextInput,
            attr: {
              label: 'Enter Days to request when balance is “0”',
              name: 'balanceRule.daysToReq',
              inputAdornment: {
                text: 'Days',
                placement: 'end',
              },
            },
          },
          {
            element: AppDropdown,
            attr: {
              label: 'Select carry forward type',
              name: 'balanceRule.carryForwardType',
              options: [
                { text: 'Total remaining count', value: 'trc' },
                { text: 'Limit count', value: 'lc' },
              ],
            },
          },
        ],
      },
      {
        id: 'requestRule',
        text: 'Request Rules',
        fields: [
          {
            element: AppCheckbox,
            attr: {
              label: 'Restrict back-dated leave action',
              name: 'requestRule.restrictBackdated',
            },
          },
          {
            element: TextInput,
            attr: {
              label: 'Enter Days to limit to requested at once',
              name: 'requestRule.limit',
              inputAdornment: {
                text: 'Days',
                placement: 'end',
              },
            },
          },
        ],
      },
    ],
    xs: 12,
  },
];

const leavePolicyForm = {
  key: 'leavePolicy',
  form: [
    {
      header: '',
      fields: leavePolicy,
    },
    {
      header: 'Policy Period',
      fields: policyPeriod,
    },
    {
      header: 'Leave Type Rules Setting',
      fields: leaveType,
    },
  ],
  defaultValues: {
    leavePolicy: {
      name: '',
      workweekId: '',
    },
    policyPeriod: {
      startMonth: '',
      endMonth: '',
      startDate: '',
      heirarchyType: '',
    },
    leaveType: [leaveType.fieldForArray],
  },
  endpoint: 'settings/leavePolicy',
  texts: {
    title: 'Leave',
    key: 'holidayName',
    breadcrumbText: 'Leave',
    drawerTitle: 'Add Leave',
    mainTitle: 'Add New Leave Calendar',
    mainDescription: 'It is short description for leavePolicy',
    sideTitle: 'Add Leave from templates',
    sideDescription:
      "It is a long established fact thats a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  // const qc = useQueryClient();
  // const alert = useAlert();
  // const {
  //   isLoading,
  //   data: response,
  //   error,
  // } = useQuery('get' + leavePolicyForm.key, () =>
  //   leavePolicyForm.getAllFn(leavePolicyForm.endpoint)
  // );

  // create
  const onCreate = useMutation(
    (data) => leavePolicyForm.postFn(leavePolicyForm.endpoint, data),
    {
      onSuccess: () => {
        qc.invalidateQueries('get' + leavePolicyForm.key);
        alert.success(response?.data ? `Updated` : `Company Created`);
      },
      onError: (data) => {
        alert.error('Failed');
      },
    }
  );

  const LeavePolicyPlan = {
    section: {
      fields: [
        // {
        //   type: 'Title',
        //   gridSizes:{md:12},
        //   title: 'Add New Leave Calendar',
        //   subTitle: 'It is short description for leavePolicy',
        // },
        {
          label: 'Leave Policy Name',
          // isRequired: true,
          type: 'Text',
          id: 'leavePolicyName',
          gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
          config: {
            placeholder: 'Leave Policy Name',
          },
          validations: [
            {
              type: 'required',
            },
          ],
        },
        {
          label: 'Select Workweek',
          type: 'Select',
          gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
          id: 'workweek',
          validations: [
            {
              type: 'required',
            },
          ],
          select: {
            type: 'inLine',
            options: [
              { value: '30', label: '30 Days' },
              { value: '60', label: '60 Days' },
              { value: '90', label: '90 Days' },
            ],
          },
        },
        {
          label: 'Select Holiday Calendar',
          type: 'Select',
          gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
          id: 'holidayCalendar',
          validations: [
            {
              type: 'required',
            },
          ],
          select: {
            type: 'inLine',
            options: [
              { value: '30', label: '30 Days' },
              { value: '60', label: '60 Days' },
              { value: '90', label: '90 Days' },
            ],
          },
        },
        {
          type: 'Divider',
        },
        {
          type: 'Title',
          title: 'Policy Period',
          gridSizes: { md: 12 },
        },
        {
          label: 'Select Start Month',
          type: 'Select',
          gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
          id: 'startMonth',
          validations: [
            {
              type: 'required',
            },
          ],
          select: {
            type: 'inLine',
            options: [
              { value: '30', label: '30 Days' },
              { value: '60', label: '60 Days' },
              { value: '90', label: '90 Days' },
            ],
          },
        },
        {
          label: 'Select End Month',
          type: 'Select',
          gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
          id: 'endMonth',
          validations: [
            {
              type: 'required',
            },
          ],
          select: {
            type: 'inLine',
            options: [
              { value: '30', label: '30 Days' },
              { value: '60', label: '60 Days' },
              { value: '90', label: '90 Days' },
            ],
          },
        },
        {
          label: 'Applicable from start date',
          // isRequired: true,
          type: 'Text',
          id: 'fromStartDate',
          gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
          config: {
            placeholder: 'Applicable from start date',
          },
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
          id: 'approvalHeirarchyType',
          validations: [
            {
              type: 'required',
            },
          ],
          select: {
            type: 'inLine',
            options: [
              { value: '30', label: '30 Days' },
              { value: '60', label: '60 Days' },
              { value: '90', label: '90 Days' },
            ],
          },
        },
        {
          type: 'Divider',
        },
        {
          type: 'Title',
          gridSizes: { md: 12 },
          title: 'Leave Type Rules Setting',
        },
        {
          // title: 'Education Details',
          id: 'LeaveRules',
          appendButtonText: '+ Add another Leave Type ',
          type: 'FieldArray',
          gridSizes: { xs: 12, sm: 6, md: 3 },
          arrayFields: [
            {
              label: 'Leave Type',
              type: 'Select',
              gridSizes: { xs: 12, sm: 6, md: 3 },
              fieldName: 'leaveType',
              validations: [
                {
                  type: 'required',
                },
              ],
              select: {
                type: 'inLine',
                options: [
                  { value: 'sickLeave', label: 'Sick Leave' },
                  { value: 'earnedLeave', label: 'Earned Leave' },
                  { value: 'annualLeave', label: 'Annual Leave' },
                ],
              },
            },
            {
              isInFieldArray: true,
              gridSizes: { md: 12, sm: 12 },
              fieldName: 'rules',
              type: 'Tabs',
              tabs: [
                {
                  text: 'Accural Rules',
                  fields: [
                    {
                      label: 'Select Balance Type',
                      type: 'Select',
                      gridSizes: { xs: 12, sm: 6, md: 3 },
                      id: 'accuralRules.balanceType',
                      validations: [
                        {
                          type: 'required',
                        },
                      ],
                      select: {
                        type: 'inLine',
                        options: [
                          { value: 'sickLeave', label: 'Sick Leave' },
                          { value: 'earnedLeave', label: 'Earned Leave' },
                          { value: 'annualLeave', label: 'Annual Leave' },
                        ],
                      },
                    },
                    {
                      label: 'Accural Rate',
                      // isRequired: true,
                      type: 'Text',
                      id: 'accuralRules.accuralType',
                      gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
                      inputAdornment: {
                        placement: 'end',
                        text: 'Days',
                      },
                      config: {
                        placeholder: 'Accural Rate',
                      },
                      validations: [
                        {
                          type: 'required',
                        },
                      ],
                    },
                  ],
                },
                {
                  text: 'Balance Rule',
                  fields: [
                    {
                      label: 'Enter Limit',
                      // isRequired: true,
                      type: 'Text',
                      id: 'balanceRules.limit',
                      gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
                      inputAdornment: {
                        placement: 'end',
                        text: 'Days',
                      },
                      config: {
                        placeholder: 'Enter Limit',
                      },
                      validations: [
                        {
                          type: 'required',
                        },
                      ],
                    },
                    {
                      label: 'Enter Days to request when balance is “0”',
                      // isRequired: true,
                      type: 'Text',
                      id: 'balanceRules.daysWhenZeroBalance',
                      gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
                      inputAdornment: {
                        placement: 'end',
                        text: 'Days',
                      },
                      config: {
                        placeholder: 'Enter Days',
                      },
                      validations: [
                        {
                          type: 'required',
                        },
                      ],
                    },
                    {
                      label: 'Select carry forward type',
                      type: 'Select',
                      gridSizes: { xs: 12, sm: 6, md: 3 },
                      id: 'balanceRules.carryForwardType',
                      validations: [
                        {
                          type: 'required',
                        },
                      ],
                      select: {
                        type: 'inLine',
                        options: [
                          {
                            value: 'totalRemainingCount',
                            label: 'Total remaining Count',
                          },
                          { value: 'limitCount', label: 'Limit count' },
                          { value: 'annualLeave', label: 'Annual Leave' },
                        ],
                      },
                    },
                  ],
                },
                {
                  text: 'Request Rules',
                  fields: [
                    {
                      type: 'Checkbox',
                      label: 'Restrict back-dated leave action',
                      id: 'requestRules.RestrictBackDatedLeave',
                    },
                    {
                      label: 'Enter Days to limit to requested at once',
                      // isRequired: true,
                      type: 'Text',
                      id: 'requestRules.limit',
                      gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
                      inputAdornment: {
                        placement: 'end',
                        text: 'Days',
                      },
                      config: {
                        placeholder: 'Enter Days',
                      },
                      validations: [
                        {
                          type: 'required',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        
      ],
    },
  };

  return (
    <SettingPageLayout texts={leavePolicyForm.texts}>
      <Grid container sx={{ overflowY: 'auto' }}>
        <SimpleSmartForm plan={LeavePolicyPlan} />
      </Grid>

      {/* <AppForm
        form={leavePolicyForm.form}
        defaultValues={leavePolicyForm.defaultValues}
        submitData={(data) => onCreate.mutate({ ...data })}
        edit={false}
        cancelDrawer={null}
      /> */}
    </SettingPageLayout>
  );
}
