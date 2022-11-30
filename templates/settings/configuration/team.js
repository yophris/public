import { createTeams, getTeams } from 'requests/settings';
import TextInput from 'components/fields/TextInput';
import { addressFields } from './address';
import { validation_team,validation_address } from './_validation';

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
  texts:{
    key:"teamName",
    title:"Teams",
    drawerTitle: 'Add team',
    mainTitle: 'List of Teams',
    shortDescription: 'this is short description for division',
    longDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  validation:null,
  getAllFn:getTeams,
  postFn: createTeams,
  putFn: () => {},
  deleteFn: () => {},
};

export default teamForm;
