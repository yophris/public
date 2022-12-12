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
    size: 12,
  },
  {
    element: 'label',
    attr: {
      label: 'Select the work days for this week',
      isRequired: true,
    },
    size: 12,
  },
  {
    element: AppWorkweekCheckbox,
    attr: {
      name: 'workweek.sunday',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Please select the days'],
        },
      ],
    },
    size: 1.7,
  },
  {
    element: AppWorkweekCheckbox,
    attr: {
      name: 'workweek.monday',
    },

    size: 1.7,
  },
  {
    element: AppWorkweekCheckbox,
    attr: {
      name: 'workweek.tuesday',
    },

    size: 1.7,
  },
  {
    element: AppWorkweekCheckbox,
    attr: {
      name: 'workweek.wednesday',
    },

    size: 1.7,
  },
  {
    element: AppWorkweekCheckbox,
    attr: {
      name: 'workweek.thursday',
    },

    size: 1.7,
  },
  {
    element: AppWorkweekCheckbox,
    attr: {
      name: 'workweek.friday',
    },

    size: 1.7,
  },
  {
    element: AppWorkweekCheckbox,
    attr: {
      name: 'workweek.saturday',
    },

    size: 1.7,
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
    key: 'workweek',
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
