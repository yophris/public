import apiClient from 'requests';

// common api calls for all the pages as of now, we can create another if we find differernt pattern or logic
export const getSetting = (endpoint) => apiClient(endpoint, 'get');
export const createSetting = (endpoint, payload) =>
  apiClient(endpoint, 'post', payload);
export const updateSetting = (endpoint, payload) =>
  apiClient(endpoint, 'put', payload);
export const deleteSetting = (payload) =>
  apiClient(endpoint + '/' + payload?.id, 'delete');

// // Company / Organization
// export const getCompany = () => apiClient('/settings/company', 'get');
// export const createCompany = (payload) =>
//   apiClient('/settings/company', 'post', payload);
// export const updateCompany = (payload) =>
//   apiClient('/settings/company', 'put', payload);
// export const deleteCompany = (payload) =>
//   apiClient('/settings/company/' + payload?.id, 'delete');

// // Division
// export const getDivision = () => apiClient('/settings/division', 'get');
// export const createDivision = (payload) =>
//   apiClient('/settings/division', 'post', payload);
// export const updateDivision = (payload) =>
//   apiClient('/settings/division', 'put', payload);
// export const deleteDivision = (payload) =>
//   apiClient('/settings/division/' + payload?.id, 'delete');

// // Station
// export const getStation = () => apiClient('/settings/station', 'get');
// export const createStation = (payload) =>
//   apiClient('/settings/station', 'post', payload);
// export const updateStation = (payload) =>
//   apiClient('/settings/station', 'put', payload);
// export const deleteStation = (payload) =>
//   apiClient('/settings/station/' + payload?.id, 'delete');

// // Department
// export const getDepartment = () => apiClient('/settings/department', 'get');
// export const createDepartment = (payload) =>
//   apiClient('/settings/department', 'post', payload);
// export const updateDepartment = (payload) =>
//   apiClient('/settings/department', 'put', payload);
// export const deleteDepartment = (payload) =>
//   apiClient('/settings/department/' + payload?.id, 'delete');

// // Team
// export const getTeam = () => apiClient('/settings/team', 'get');
// export const createTeam = (payload) =>
//   apiClient('/settings/team', 'post', payload);
// export const updateTeam = (payload) =>
//   apiClient('/settings/team', 'put', payload);
// export const deleteTeam = (payload) =>
//   apiClient('/settings/team/' + payload?.id, 'delete');
