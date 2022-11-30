import { createDepartment, getDepartment } from 'requests/settings';
import TextInput from 'components/fields/TextInput';
import { addressFields } from './address';
import { validation_deparment,validation_address } from './_validation';

const fields = [
  {
    element: TextInput,
    attr: {
      label: 'Department Name',
      name: 'department.departmentName',
    },
    size: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Description',
      name: 'department.description',
    },
    size: 12,
  },
];


const DeparmentForm = {
  form: [
    {
      header: '',
      fields: fields,
    },
  ],
  endpoint: 'settings/department',
  texts:{
    key:"departmentName",
    title:"deparment",
    drawerTitle: 'Add deparment',
    mainTitle: 'List of Departments',
    shortDescription: 'this is short description for division',
    longDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  validation:null,
  getAllFn:getDepartment,
  postFn: createDepartment,
  putFn: () => {},
};

export default DeparmentForm;
