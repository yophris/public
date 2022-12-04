import TextInput from 'components/fields/TextInput';
import * as Yup from 'yup';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SelectDropdown from 'components/fields/SelectDropdown';

const division = [
  {
    element: TextInput,
    attr: {
      label: 'Division Name',
      name: 'division.divisionName',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Division Name is Required'],
        },
      ],
    },
    size: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Division Type',
      name: 'division.divisionType',
    },

    size: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Description',
      name: 'division.description',
      isMultiline: true,
    },
    size: 12,
  },
  {
    element: SelectDropdown,
    attr: {
      label: 'Division Head',
      name: 'division.divisionHead',
      options: [
        { text: 'Employee 1', value: 'e1' },
        { text: 'Employee 2', value: 'e2' },
      ],
    },
    size: 12,
  },
];

// const validation_division = Yup.object().shape({
//   division: Yup.object().shape({
//     divisionName: Yup.string().required(' name required.'),
//     divisionType: Yup.string().required('type required.'),
//     description: Yup.string().required('description required.'),
//   }),
// });

const divisionForm = {
  key: 'division',
  form: [
    {
      header: '',
      fields: division,
    },
  ],
  endpoint: 'settings/division',
  texts: {
    title: 'Division',
    key: 'divisionName',
    breadcrumbText: 'Division',
    drawerTitle: 'Add Division',
    mainTitle: 'List of Divisions',
    mainDescription: 'It is short description for division',
    sideTitle: 'List of Divisions',
    sideDescription:
      'This is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  return (
    <SettingPageLayout texts={divisionForm.texts}>
      <ListWithSidebarLayout config={divisionForm} />
    </SettingPageLayout>
  );
}
