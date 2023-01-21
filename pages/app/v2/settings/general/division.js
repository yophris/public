import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import AppAutocomplete from 'components/fields/AppAutoComplete';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';

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
    xs: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Division Type',
      name: 'division.divisionType',
    },

    xs: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Description',
      name: 'division.description',
      isMultiline: true,
    },
    xs: 12,
  },
  {
    element: AppAutocomplete,
    attr: {
      label: 'Division Head',
      name: 'division.divisionHead',
      asyncData: {
        endpointApi: getSetting,
        endpoint: 'settings/workweek',
        key: 'data',
      },
      options: [
        { text: 'Division Head 1', value: 'dh1' },
        { text: 'Division Head 2', value: 'dh2' },
        { text: 'Division Head 3', value: 'dh3' },
      ],
    },
    xs: 12,
  },
];

const plan = {
  sideBarTitle:"Add Division",
  section: {
    fields: [
      {
        label: 'Division Name',
        // isRequired: true,
        type: 'Text',
        id: 'divisionName',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        config: {
          placeholder: 'Division Name',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'Division Type',
        // isRequired: true,
        type: 'Text',
        id: 'divisionType',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        config: {
          placeholder: 'Division Type',
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
      {
        label: 'Division Head',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        id: 'divisionHead',
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
    ],
  },
};

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
      <SmartSideBarForm plan={plan} />
      {/* <ListWithSidebarLayout config={divisionForm} /> */}
    </SettingPageLayout>
  );
}
