import SmartTabs from '@/components/smartFormComponents/SmartTabs';
import EmployeeDirectory from './(tabs)/EmployeedDirectory';

export default function index() {
  const CompanyTabs = [
    {
      text: 'Attendance & Time OFF',
    },
    { text: 'Employee Directory', component: <EmployeeDirectory /> },
    { text: 'Organization Tree' },
  ];

  return <SmartTabs tabs={CompanyTabs}></SmartTabs>;
}
