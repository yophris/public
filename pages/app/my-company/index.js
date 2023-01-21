import EmployeeDirectory from '@/components/my-company/EmployeedDirectory';
import SmartTabs from '@/components/smartFormComponents/SmartTabs';

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
