import SmartCards from '@/components/smartFormComponents/SmartCards';
import SmartProfileCard from '@/components/smartFormComponents/SmartProfileCard';
import SmartTabs from '@/components/smartFormComponents/SmartTabs';
import { Grid, Paper } from '@mui/material';
import DocumentTab from './DocumentTab';

export default function EmployeeDirectory() {
  return (
    <Grid container rowGap={2}>
      <Paper
        sx={{
          borderRadius: 2.5,
          width: '100%',
        }}
        variant="outlined"
      >
        <SmartProfileCard field={profileField} />
      </Paper>
      <Paper
        sx={{
          borderRadius: 2.5,
          width: '100%',
        }}
        variant="outlined"
      >
        <SmartTabs tabs={ESTabs}></SmartTabs>
      </Paper>
    </Grid>
  );
}

const primaryDetailsCardSections = [
  {
    title: 'Basic Details',
    plan: {
      section: {
        title: 'Basic Details',
        fields: [
          {
            label: 'First Name',
            type: 'Text',
            id: 'firstName',
            gridSizes: { xs: 12, sm: 6, md: 4 },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Middle Name',
            type: 'Text',
            id: 'middleName',
            gridSizes: { xs: 12, sm: 6, md: 4 },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Last Name',
            type: 'Text',
            id: 'lastName',
            gridSizes: { xs: 12, sm: 6, md: 4 },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Date of Birth',
            type: 'Date',
            id: 'dateOfBirth',
            gridSizes: { xs: 12, sm: 6, md: 4 },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Gender',
            type: 'Select',
            id: 'gender',
            gridSizes: { xs: 12, sm: 6, md: 4 },
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Others', label: 'Others' },
              ],
            },
          },
          {
            label: 'Marital Status',
            type: 'Select',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            id: 'maritalStatus',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Married', label: 'Married' },
                { value: 'Single', label: 'Single' },
                { value: 'Divorced', label: 'Divorced' },
                { value: 'Widowed', label: 'Widowed' },
              ],
            },
          },
          {
            label: 'Blood Group',
            type: 'Select',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            id: 'bloodGroup',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'A positive (A+)', label: 'A positive (A+)' },
                { value: 'A negative (A-)', label: 'A negative (A-)' },
                { value: 'B positive (B+)', label: 'B positive (B+)' },
                { value: 'B negative (B-)', label: 'B negative (B-)' },
                { value: 'O positive (O+)', label: 'O positive (O+)' },
                { value: 'O negative (O-)', label: 'O negative (O-)' },
                { value: 'AB positive (AB+)', label: 'AB positive (AB+)' },
                { value: 'AB negative (AB-)', label: 'AB negative (AB-)' },
              ],
            },
          },
          {
            label: 'Religion',
            type: 'Select',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            id: 'religion',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Islam', label: 'Islam' },
                { value: 'Christianity', label: 'Christianity' },
                { value: 'Hinduism', label: 'Hinduism' },
                { value: 'Buddhism', label: 'Buddhism' },
                { value: 'Irreligion', label: 'Irreligion' },
                { value: 'Sikhism', label: 'Sikhism' },
                { value: 'Judaism', label: 'Judaism' },
                { value: 'Other', label: 'Other' },
              ],
            },
          },
          {
            label: 'Nationality',
            type: 'Select',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            id: 'nationality',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                {
                  value: 'Afghan',
                  label: 'Afghan',
                },
                {
                  value: 'Åland Island',
                  label: 'Åland Island',
                },
                {
                  value: 'Albanian',
                  label: 'Albanian',
                },
                {
                  value: 'Algerian',
                  label: 'Algerian',
                },
                {
                  value: 'American Samoan',
                  label: 'American Samoan',
                },
                {
                  value: 'Andorran',
                  label: 'Andorran',
                },
                {
                  value: 'Angolan',
                  label: 'Angolan',
                },
                {
                  value: 'Anguillan',
                  label: 'Anguillan',
                },
                {
                  value: 'Antarctic',
                  label: 'Antarctic',
                },
                {
                  value: 'Antiguan or Barbudan',
                  label: 'Antiguan or Barbudan',
                },
                {
                  value: 'Argentine',
                  label: 'Argentine',
                },
                {
                  value: 'Armenian',
                  label: 'Armenian',
                },
                {
                  value: 'Aruban',
                  label: 'Aruban',
                },
                {
                  value: 'Australian',
                  label: 'Australian',
                },
                {
                  value: 'Austrian',
                  label: 'Austrian',
                },
                {
                  value: 'Azerbaijani, Azeri',
                  label: 'Azerbaijani, Azeri',
                },
                {
                  value: 'Bahamian',
                  label: 'Bahamian',
                },
                {
                  value: 'Bahraini',
                  label: 'Bahraini',
                },
                {
                  value: 'Bangladeshi',
                  label: 'Bangladeshi',
                },
                {
                  value: 'Barbadian',
                  label: 'Barbadian',
                },
                {
                  value: 'Belarusian',
                  label: 'Belarusian',
                },
                {
                  value: 'Belgian',
                  label: 'Belgian',
                },
                {
                  value: 'Belizean',
                  label: 'Belizean',
                },
                {
                  value: 'Beninese, Beninois',
                  label: 'Beninese, Beninois',
                },
                {
                  value: 'Bermudian, Bermudan',
                  label: 'Bermudian, Bermudan',
                },
                {
                  value: 'Bhutanese',
                  label: 'Bhutanese',
                },
                {
                  value: 'Bolivian',
                  label: 'Bolivian',
                },
                {
                  value: 'Bonaire',
                  label: 'Bonaire',
                },
                {
                  value: 'Bosnian or Herzegovinian',
                  label: 'Bosnian or Herzegovinian',
                },
                {
                  value: 'Motswana, Botswanan',
                  label: 'Motswana, Botswanan',
                },
                {
                  value: 'Bouvet Island',
                  label: 'Bouvet Island',
                },
                {
                  value: 'Brazilian',
                  label: 'Brazilian',
                },
                {
                  value: 'BIOT',
                  label: 'BIOT',
                },
                {
                  value: 'Bruneian',
                  label: 'Bruneian',
                },
                {
                  value: 'Bulgarian',
                  label: 'Bulgarian',
                },
                {
                  value: 'Burkinabé',
                  label: 'Burkinabé',
                },
                {
                  value: 'Burundian',
                  label: 'Burundian',
                },
                {
                  value: 'Cabo Verdean',
                  label: 'Cabo Verdean',
                },
                {
                  value: 'Cambodian',
                  label: 'Cambodian',
                },
                {
                  value: 'Cameroonian',
                  label: 'Cameroonian',
                },
                {
                  value: 'Canadian',
                  label: 'Canadian',
                },
                {
                  value: 'Caymanian',
                  label: 'Caymanian',
                },
                {
                  value: 'Central African',
                  label: 'Central African',
                },
                {
                  value: 'Chadian',
                  label: 'Chadian',
                },
                {
                  value: 'Chilean',
                  label: 'Chilean',
                },
                {
                  value: 'Chinese',
                  label: 'Chinese',
                },
                {
                  value: 'Christmas Island',
                  label: 'Christmas Island',
                },
                {
                  value: 'Cocos Island',
                  label: 'Cocos Island',
                },
                {
                  value: 'Colombian',
                  label: 'Colombian',
                },
                {
                  value: 'Comoran, Comorian',
                  label: 'Comoran, Comorian',
                },
                {
                  value: 'Congolese',
                  label: 'Congolese',
                },
                {
                  value: 'Congolese',
                  label: 'Congolese',
                },
                {
                  value: 'Cook Island',
                  label: 'Cook Island',
                },
                {
                  value: 'Costa Rican',
                  label: 'Costa Rican',
                },
                {
                  value: 'Ivorian',
                  label: 'Ivorian',
                },
                {
                  value: 'Croatian',
                  label: 'Croatian',
                },
                {
                  value: 'Cuban',
                  label: 'Cuban',
                },
                {
                  value: 'Curaçaoan',
                  label: 'Curaçaoan',
                },
                {
                  value: 'Cypriot',
                  label: 'Cypriot',
                },
                {
                  value: 'Czech',
                  label: 'Czech',
                },
                {
                  value: 'Danish',
                  label: 'Danish',
                },
                {
                  value: 'Djiboutian',
                  label: 'Djiboutian',
                },
                {
                  value: 'Dominican',
                  label: 'Dominican',
                },
                {
                  value: 'Dominican',
                  label: 'Dominican',
                },
                {
                  value: 'Ecuadorian',
                  label: 'Ecuadorian',
                },
                {
                  value: 'Egyptian',
                  label: 'Egyptian',
                },
                {
                  value: 'Salvadoran',
                  label: 'Salvadoran',
                },
                {
                  value: 'Equatorial Guinean, Equatoguinean',
                  label: 'Equatorial Guinean, Equatoguinean',
                },
                {
                  value: 'Eritrean',
                  label: 'Eritrean',
                },
                {
                  value: 'Estonian',
                  label: 'Estonian',
                },
                {
                  value: 'Ethiopian',
                  label: 'Ethiopian',
                },
                {
                  value: 'Falkland Island',
                  label: 'Falkland Island',
                },
                {
                  value: 'Faroese',
                  label: 'Faroese',
                },
                {
                  value: 'Fijian',
                  label: 'Fijian',
                },
                {
                  value: 'Finnish',
                  label: 'Finnish',
                },
                {
                  value: 'French',
                  label: 'French',
                },
                {
                  value: 'French Guianese',
                  label: 'French Guianese',
                },
                {
                  value: 'French Polynesian',
                  label: 'French Polynesian',
                },
                {
                  value: 'French Southern Territories',
                  label: 'French Southern Territories',
                },
                {
                  value: 'Gabonese',
                  label: 'Gabonese',
                },
                {
                  value: 'Gambian',
                  label: 'Gambian',
                },
                {
                  value: 'Georgian',
                  label: 'Georgian',
                },
                {
                  value: 'German',
                  label: 'German',
                },
                {
                  value: 'Ghanaian',
                  label: 'Ghanaian',
                },
                {
                  value: 'Gibraltar',
                  label: 'Gibraltar',
                },
                {
                  value: 'Greek, Hellenic',
                  label: 'Greek, Hellenic',
                },
                {
                  value: 'Greenlandic',
                  label: 'Greenlandic',
                },
                {
                  value: 'Grenadian',
                  label: 'Grenadian',
                },
                {
                  value: 'Guadeloupe',
                  label: 'Guadeloupe',
                },
                {
                  value: 'Guamanian, Guambat',
                  label: 'Guamanian, Guambat',
                },
                {
                  value: 'Guatemalan',
                  label: 'Guatemalan',
                },
                {
                  value: 'Channel Island',
                  label: 'Channel Island',
                },
                {
                  value: 'Guinean',
                  label: 'Guinean',
                },
                {
                  value: 'Bissau-Guinean',
                  label: 'Bissau-Guinean',
                },
                {
                  value: 'Guyanese',
                  label: 'Guyanese',
                },
                {
                  value: 'Haitian',
                  label: 'Haitian',
                },
                {
                  value: 'Heard Island or McDonald Islands',
                  label: 'Heard Island or McDonald Islands',
                },
                {
                  value: 'Vatican',
                  label: 'Vatican',
                },
                {
                  value: 'Honduran',
                  label: 'Honduran',
                },
                {
                  value: 'Hong Kong, Hong Kongese',
                  label: 'Hong Kong, Hong Kongese',
                },
                {
                  value: 'Hungarian, Magyar',
                  label: 'Hungarian, Magyar',
                },
                {
                  value: 'Icelandic',
                  label: 'Icelandic',
                },
                {
                  value: 'Indian',
                  label: 'Indian',
                },
                {
                  value: 'Indonesian',
                  label: 'Indonesian',
                },
                {
                  value: 'Iranian, Persian',
                  label: 'Iranian, Persian',
                },
                {
                  value: 'Iraqi',
                  label: 'Iraqi',
                },
                {
                  value: 'Irish',
                  label: 'Irish',
                },
                {
                  value: 'Manx',
                  label: 'Manx',
                },
                {
                  value: 'Israeli',
                  label: 'Israeli',
                },
                {
                  value: 'Italian',
                  label: 'Italian',
                },
                {
                  value: 'Jamaican',
                  label: 'Jamaican',
                },
                {
                  value: 'Japanese',
                  label: 'Japanese',
                },
                {
                  value: 'Channel Island',
                  label: 'Channel Island',
                },
                {
                  value: 'Jordanian',
                  label: 'Jordanian',
                },
                {
                  value: 'Kazakhstani, Kazakh',
                  label: 'Kazakhstani, Kazakh',
                },
                {
                  value: 'Kenyan',
                  label: 'Kenyan',
                },
                {
                  value: 'I-Kiribati',
                  label: 'I-Kiribati',
                },
                {
                  value: 'North Korean',
                  label: 'North Korean',
                },
                {
                  value: 'South Korean',
                  label: 'South Korean',
                },
                {
                  value: 'Kuwaiti',
                  label: 'Kuwaiti',
                },
                {
                  value: 'Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz',
                  label: 'Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz',
                },
                {
                  value: 'Lao, Laotian',
                  label: 'Lao, Laotian',
                },
                {
                  value: 'Latvian',
                  label: 'Latvian',
                },
                {
                  value: 'Lebanese',
                  label: 'Lebanese',
                },
                {
                  value: 'Basotho',
                  label: 'Basotho',
                },
                {
                  value: 'Liberian',
                  label: 'Liberian',
                },
                {
                  value: 'Libyan',
                  label: 'Libyan',
                },
                {
                  value: 'Liechtenstein',
                  label: 'Liechtenstein',
                },
                {
                  value: 'Lithuanian',
                  label: 'Lithuanian',
                },
                {
                  value: 'Luxembourg, Luxembourgish',
                  label: 'Luxembourg, Luxembourgish',
                },
                {
                  value: 'Macanese, Chinese',
                  label: 'Macanese, Chinese',
                },
                {
                  value: 'Macedonian',
                  label: 'Macedonian',
                },
                {
                  value: 'Malagasy',
                  label: 'Malagasy',
                },
                {
                  value: 'Malawian',
                  label: 'Malawian',
                },
                {
                  value: 'Malaysian',
                  label: 'Malaysian',
                },
                {
                  value: 'Maldivian',
                  label: 'Maldivian',
                },
                {
                  value: 'Malian, Malinese',
                  label: 'Malian, Malinese',
                },
                {
                  value: 'Maltese',
                  label: 'Maltese',
                },
                {
                  value: 'Marshallese',
                  label: 'Marshallese',
                },
                {
                  value: 'Martiniquais, Martinican',
                  label: 'Martiniquais, Martinican',
                },
                {
                  value: 'Mauritanian',
                  label: 'Mauritanian',
                },
                {
                  value: 'Mauritian',
                  label: 'Mauritian',
                },
                {
                  value: 'Mahoran',
                  label: 'Mahoran',
                },
                {
                  value: 'Mexican',
                  label: 'Mexican',
                },
                {
                  value: 'Micronesian',
                  label: 'Micronesian',
                },
                {
                  value: 'Moldovan',
                  label: 'Moldovan',
                },
                {
                  value: 'Monégasque, Monacan',
                  label: 'Monégasque, Monacan',
                },
                {
                  value: 'Mongolian',
                  label: 'Mongolian',
                },
                {
                  value: 'Montenegrin',
                  label: 'Montenegrin',
                },
                {
                  value: 'Montserratian',
                  label: 'Montserratian',
                },
                {
                  value: 'Moroccan',
                  label: 'Moroccan',
                },
                {
                  value: 'Mozambican',
                  label: 'Mozambican',
                },
                {
                  value: 'Burmese',
                  label: 'Burmese',
                },
                {
                  value: 'Namibian',
                  label: 'Namibian',
                },
                {
                  value: 'Nauruan',
                  label: 'Nauruan',
                },
                {
                  value: 'Nepali, Nepalese',
                  label: 'Nepali, Nepalese',
                },
                {
                  value: 'Dutch, Netherlandic',
                  label: 'Dutch, Netherlandic',
                },
                {
                  value: 'New Caledonian',
                  label: 'New Caledonian',
                },
                {
                  value: 'New Zealand, NZ',
                  label: 'New Zealand, NZ',
                },
                {
                  value: 'Nicaraguan',
                  label: 'Nicaraguan',
                },
                {
                  value: 'Nigerien',
                  label: 'Nigerien',
                },
                {
                  value: 'Nigerian',
                  label: 'Nigerian',
                },
                {
                  value: 'Niuean',
                  label: 'Niuean',
                },
                {
                  value: 'Norfolk Island',
                  label: 'Norfolk Island',
                },
                {
                  value: 'Northern Marianan',
                  label: 'Northern Marianan',
                },
                {
                  value: 'Norwegian',
                  label: 'Norwegian',
                },
                {
                  value: 'Omani',
                  label: 'Omani',
                },
                {
                  value: 'Pakistani',
                  label: 'Pakistani',
                },
                {
                  value: 'Palauan',
                  label: 'Palauan',
                },
                {
                  value: 'Palestinian',
                  label: 'Palestinian',
                },
                {
                  value: 'Panamanian',
                  label: 'Panamanian',
                },
                {
                  value: 'Papua New Guinean, Papuan',
                  label: 'Papua New Guinean, Papuan',
                },
                {
                  value: 'Paraguayan',
                  label: 'Paraguayan',
                },
                {
                  value: 'Peruvian',
                  label: 'Peruvian',
                },
                {
                  value: 'Philippine, Filipino',
                  label: 'Philippine, Filipino',
                },
                {
                  value: 'Pitcairn Island',
                  label: 'Pitcairn Island',
                },
                {
                  value: 'Polish',
                  label: 'Polish',
                },
                {
                  value: 'Portuguese',
                  label: 'Portuguese',
                },
                {
                  value: 'Puerto Rican',
                  label: 'Puerto Rican',
                },
                {
                  value: 'Qatari',
                  label: 'Qatari',
                },
                {
                  value: 'Réunionese, Réunionnais',
                  label: 'Réunionese, Réunionnais',
                },
                {
                  value: 'Romanian',
                  label: 'Romanian',
                },
                {
                  value: 'Russian',
                  label: 'Russian',
                },
                {
                  value: 'Rwandan',
                  label: 'Rwandan',
                },
                {
                  value: 'Barthélemois',
                  label: 'Barthélemois',
                },
                {
                  value: 'Saint Helenian',
                  label: 'Saint Helenian',
                },
                {
                  value: 'Kittitian or Nevisian',
                  label: 'Kittitian or Nevisian',
                },
                {
                  value: 'Saint Lucian',
                  label: 'Saint Lucian',
                },
                {
                  value: 'Saint-Martinoise',
                  label: 'Saint-Martinoise',
                },
                {
                  value: 'Saint-Pierrais or Miquelonnais',
                  label: 'Saint-Pierrais or Miquelonnais',
                },
                {
                  value: 'Saint Vincentian, Vincentian',
                  label: 'Saint Vincentian, Vincentian',
                },
                {
                  value: 'Samoan',
                  label: 'Samoan',
                },
                {
                  value: 'Sammarinese',
                  label: 'Sammarinese',
                },
                {
                  value: 'São Toméan',
                  label: 'São Toméan',
                },
                {
                  value: 'Saudi, Saudi Arabian',
                  label: 'Saudi, Saudi Arabian',
                },
                {
                  value: 'Senegalese',
                  label: 'Senegalese',
                },
                {
                  value: 'Serbian',
                  label: 'Serbian',
                },
                {
                  value: 'Seychellois',
                  label: 'Seychellois',
                },
                {
                  value: 'Sierra Leonean',
                  label: 'Sierra Leonean',
                },
                {
                  value: 'Singaporean',
                  label: 'Singaporean',
                },
                {
                  value: 'Sint Maarten',
                  label: 'Sint Maarten',
                },
                {
                  value: 'Slovak',
                  label: 'Slovak',
                },
                {
                  value: 'Slovenian, Slovene',
                  label: 'Slovenian, Slovene',
                },
                {
                  value: 'Solomon Island',
                  label: 'Solomon Island',
                },
                {
                  value: 'Somali, Somalian',
                  label: 'Somali, Somalian',
                },
                {
                  value: 'South African',
                  label: 'South African',
                },
                {
                  value: 'South Georgia or South Sandwich Islands',
                  label: 'South Georgia or South Sandwich Islands',
                },
                {
                  value: 'South Sudanese',
                  label: 'South Sudanese',
                },
                {
                  value: 'Spanish',
                  label: 'Spanish',
                },
                {
                  value: 'Sri Lankan',
                  label: 'Sri Lankan',
                },
                {
                  value: 'Sudanese',
                  label: 'Sudanese',
                },
                {
                  value: 'Surinamese',
                  label: 'Surinamese',
                },
                {
                  value: 'Svalbard',
                  label: 'Svalbard',
                },
                {
                  value: 'Swazi',
                  label: 'Swazi',
                },
                {
                  value: 'Swedish',
                  label: 'Swedish',
                },
                {
                  value: 'Swiss',
                  label: 'Swiss',
                },
                {
                  value: 'Syrian',
                  label: 'Syrian',
                },
                {
                  value: 'Chinese, Taiwanese',
                  label: 'Chinese, Taiwanese',
                },
                {
                  value: 'Tajikistani',
                  label: 'Tajikistani',
                },
                {
                  value: 'Tanzanian',
                  label: 'Tanzanian',
                },
                {
                  value: 'Thai',
                  label: 'Thai',
                },
                {
                  value: 'Timorese',
                  label: 'Timorese',
                },
                {
                  value: 'Togolese',
                  label: 'Togolese',
                },
                {
                  value: 'Tokelauan',
                  label: 'Tokelauan',
                },
                {
                  value: 'Tongan',
                  label: 'Tongan',
                },
                {
                  value: 'Trinidadian or Tobagonian',
                  label: 'Trinidadian or Tobagonian',
                },
                {
                  value: 'Tunisian',
                  label: 'Tunisian',
                },
                {
                  value: 'Turkish',
                  label: 'Turkish',
                },
                {
                  value: 'Turkmen',
                  label: 'Turkmen',
                },
                {
                  value: 'Turks and Caicos Island',
                  label: 'Turks and Caicos Island',
                },
                {
                  value: 'Tuvaluan',
                  label: 'Tuvaluan',
                },
                {
                  value: 'Ugandan',
                  label: 'Ugandan',
                },
                {
                  value: 'Ukrainian',
                  label: 'Ukrainian',
                },
                {
                  value: 'Emirati, Emirian, Emiri',
                  label: 'Emirati, Emirian, Emiri',
                },
                {
                  value: 'British, UK',
                  label: 'British, UK',
                },
                {
                  value: 'American',
                  label: 'American',
                },
                {
                  value: 'American',
                  label: 'American',
                },
                {
                  value: 'Uruguayan',
                  label: 'Uruguayan',
                },
                {
                  value: 'Uzbekistani, Uzbek',
                  label: 'Uzbekistani, Uzbek',
                },
                {
                  value: 'Ni-Vanuatu, Vanuatuan',
                  label: 'Ni-Vanuatu, Vanuatuan',
                },
                {
                  value: 'Venezuelan',
                  label: 'Venezuelan',
                },
                {
                  value: 'Vietnamese',
                  label: 'Vietnamese',
                },
                {
                  value: 'British Virgin Island',
                  label: 'British Virgin Island',
                },
                {
                  value: 'U.S. Virgin Island',
                  label: 'U.S. Virgin Island',
                },
                {
                  value: 'Wallis and Futuna, Wallisian or Futunan',
                  label: 'Wallis and Futuna, Wallisian or Futunan',
                },
                {
                  value: 'Sahrawi, Sahrawian, Sahraouian',
                  label: 'Sahrawi, Sahrawian, Sahraouian',
                },
                {
                  value: 'Yemeni',
                  label: 'Yemeni',
                },
                {
                  value: 'Zambian',
                  label: 'Zambian',
                },
                {
                  value: 'Zimbabwean',
                  label: 'Zimbabwean',
                },
              ],
            },
          },
          {
            label: 'Race',
            type: 'Select',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            id: 'race',
            select: {
              type: 'inLine',
              options: [
                { value: 'Asian', label: 'Asian' },
                { value: 'European', label: 'European' },
                { value: 'African', label: 'African' },
                { value: 'South American', label: 'South American' },
                { value: 'Australian', label: 'Australian' },
                { value: 'North American', label: 'North American' },
                { value: 'Other', label: 'Other' },
              ],
            },
            validations: [
              {
                type: 'required',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Contact Details',
    plan: {
      section: {
        title: 'Contact Details',
        fields: [
          {
            label: 'Your email',
            type: 'Text',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            id: 'yourEmail',
            config: {
              type: 'email',
            },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Personal email',
            type: 'Text',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            id: 'personalEmail',
            config: {
              type: 'email',
            },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Mobile Number',
            // gridSizes: { xs: 12, sm: 6, md: 3 },
            type: 'PhoneNumber',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            id: 'mobileNumber',

            validations: [
              {
                type: 'required',
                vtype: 'number',
              },
              {
                type: 'Length',
                length: {
                  min: 13,
                  max: 15,
                },
              },
            ],
          },
          {
            label: 'Alternate Number',
            // gridSizes: { xs: 12, sm: 6, md: 3 },
            type: 'PhoneNumber',
            id: 'alternateNumber',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            validations: [
              {
                type: 'required',
                vtype: 'number',
              },
              {
                type: 'Length',
                length: {
                  min: 13,
                  max: 15,
                },
              },
            ],
          },
          {
            label: 'Home Address',
            type: 'Text',
            id: 'homeAddress',
            gridSizes: { xs: 12, sm: 6, md: 12, lg: 6 },
            isMultiline: true,
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Communication Address',
            type: 'Text',
            id: 'communicationAddress',
            gridSizes: { xs: 12, sm: 6, md: 12, lg: 6 },
            isMultiline: true,
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Home Address Country',
            type: 'Select',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            id: 'homeAddressCountry',
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
          {
            label: 'Communication Address Country',
            type: 'Select',
            gridSizes: { xs: 12, sm: 6, md: 4, lg: 3 },
            id: 'communicationAddressCountry',
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
    },
  },
];

const employmentAndEducationalDetailsCardSections = [
  {
    title: 'Previous Employer Details',
    type: 'FieldArray',
    section: {
      title: 'Previous Employer Details',
      fields: [
        {
          title: 'Education Details',
          id: 'perviousEmployerDetailis',
          appendButtonText: '+ Add another experience ',
          type: 'FieldArray',
          arrayFields: [
            {
              label: 'Previous Organization Name',
              type: 'Text',
              fieldName: 'previousOrganizationName',
              gridSizes: { xs: 12, sm: 6, md: 3 },
              validations: [
                {
                  type: 'required',
                },
              ],
            },
            {
              label: 'Job Title',
              type: 'Text',
              fieldName: 'jobTitle',
              gridSizes: { xs: 12, sm: 6, md: 3 },
              validations: [
                {
                  type: 'required',
                },
              ],
            },
            {
              label: 'From',
              type: 'Date',
              fieldName: 'from',
              gridSizes: { xs: 12, sm: 6, md: 3 },
              validations: [],
            },
            {
              label: 'To',
              type: 'Date',
              gridSizes: { xs: 12, sm: 6, md: 3 },
              fieldName: 'To',
              validations: [],
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Education Details',
    type: 'FieldArray',
    section: {
      title: 'Education Details',
      fields: [
        {
          // title: 'Education Details',
          id: 'educationDetails',
          appendButtonText: '+ Add another qualification ',
          type: 'FieldArray',
          gridSizes: { xs: 12, sm: 6, md: 3 },
          arrayFields: [
            {
              label: 'Course Type',
              type: 'Select',
              gridSizes: { xs: 12, sm: 6, md: 3 },
              fieldName: 'courseType',
              validations: [
                {
                  type: 'required',
                },
              ],
              select: {
                type: 'inLine',
                options: [
                  { value: 'PG', label: 'Post Graduation' },
                  { value: 'UG', label: 'Graduation' },
                  { value: 'School', label: 'Schooling' },
                  { value: 'Phd', label: 'Doctorate' },
                  { value: 'Others', label: 'Other' },
                ],
              },
            },
            {
              label: 'Course Name',
              type: 'Text',
              gridSizes: { xs: 12, sm: 6, md: 3 },
              fieldName: 'courseName',
              validations: [
                {
                  type: 'required',
                },
              ],
            },
            {
              label: 'From',
              type: 'Date',
              gridSizes: { xs: 12, sm: 6, md: 3 },
              fieldName: 'from',
              validations: [],
            },
            {
              label: 'To',
              type: 'Date',
              gridSizes: { xs: 12, sm: 6, md: 3 },
              fieldName: 'To',
              validations: [],
            },
            {
              label: 'Grade Point / Percentage',
              type: 'Text',
              fieldName: 'percentage',
              gridSizes: { xs: 12, sm: 6, md: 3 },
              config: {
                type: 'number',
              },
              validations: [
                {
                  type: 'required',
                },
                {
                  type: 'Range',
                  range: { max: 100, min: 0 },
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

const jobDetailsCardSections = [
  {
    title: 'Job Details',
    plan: {
      section: {
        title: 'Job Details',
        fields: [
          {
            label: 'Employee Roll No.',
            type: 'Text',
            id: 'employeeRollNo',
            gridSizes: { xs: 12, sm: 6, md: 3 },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Date of Joining',
            type: 'Date',
            gridSizes: { xs: 12, sm: 6, md: 3 },
            id: 'personalEmail',

            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'In Probation',
            type: 'Select',
            id: 'inProbation',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ],
            },
          },
          {
            label: 'Probation Duration',
            // gridSizes: { xs: 12, sm: 6, md: 3 },
            type: 'Date',
            id: 'probationDuration',
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Notice Period',
            type: 'Select',
            id: 'noticePeriod',
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
          {
            label: 'Work Type',
            type: 'Select',
            id: 'workType',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Permanent', label: 'Permanent' },
                { value: 'External Contract', label: 'External Contract' },
              ],
            },
          },
          {
            label: 'Time Type',
            type: 'Select',
            id: 'timeType',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Permanent', label: 'Permanent' },
                { value: 'External Contract', label: 'External Contract' },
              ],
            },
          },
        ],
      },
    },
  },
  {
    title: 'Employee Time',
    plan: {
      section: {
        title: 'Employee Time',
        fields: [
          {
            label: 'Shift',
            type: 'Select',
            id: 'shift',
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
          {
            label: 'Work Week Policy',
            type: 'Select',
            id: 'workWeekPolicy',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Permanent', label: 'Permanent' },
                { value: 'External Contract', label: 'External Contract' },
              ],
            },
          },
          {
            label: 'Leave Policy',
            type: 'Select',
            id: 'leavePolicy',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Permanent', label: 'Permanent' },
                { value: 'External Contract', label: 'External Contract' },
              ],
            },
          },
        ],
      },
    },
  },
  {
    title: 'Organisation Details',
    plan: {
      section: {
        title: 'Organisation Details',
        fields: [
          {
            label: 'Entity',
            type: 'Select',
            id: 'entity',
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
          {
            label: 'Business Unit',
            type: 'Select',
            id: 'businessUnit',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Permanent', label: 'Permanent' },
                { value: 'External Contract', label: 'External Contract' },
              ],
            },
          },
          {
            label: 'Department',
            type: 'Select',
            id: 'department',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Permanent', label: 'Permanent' },
                { value: 'External Contract', label: 'External Contract' },
              ],
            },
          },
          {
            label: 'Reporting To',
            type: 'Select',
            id: 'reportingTo',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Permanent', label: 'Permanent' },
                { value: 'External Contract', label: 'External Contract' },
              ],
            },
          },
          {
            label: 'Manager',
            type: 'Select',
            id: 'manager',
            validations: [
              {
                type: 'required',
              },
            ],
            select: {
              type: 'inLine',
              options: [
                { value: 'Permanent', label: 'Permanent' },
                { value: 'External Contract', label: 'External Contract' },
              ],
            },
          },
        ],
      },
    },
  },
];
const dataSections = [
  {
    title: 'Basic Details',
    plan: {
      section: {
        title: 'Basic Details',
        fields: [
          {
            label: 'First Name',
            value: 'Mazoor',
            type: 'DataCard',
          },
          {
            label: 'First Name',
            value: 'Mazoor',
            type: 'DataCard',
          },
          {
            label: 'First Name',
            value: 'Mazoor',
            type: 'DataCard',
          },
          {
            label: 'First Name',
            value: 'Mazoor',
            type: 'DataCard',
          },
          {
            label: 'First Name',
            value: 'Mazoor',
            type: 'DataCard',
          },
          {
            label: 'First Name',
            value: 'Mazoor',
            type: 'DataCard',
          },
        ],
      },
    },
  },
];

const profileField = {
  name: 'Mansoor Ali Basha',
  empId: 'YOP004',
  location: 'Mumbai, Kollam',
  email: 'mansoor@yop.com',
  phoneNumber: '+91 8169319282',
  jobTitle: 'HR Admin',
  department: 'Engineering',
  division: 'YOP - India',
  reportingTo: 'Job Smith',
};

const ESTabs = [
  {
    text: 'Primary Details',
    component: <SmartCards cardSections={primaryDetailsCardSections} />,
  },
  {
    text: 'Employment & Education Details',
    component: (
      <SmartCards cardSections={employmentAndEducationalDetailsCardSections} />
    ),
  },
  {
    text: 'Job Detail',
    component: <SmartCards cardSections={jobDetailsCardSections} />,
  },
  {
    text: 'Document',
    component: <DocumentTab />,
  },
  {
    text: 'Compensation',
    component: <SmartCards cardSections={primaryDetailsCardSections} />,
  },
];
