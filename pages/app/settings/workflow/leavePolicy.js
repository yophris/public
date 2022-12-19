import AppAccordion from 'components/AppAccordion';
import AppAutocomplete from 'components/fields/AppAutoComplete';
import AppDropdown from 'components/fields/AppDropdown';
import AppForm from 'components/fields/AppForm';
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
    xs: 7,
  },
  {
    element: AppAutocomplete,
    attr: {
      label: 'Select Workweek',
      name: 'leavePolicy.workweekId',
      options: [
        { text: 'Workweek 1', value: 'ww1' },
        { text: 'Workweek 2', value: 'ww2' },
        { text: 'Workweek 3', value: 'ww3' },
      ],
    },
    xs: 7,
  },
  // {
  //   element: TextInput,
  //   attr: {
  //     label: 'need to do',
  //     name: 'leavePolicy.namedd',
  //   },
  //   xs: 5,
  // },
  {
    element: AppAutocomplete,
    attr: {
      label: 'Select Holiday Calendar',
      name: 'leavePolicy.holidayCalendarId',
      options: [
        { text: 'Holiday 1', value: 'hc1' },
        { text: 'Holiday 2', value: 'hc2' },
        { text: 'Holiday 3', value: 'hc3' },
      ],
    },
    xs: 7,
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
            element: TextInput,
            attr: {
              label: 'Select Balance Type',
              name: 'accurateRule.balanceType',
            },
          },
          {
            element: TextInput,
            attr: {
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
              label: 'Balance type',
              name: 'balanceRule.balanceType',
            },
          },
          {
            element: TextInput,
            attr: {
              label: 'balance Rate',
              name: 'balanceRule.startDate',
            },
          },
        ],
      },
      {
        id: 'requestRule',
        text: 'Request Rules',
        fields: [
          {
            element: TextInput,
            attr: {
              label: 'Request type',
              name: 'requestRule.requestType',
            },
          },
          {
            element: TextInput,
            attr: {
              label: 'Request Rate',
              name: 'requestRule.startDate',
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
        submitData={(data) => onCreate.mutate({ ...data })}
        edit={false}
        cancelDrawer={null}
      />
    </SettingPageLayout>
  );
}
