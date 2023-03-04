import EditableList from '@/components/settings/EditableList';
import SimpleSmartForm from '@/components/smartFormComponents/SimpleSmartForm';
import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import { Stack } from '@mui/material';
import AppAutocomplete from 'components/fields/AppAutoComplete';
import AppWorkweekCheckbox from 'components/fields/AppWorkweekCheckbox';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useSettingFormPage } from 'hooks/useSettingPageForm';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { extractFromJSON } from 'Utils';

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
  form: [
    {
      header: '',
      fields: workweek,
    },
  ],

  getFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

const plan = {
  sideBarTitle: 'Add Workweek',
  key: 'workweek',

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
  section: {
    fields: [
      {
        label: 'Workweek Name',
        // isRequired: true,
        type: 'Text',
        id: 'name',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        config: {
          placeholder: 'Workweek Name',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'Monday',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'monday',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/const/WorkWeekOptions',
        },
      },
      {
        label: 'Tuesday',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'tuesday',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/const/WorkWeekOptions',
        },
      },
      {
        label: 'Wednesday',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'wednesday',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/const/WorkWeekOptions',
        },
      },
      {
        label: 'Thursday',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'thursday',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/const/WorkWeekOptions',
        },
      },
      {
        label: 'Friday',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'friday',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/const/WorkWeekOptions',
        },
      },
      {
        label: 'Saturday',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'saturday',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/const/WorkWeekOptions',
        },
      },
      {
        label: 'Sunday',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        id: 'sunday',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'api',
          api: 'app/valueHelp/const/WorkWeekOptions',
        },
      },
    ],
  },
  getFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  const {
    setOpenSideMenu,
    openSideMenu,
    editData,
    setEditData,
    response,
    isLoading,
    editClickCB,
  } = useSettingFormPage(plan);
  return (
    <>
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
                  label={extractFromJSON(e, plan?.listLabelExp || '**.name')}
                  cb={{
                    Edit: () => editClickCB(e),
                    Delete: () => onDeleteClick(e.id),
                  }}
                />
              ))}
        </Stack>
      </SettingPageLayout>
    </>
  );
}
