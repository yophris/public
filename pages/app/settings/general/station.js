import AppDropdown from 'components/fields/AppDropdown';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';

const station = [
  {
    element: TextInput,
    attr: {
      label: 'Station Name',
      name: 'station.stationName',
    },
    size: 6,
  },
  {
    element: AppDropdown,

    attr: {
      label: 'Is main station?',
      name: 'station.isMainStation',
      options: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
    },
    size: 6,
  },
  {
    element: AppDropdown,
    attr: {
      label: 'Station Head',
      name: 'station.stationHead',
      options: [
        { text: 'Employee 1', value: 'e1' },
        { text: 'Employee 2', value: 'e2' },
      ],
    },
    size: 12,
  },
];

export const addressFields = [
  {
    element: TextInput,
    attr: { label: 'Address Line 1', name: 'address.addressLn1' },
    size: 12,
  },
  {
    element: TextInput,
    attr: { label: 'Address Line 2', name: 'address.addressLn2' },
    size: 12,
  },
  {
    element: TextInput,
    attr: { label: 'City', name: 'address.city' },
    size: 6,
  },
  {
    element: TextInput,
    attr: { label: 'State', name: 'address.state' },
    size: 6,
  },
  {
    element: TextInput,
    attr: { label: 'Postal Code', name: 'address.postalCode' },
    size: 6,
  },
  {
    element: TextInput,
    attr: { label: 'Country', name: 'address.country' },
    size: 6,
  },
  {
    element: TextInput,
    attr: { label: 'Phone', name: 'address.phone1' },
    size: 6,
  },
];

// const validation_station = Yup.object().shape({
//   station: Yup.object().shape({
//     stationName: Yup.string().required('stationName'),
//     isMainStation: Yup.string().required('select main station'),
//   }),
// });

// export const validation_address = Yup.object()
//   .shape({
//     address: Yup.object().shape({
//       addressLn1: Yup.string().required(' Line 1 required.'),
//       addressLn2: Yup.string(),
//       city: Yup.string().required(),
//       state: Yup.string().required(),
//       postalCode: Yup.string().required(),
//       country: Yup.string().required(),
//       phone1: Yup.string().required(),
//     }),
//   })
//   .required();

const stationForm = {
  key: 'stationName',
  form: [
    {
      header: '',
      fields: station,
    },
    {
      header: 'Station Address',
      fields: addressFields,
    },
  ],
  endpoint: 'settings/station',
  texts: {
    key: 'stationName',
    breadcrumbText: 'Station',
    drawerTitle: 'Add Station',
    mainTitle: 'List of Stations',
    mainDescription: 'this is short description for division',
    sideTitle: 'Station',
    sideDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  // validation: validation_station.concat(validation_address),
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  return (
    <SettingPageLayout texts={stationForm.texts}>
      <ListWithSidebarLayout config={stationForm} />
    </SettingPageLayout>
  );
  // return <ListWithSidebarLayout config={divisionForm}/>
}
