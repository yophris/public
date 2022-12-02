import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import TextInput from 'components/fields/TextInput';
import * as Yup from 'yup';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SelectDropdown from 'components/fields/SelectDropdown';

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
  {
    element: SelectDropdown,
    attr: {
      label: 'Department Head',
      name: 'department.departmentHead',
      options: [
        { text: 'Employee 1', value: 'e1' },
        { text: 'Employee 2', value: 'e2' },
      ],
    },
    size: 12,
  },
];

const validation_department = Yup.object()
  .shape({
    department: Yup.object().shape({
      departmentName: Yup.string().required(' name required.'),
      description: Yup.string().required('type required.'),
    }),
  })
  .required();

const DeparmentForm = {
  form: [
    {
      header: '',
      fields: fields,
    },
  ],
  endpoint: 'settings/department',
  texts: {
    key: 'departmentName',
    breadcrumbText: 'Department',
    drawerTitle: 'Add deparment',
    mainTitle: 'List of Departments',
    mainDescription: 'This is short description for division',
    sideTitle: 'Deparment',
    sideDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  validation: validation_department,
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  return (
    <SettingPageLayout texts={DeparmentForm.texts}>
      <ListWithSidebarLayout config={DeparmentForm} />
    </SettingPageLayout>
  );
  // return <ListWithSidebarLayout config={divisionForm}/>
}
