import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import AppAutocomplete from 'components/fields/AppAutoComplete';
import AppDropdown from 'components/fields/AppDropdown';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { Stack } from '@mui/material';
import EditableList from '@/components/settings/EditableList';
import { extractFromJSON } from 'Utils';

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

const stationForm = {
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
  key: 'stationName',
  endpoint: 'settings/station',
  sideBarTitle: 'Add Station',
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
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
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
            { value: 'aef9a00b-bcff-4a39-8873-3c4648645c69', label: 'Emp 1' },
            { value: '56b0fb05-3a93-42d9-b96e-ff0f21c0df00', label: 'Emp 2' },
            { value: 'e1bab173-4482-4396-a6c7-092052963e62', label: 'Emp 3' },
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
        id: 'primary.Address.addressLn1',
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
        id: 'primary.Address.addressLn2',
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
        id: 'primary.Address.country',
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
        id: 'primary.Address.state',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        validations: [
          // {
          //   type: 'required',
          // },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/states/${primary.Address.country.value}',
        },
      },
      {
        label: 'City',
        type: 'Select',
        id: 'primary.Address.city',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        validations: [
          // {
          //   type: 'required',
          // },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/cities/${primary.Address.country.value}/${primary.Address.state.value}',
        },
      },
      {
        label: 'Postal Code',
        // isRequired: true,
        type: 'Text',
        id: 'primary.Address.postalCode',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        config: {
          placeholder: 'Postal Code',
          type: 'number',
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
        id: 'primary.Address.phone1',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        validations: [
          {
            type: 'required',
            vtype: 'number',
          },
          {
            type: 'Length',
            length: {
              min: 12,
              max: 15,
            },
          },
        ],
      },
    ],
  },
  postFn: createSetting,
  putFn: updateSetting,
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
};
export default function Page() {
  const qc = useQueryClient();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get' + plan.key, () => getSetting(plan.endpoint, { page: 1 }));

  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [editData, setEditData] = useState(null);
  // Delete
  const onDelete = useMutation((data) => deleteSetting(plan.endpoint, data), {
    onSuccess: () => {
      qc.invalidateQueries('get' + plan.key);
      alert('Deleted');
      setOpenSideMenu(false);
    },
    onError: (data) => {
      alert('Failed');
    },
  });

  const editClickCB = (id) => {
    setOpenSideMenu(true);
    // TODO: Very Crucial
    setEditData(id);
  };

  const onDeleteClick = (id) => {
    if (window.confirm('Do you want to delete this ? ')) {
      onDelete.mutate({ id: id });
    }
    // setOpenSideMenu(true)
  };

  useEffect(
    (_) => {
      if (!openSideMenu) {
        setEditData(null);
      }
    },
    [openSideMenu]
  );
  return (
    <SettingPageLayout texts={plan.texts}>
      <SmartSideBarForm
        plan={plan}
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
        editData={editData}
      />
      <Stack sx={{ rowGap: 1 }}>
        {isLoading
          ? 'Loading'
          : response?.data?.map((e, index) => (
              <EditableList
                key={index}
                label={extractFromJSON(e, `**.stationName`)}
                cb={{
                  Edit: () => editClickCB(e),
                  Delete: () => onDeleteClick(e.id),
                }}
              />
            ))}
      </Stack>
    </SettingPageLayout>
  );
}
