import AppDropdown from 'components/fields/AppDropdown';
import AppForm from 'components/fields/AppForm';
import TextInput from 'components/fields/TextInput';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useAlert } from 'react-alert';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import * as Yup from 'yup';
import { addressFields } from './station';

/**********************************************************/
/*        All Company Related Fields/Validation/Form      
/**********************************************************/
const company = [
  {
    element: TextInput,
    attr: {
      label: 'Organization Name',
      name: 'company.companyName',
    },
    xs: 12,
  },
  {
    element: TextInput,
    attr: {
      label: 'Start Year',
      name: 'company.startYear',
    },
    xs: 4,
  },
  {
    element: TextInput,
    attr: {
      label: 'Country',
      name: 'company.country',
    },
    xs: 4,
  },
  {
    element: AppDropdown,
    attr: {
      label: 'Language',
      name: 'company.language',
      defaultValue: { text: 'English', value: 'en' },
      options: [
        { text: 'English', value: 'en' },
        { text: 'Arabic', value: 'ar', disabled: true },
      ],
    },
    xs: 4,
  },
];

const validation_company = Yup.object().shape({
  company: Yup.object().shape({
    companyName: Yup.string().required(' name required.'),
    industry: Yup.string().required('type required.'),
    description: Yup.string().required('description required.'),
    language: Yup.string().required('language required.'),
  }),
});

const companyForm = {
  key: 'company',
  form: [
    {
      header: 'Organisation Details',
      fields: company,
    },
    {
      header: 'Primary Address',
      fields: addressFields.map((field) => ({
        ...field,
        attr: {
          ...field.attr,
          name: 'primary.' + field.attr.name,
        },
      })),
    },
    {
      header: 'Emergency Address',
      fields: addressFields.map((field) => ({
        ...field,
        attr: {
          ...field.attr,
          name: 'emergency.' + field.attr.name,
        },
      })),
    },
  ],
  endpoint: 'settings/company',
  texts: {
    title: 'Organization',
    key: 'companyName',
    breadcrumbText: 'Organization',
    drawerTitle: 'Add Organization',
    mainTitle: 'List of Organization',
    mainDescription: 'It is short description for Organization',
    sideTitle: 'List of Organization',
    sideDescription:
      'This is long long long for Organization saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  validation: validation_company,
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

/**********************************************************/
/*                   Other Config      
/**********************************************************/
const Organization = () => {
  const qc = useQueryClient();
  const alert = useAlert();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get' + companyForm.key, () =>
    companyForm.getAllFn(companyForm.endpoint)
  );

  // create
  const onCreate = useMutation(
    (data) =>
      response?.data
        ? companyForm.putFn(companyForm.endpoint, response.data.id, data)
        : companyForm.postFn(companyForm.endpoint, data),
    {
      onSuccess: () => {
        qc.invalidateQueries('get' + companyForm.key);
        alert.success(response?.data ? `Updated` : `Company Created`);
      },
      onError: (data) => {
        alert.error('Failed');
      },
    }
  );

  return (
    <>
      <SettingPageLayout
        texts={{
          breadcrumbText: 'Organization',
          mainTitle: 'Organization Setting',
          mainDescription:
            'It is a long established fact that a reader will be distracted',
          sideTitle: 'Organization Setting',
          sideDescription:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        }}
      >
        <AppForm
          form={companyForm.form}
          submitData={(data) => onCreate.mutate({ ...data })}
          validationSchema={companyForm.validation}
          edit={response?.data}
          cancelDrawer={null}
        />
      </SettingPageLayout>
    </>
  );
};

export default Organization;
