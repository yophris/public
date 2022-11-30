import TextInput from "components/fields/TextInput";



const addressForm = {
  form: [
    {
      header: '',
      fields: addressFields,
    },
  ],
  endpoint: 'settings/division',
  validation: '',
  postFn: () => {},
  putFn: () => {},
};

export default addressForm;
