import EditableList from '@/components/settings/EditableList';
import SmartFromToDatePicker from '@/components/smartFormComponents/SmartFromToDatePicker';
import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import { Stack } from '@mui/system';
import AppAutocomplete from 'components/fields/AppAutoComplete';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useEffect, useState } from 'react';
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { extractFromJSON } from 'Utils';

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
  sideBarTitle: 'Add Division',
  endpoint: 'settings/division',
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
            { value: 'c152a174-6024-4490-b1ac-5944337bb943', label: 'Emp 1' },
            { value: 'a107a512-a6a5-11ed-afa1-0242ac120002', label: 'EMp 2' },
            { value: 'a107a6fc-a6a5-11ed-afa1-0242ac120002', label: 'Emp 3' },
          ],
        },
      },
    ],
  },
  postFn: createSetting,
  putFn: updateSetting,
  key: 'division',
};

const divisionForm = {
  form: [
    {
      header: '',
      fields: division,
    },
  ],

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
// id=3u47123o8741o
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
    <SettingPageLayout texts={divisionForm.texts}>
      {/* <SmartFromToDatePicker /> */}
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
                label={extractFromJSON(e, `**.divisionName`)}
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
