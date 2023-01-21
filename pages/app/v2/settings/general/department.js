import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import AppDropdown from 'components/fields/AppDropdown';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';

// const fields = [
//   {
//     element: TextInput,
//     attr: {
//       label: 'Department Name',
//       name: 'department.departmentName',
//     },
//     xs: 6,
//   },
//   {
//     element: TextInput,
//     attr: {
//       label: 'Description',
//       name: 'department.description',
//       isMultiline: true,
//     },
//     xs: 12,
//   },
//   {
//     element: AppDropdown,
//     attr: {
//       label: 'Department Head',
//       name: 'department.departmentHead',
//       options: [
//         { text: 'Employee 1', value: 'e1' },
//         { text: 'Employee 2', value: 'e2' },
//       ],
//     },
//     xs: 12,
//   },
// ];

// const validation_department = Yup.object().shape({
//   department: Yup.object().shape({
//     departmentName: Yup.string().required(' name required.'),
//     description: Yup.string().required('type required.'),
//   }),
// });

const plan = {
  sideBarTitle:"Add Department",
  section: {
    fields: [
      {
        label: 'Department Name',
        isRequired: true,
        type: 'Text',
        id: 'departmentName',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        config: {
          placeholder: 'Department Name',
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
        label: 'Department Head',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        id: 'departmentHead',
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
    ],
  },
};
const DeparmentForm = {
  form: [
    {
      header: '',
      fields: "",
    },
  ],
  key: 'department',
  endpoint: 'settings/department',
  texts: {
    key: 'departmentName',
    breadcrumbText: 'Department',
    drawerTitle: 'Add Deparment',
    mainTitle: 'List of Departments',
    mainDescription: 'This is short description for division',
    sideTitle: 'Deparment',
    sideDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  // validation: validation_department,
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  return (
    <SettingPageLayout texts={DeparmentForm.texts}>
      <SmartSideBarForm plan={plan}/>
      {/* <ListWithSidebarLayout config={DeparmentForm} /> */}
    </SettingPageLayout>
  );
  // return <ListWithSidebarLayout config={divisionForm}/>
}
