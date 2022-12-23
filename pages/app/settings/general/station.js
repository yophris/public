import AppAutocomplete from 'components/fields/AppAutoComplete';
import AppDropdown from 'components/fields/AppDropdown';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useQueryClient } from 'react-query';
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
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Station Name is Required'],
        },
      ],
    },
    xs: 6,
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
    xs: 6,
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
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Station Head is Required'],
        },
      ],
    },
    xs: 12,
  },
];

export const addressFields = [
  {
    element: TextInput,
    attr: { label: 'Address Line 1', name: 'address.addressLn1' },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Address Line 1 is Required'],
        },
      ],
    },
    xs: 12,
  },
  {
    element: TextInput,
    attr: { label: 'Address Line 2', name: 'address.addressLn2' },
    xs: 12,
  },
  {
    element: AppAutocomplete,
    attr: {
      label: 'Country',
      name: 'address.country',
      endPoint:'app/valueHelp/countries',
      options: [
        { text: 'India', value: 'india' },
        { text: 'uae', value: 'uae' },
      ],
    },
    validation: {
      validationType: 'object',
      validations: [
        {
          type: 'nullable',
          params: ['Country is Required'],
        },
        {
          type: 'required',
          params: ['Country is Required'],
        },
      ],
    },
    xs: 6,
  },
  {
    element: TextInput,
    attr: { label: 'State', name: 'address.state',endPoint:'' },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['State is Required'],
        },
      ],
    },
    xs: 6,
  },
  {
    element: TextInput,
    attr: { label: 'City', name: 'address.city',dependOn:'address.state' },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['City is Required'],
        },
      ],
    },
    xs: 6,
  },

  {
    element: TextInput,
    attr: { label: 'Postal Code', name: 'address.postalCode' },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Postal code is Required'],
        },
      ],
    },
    xs: 6,
  },

  {
    element: TextInput,
    attr: { label: 'Phone', name: 'address.phone1' },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Phone number is Required'],
        },
      ],
    },
    xs: 6,
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
  const { watch } = useForm();
  const qc = useQueryClient();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  console.log(watch('city'),"lklk");
  console.log(stationForm,"lklk")
  // const alert = useAlert();
  const {
    isLoading: countryLoading,
    data: countryResponse,
    error: countryError,
  } = useQuery('getcountries', () =>
    stationForm.getAllFn('app/valueHelp/countries')
  );

  // const {
  //   isLoading: stateLoading,
  //   data: stateResponse,
  //   // refetch: stateRefetch,
  //   error: stateError,
  // } = useQuery(
  //   'getstate',
  //   () => stationForm.getAllFn(`app/valueHelp/states/${selectedCountry}`),
  //   { enabled: selectedCountry }
  // );

  // const {
  //   isLoading: cityLoading,
  //   data: cityResponse,
  //   refetch: cityFetch,
  //   error: cityError,
  // } = useQuery(
  //   'getcity',
  //   () => stationForm.getAllFn(`app/valueHelp/cities/${selectedCountry}`),
  //   { enabled: selectedState }
  // );
  console.log(countryResponse, 'response');
  // console.log(stateResponse, 'response');
  // console.log(cityResponse, 'response');

  return (
    <SettingPageLayout texts={stationForm.texts}>
      <ListWithSidebarLayout config={stationForm} />
    </SettingPageLayout>
  );
  // return <ListWithSidebarLayout config={divisionForm}/>
}
