import AppAutocomplete from 'components/fields/AppAutoComplete';
import AppWorkweekCheckbox from 'components/fields/AppWorkweekCheckbox';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';

const workweek = [
  {
    element: TextInput,
    attr: {
      label: 'Workweek Name',
      name: 'workweek.name',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Workweek Name is Required'],
        },
      ],
    },
    xs: 12,
  },
  {
    element: AppWorkweekCheckbox,
    type: 'group',
    label: 'Select the work days for this week',
    attrs: [
      {
        name: 'workweek.sunday',
      },
      {
        name: 'workweek.monday',
      },
      {
        name: 'workweek.tuesday',
      },
      {
        name: 'workweek.wednesday',
      },
      {
        name: 'workweek.thursday',
      },
      {
        name: 'workweek.friday',
      },
      {
        name: 'workweek.saturday',
      },
    ],
    isRequired: true,
    //need to find the way to validate each individual field or as common error for all the names
    //might need Abdullah help
    // validation: {
    //   validationType: 'string',
    //   validations: [
    //     {
    //       type: 'required',
    //       params: ['Please select the days'],
    //     },
    //   ],
    // },
  },
];

const workweekForm = {
  key: 'workweek',
  form: [
    {
      header: '',
      fields: workweek,
    },
  ],
  endpoint: 'settings/workweek',
  texts: {
    title: 'Workweek',
    key: 'name',
    breadcrumbText: 'Workweek',
    drawerTitle: 'Add New Workweek',
    mainTitle: 'List of Workweeks',
    mainDescription: 'It is short description for Workweek',
    sideTitle: 'List of Workweeks',
    sideDescription:
      'This is long long long for Workweek saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  return (
    <SettingPageLayout texts={workweekForm.texts}>
      <ListWithSidebarLayout config={workweekForm} />
    </SettingPageLayout>
  );
}
