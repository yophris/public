import apiClient from "requests";

export const getSetting = (type) => apiClient(type, 'get');
export const createSetting = (type, payload) => apiClient(type, 'post', payload);

// Division
export const getDivisions =  ()=> apiClient('/settings/division','get')
export const createDivisions =  (payload)=> apiClient('/settings/division','post',payload)
export const updateDivision =  (payload)=> apiClient('/settings/division','put',payload)
export const deleteDivision =  (payload)=> apiClient('/settings/division/'+payload?.id,'delete')
// Station
export const getStation =  ()=> apiClient('/settings/station','get')
export const createStation =  (payload)=> apiClient('/settings/station','post',payload)
export const updateStation =  (payload)=> apiClient('/settings/station','put',payload)
export const deleteStation =  (payload)=> apiClient('/settings/station/'+payload?.id,'delete')

// Department
export const getDepartment =  ()=> apiClient('/settings/department','get')
export const createDepartment =  (payload)=> apiClient('/settings/department','post',payload)
export const updateDepartment =  (payload)=> apiClient('/settings/department','put',payload)
export const deleteDepartment =  (payload)=> apiClient('/settings/department/'+payload?.id,'delete')

// Team
export const getTeams =  ()=> apiClient('/settings/team','get')
export const createTeams =  (payload)=> apiClient('/settings/team','post',payload)
export const updateTeams =  (payload)=> apiClient('/settings/team','put',payload)
export const deleteTemas =  (payload)=> apiClient('/settings/team/'+payload?.id,'delete')