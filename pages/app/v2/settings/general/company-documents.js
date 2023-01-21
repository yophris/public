import AppFileUpload from 'components/fields/AppFileUpload';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { transformToFormData } from 'Utils';

const fields = [
  {
    element: TextInput,
    attr: {
      label: 'Document Name',
      name: 'document.name',
    },
    xs: 12,
  },
  {
    element: AppFileUpload,
    attr: {
      label: 'Document Name',
      name: 'file',
      bucket: 'yop-company-docs',
      limit: 1,
      type: ['application/pdf'],
    },
    xs: 12,
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
  endpoint: 'settings/companyDocument',
  texts: {
    key: 'document.name',
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
  transform: (data) => {
    let out = transformToFormData(data);
    console.log('formData out', out);
    return out;
  },
};

export default function Page() {
  return (
    <SettingPageLayout texts={DeparmentForm.texts}>
      <ListWithSidebarLayout config={DeparmentForm} />
    </SettingPageLayout>
  );
  // return <ListWithSidebarLayout config={divisionForm}/>
}
