import EditableList from '@/components/settings/EditableList';
import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import { Stack } from '@mui/system';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { extractFromJSON } from 'Utils';
import * as Yup from 'yup';

const validation_team = Yup.object().shape({
  team: Yup.object().shape({
    teamName: Yup.string().required(' name required.'),
    description: Yup.string().required('type required.'),
  }),
});

const fields = [
  {
    element: TextInput,
    attr: {
      label: 'team Name',
      name: 'team.teamName',
    },
    xs: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Description',
      name: 'team.description',
      isMultiline: true,
    },
    xs: 12,
  },
];

const teamForm = {
  form: [
    {
      header: '',
      fields: fields,
    },
  ],

  validation: validation_team,
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};
const plan = {
  sideBarTitle: 'Add Team',
  endpoint: 'settings/team',
  key: 'teams',
  section: {
    fields: [
      {
        label: 'Team Name',
        // isRequired: true,
        type: 'Text',
        id: 'teamName',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        config: {
          placeholder: 'teamName',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'Descriptions',
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
    ],
  },
  texts: {
    key: 'teamName',
    breadcrumbText: 'Teams',
    drawerTitle: 'Add team',
    mainTitle: 'Teams',
    mainDescription: 'this is short description for division',
    sideTitle: 'List of Teams',
    sideDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  postFn: createSetting,
  putFn: updateSetting,
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
                label={extractFromJSON(e, `**.teamName`)}
                cb={{
                  Edit: () => editClickCB(e),
                  Delete: () => onDeleteClick(e.id),
                }}
              />
            ))}
      </Stack>
    </SettingPageLayout>
  );

  return (
    <SettingPageLayout texts={teamForm.texts}>
      <SmartSideBarForm plan={plan} />
    </SettingPageLayout>
  );
  // return <ListWithSidebarLayout config={divisionForm}/>
}
