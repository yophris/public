import stationForm from './station';
import addressForm from './address';
import divisionForm from './division';
import DeparmentForm from './department';
import teamForm from './team';

const forms = {
  station: stationForm,
  division: divisionForm,
  department: DeparmentForm,
  // sub_department: stationForm,
  teams: teamForm,
  org_document: stationForm,
  onboarding_checklist:stationForm,
  offboarding_checklist:stationForm,
  leavePolicy:stationForm,
  leaveType:stationForm,
  holidayCalender:stationForm,
  work_week:stationForm,
  reimbursement_policy:stationForm,
  reimbursement_type:stationForm,
  heirachy_type:stationForm,
  workflow_approval:stationForm,
  address: addressForm,
};

export default forms;
