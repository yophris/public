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
import AppFileUpload from 'components/fields/AppFileUpload';

const fields = [
  {
    element: TextInput,
    attr: {
      label: 'Document Name',
      name: 'document.name',
    },
    size: 12,
  },
  {
    element: AppFileUpload,
    attr: {
      label: 'Document Name',
      name: 'document.file',
    },
    size: 12,
  },
];

const validation_department = null;

const DeparmentForm = {
  form: [
    {
      header: '',
      fields: fields,
    },
  ],
  endpoint: 'settings/department',
  texts: {
    key: 'companyDocument',
    breadcrumbText: 'Comapny Documents',
    drawerTitle: 'Add Document',
    mainTitle: 'List of Documents',
    mainDescription: 'This is short description for division',
    sideTitle: 'Document',
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
