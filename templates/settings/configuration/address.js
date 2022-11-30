import TextInput from "components/fields/TextInput";

export const addressFields = [
  {
    element: TextInput,
    attr: { label: 'Address Line 1', name: 'address.addressLn1' },
    size: 12,
  },
  {
    element: TextInput,
    attr: { label: 'Address Line 2', name: 'address.addressLn2' },
    size: 12,
  },
  {
    element: TextInput,
    attr: { label: 'City', name: 'address.city' },
    size: 6,
  },
  {
    element: TextInput,
    attr: { label: 'State', name: 'address.state' },
    size: 6,
  },
  {
    element: TextInput,
    attr: { label: 'Postal Code', name: 'address.postalCode' },
    size: 6,
  },
  {
    element: TextInput,
    attr: { label: 'Country', name: 'address.country' },
    size: 6,
  },
  {
    element: TextInput,
    attr: { label: 'Phone', name: 'address.phone1' },
    size: 6,
  },
];

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
