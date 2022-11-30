import { createStation, deleteStation, getStation, updateStation } from 'requests/settings';
import SelectDropdown from 'components/fields/SelectDropdown';
import TextInput from 'components/fields/TextInput';
import { addressFields } from './address';
import { validation_station,validation_address } from './_validation';

const station = [
  {
    element: TextInput,
    attr: {
      label: 'Station Name',
      name: 'station.stationName',
    },
    size: 6,
  },
  {
    element: SelectDropdown,
   
    attr: {
      label: 'Is main station?',
      name: 'station.isMainStation',
      options:[
        { text: 'Yes', value: true },
        { text: 'No', value: false }
      ]
    },
    size: 6,
  },
];


const stationForm = {
  form: [
    {
      header: '',
      fields: station,
    },
    {
      header: 'Station Address',
      fields: addressFields,
    },
  ],
  endpoint: 'settings/station',
  texts:{
    key:"stationName",
    title:"Station",
    drawerTitle: 'Add Station',
    mainTitle: 'List of Statins',
    shortDescription: 'this is short description for division',
    longDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  validation:validation_station.concat(validation_address),
  getAllFn:getStation,
  postFn: createStation,
  putFn: updateStation,
  deleteFn: deleteStation,
};

export default stationForm;
