import AppAccordion from 'components/AppAccordion';
import AppSideViewButton from 'components/AppSideViewButton';
import AppAutocomplete from 'components/fields/AppAutoComplete';
import AppCheckbox from 'components/fields/AppCheckbox';
import AppDropdown from 'components/fields/AppDropdown';
import AppForm from 'components/fields/AppForm';
import WorkweekReadonly from 'components/fields/AppWorkweekCheckbox/WorkweekReadonly';
import TextInput from 'components/fields/TextInput';
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
        name: 'leavePolicy.workReadonly',
        lookup: 'leavePolicy.workweekId',
      },
      xs: 12,
      md: 6,
    },
    xs: 12,
  },
];

const holidayList = [
  {
    element: AppDropdown,
    attr: {
      label: 'Select Start Month',
      name: 'holidayList.startMonth',
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
      name: 'holidayList.endMonth',
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
      name: 'holidayList.startDate',
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
      name: 'holidayList.heirarchyType',
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
    element: AppAccordion,
    type: 'group',
    tabs: [
      {
        id: 'accurateRule',
        text: 'Accurat Rule',
        fields: [
          {
            element: AppDropdown,
            attr: {
              label: 'Select Balance Type',
              name: 'holidayList.accurateRule.balanceType',
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
              name: 'holidayList.accurateRule.startDate',
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
              name: 'holidayList.balanceRule.limit',
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
              name: 'holidayList.balanceRule.daysToReq',
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
              name: 'holidayList.balanceRule.carryForwardType',
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
              name: 'holidayList.requestRule.restrictBackdated',
            },
          },
          {
            element: TextInput,
            attr: {
              label: 'Enter Days to limit to requested at once',
              name: 'holidayList.requestRule.limit',
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
      fields: holidayList,
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
    holidayList: {
      startMonth: '',
      endMonth: '',
      startDate: '',
      heirarchyType: '',
    },
    leaveType: {
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
        restrictBackdated: '',
        limit: '',
      },
    },
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
    (data) =>
      response?.data
        ? leavePolicyForm.putFn(
            leavePolicyForm.endpoint,
            response.data.id,
            data
          )
        : leavePolicyForm.postFn(leavePolicyForm.endpoint, data),
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

  return (
    <SettingPageLayout texts={leavePolicyForm.texts}>
      <AppForm
        form={leavePolicyForm.form}
        defaultValues={leavePolicyForm.defaultValues}
        submitData={(data) => onCreate.mutate({ ...data })}
        edit={false}
        cancelDrawer={null}
      />
    </SettingPageLayout>
  );
}
