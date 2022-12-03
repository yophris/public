import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
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
    size: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Description',
      name: 'team.description',
    },
    size: 12,
  },
];

const teamForm = {
  form: [
    {
      header: '',
      fields: fields,
    },
  ],
  endpoint: 'settings/team',
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
  validation: validation_team,
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  return (
    <SettingPageLayout texts={teamForm.texts}>
      <ListWithSidebarLayout config={teamForm} />
    </SettingPageLayout>
  );
  // return <ListWithSidebarLayout config={divisionForm}/>
}
