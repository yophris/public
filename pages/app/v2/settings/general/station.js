import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
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
      asyncData: {
        endpointApi: getSetting,
        endpoint: 'app/valueHelp/countries',
        key: 'countries',
        optionTransformation: (d) => ({
          text: d.name,
          value: d.code,
        }),
      },
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
    element: AppAutocomplete,
    attr: {
      label: 'State',
      name: 'address.state',
      asyncData: {
        endpointApi: getSetting,
        endpoint: (field) => `app/valueHelp/states/${field[0]?.value || ''}`,
        optionTransformation: (d) => ({
          text: d.name,
          value: d.isoCode,
        }),
        lookup: ['address.country'],
        key: 'states',
      },
    },
    validation: {
      validationType: 'object',
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
    element: AppAutocomplete,
    attr: {
      label: 'City',
      name: 'address.city',
      asyncData: {
        endpointApi: getSetting,
        endpoint: (field) =>
          `app/valueHelp/cities/${field[0]?.value || ''}/${
            field[1]?.value || ''
          }`,
        lookup: ['address.country', 'address.state'],
        key: 'city',
        optionTransformation: (d) => ({
          text: d.name,
          value: d.name,
        }),
      },
    },
    validation: {
      validationType: 'object',
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
const plan = {
  sideBarTitle:"Add Station",
  section: {
    fields: [
      {
        label: 'Station Name',
        // isRequired: true,
        type: 'Text',
        id: 'stationName',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        config: {
          placeholder: 'Station Name',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'Is main station?',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'isMainStation',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'inLine',
          options: [
            { value: 'None', label: 'None' },
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
          ],
        },
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
        label: 'Station Head',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        id: 'stationHead',
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
        title: 'Primary Address',
      },
      {
        label: 'Address Line 1',
        type: 'Text',
        id: 'primaryAddress_addressLine1',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        config: {
          placeholder: 'Address Line 1',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'Address Line 2',
        type: 'Text',
        id: 'primaryAddress_addressLine2',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        config: {
          placeholder: 'Address Line 2',
        },
        validations: [
          // {
          //   type: 'required',
          // },
        ],
      },
      {
        label: 'Country',
        type: 'Select',
        id: 'primaryAddress_country',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        config: {
          placeholder: 'Country',
        },
        validations: [
          // {
          //   type: 'required',
          // },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/countries',
        },
      },
      {
        label: 'State',
        type: 'Select',
        id: 'primaryAddress_state',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        validations: [
          // {
          //   type: 'required',
          // },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/states/${primaryAddress_country}',
        },
      },
      {
        label: 'City',
        type: 'Select',
        id: 'primaryAddressCity',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        validations: [
          // {
          //   type: 'required',
          // },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/cities/${primaryAddress_country}/${primaryAddress_state}',
        },
      },
      {
        label: 'Postal Code',
        // isRequired: true,
        type: 'Text',
        id: 'postalCode',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        config: {
          placeholder: 'Postal Code',
          type:'number'
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'Phone',
        type: 'PhoneNumber',
        id: 'phone',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        validations: [
          {
            type: 'required',
            vtype: 'number',
          },
          {
            type: 'Length',
            length: {
              min: 13,
              max: 15,
            },
          },
        ],
      },
    ],
  },
};
export default function Page() {
  const { watch } = useForm();
  const qc = useQueryClient();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  console.log(watch('city'), 'lklk');
  console.log(stationForm, 'lklk');
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
      <SmartSideBarForm plan={plan} />
    </SettingPageLayout>
  );
  // return <ListWithSidebarLayout config={divisionForm}/>
}
