import { configure } from '@testing-library/react';
import { createDivisions, deleteDivision, getDivisions, updateDivision } from 'requests/settings';
import TextInput from 'components/fields/TextInput';
import { validation_division } from './_validation';

const division = [
  {
    element: TextInput,
    attr: {
      label: 'Division Name',
      name: 'division.divisionName',
    },
    size: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Division Type',
      name:  'division.divisionType',
    },
    size: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Description',
      name:  'division.description',
    },
    size: 12,
  },
];

const divisionForm = {
  form: [
    {
      header: '',
      fields: division,
    },
  ],
  endpoint: 'settings/division',
  texts:{
    key:"divisionName",
    drawerTitle: 'Add Division',
    mainTitle: 'List of Divisions',
    shortDescription: 'this is short description for division',
    longDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  validation:validation_division,
  getAllFn:getDivisions,
  postFn:createDivisions,
  putFn: updateDivision,
  deleteFn:deleteDivision
};

export default divisionForm