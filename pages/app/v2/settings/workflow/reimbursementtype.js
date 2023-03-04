import EditableList from '@/components/settings/EditableList';
import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useSettingFormPage } from 'hooks/useSettingPageForm';
import React from 'react';
import { useAlert } from 'react-alert';
import { useQuery, useQueryClient } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { extractFromJSON } from 'Utils';

const plan = {
  sideBarTitle: 'Add Reimbursement Type',
  endpoint: 'settings/reimbursementtype',
  key: 'reimbursementType',
  getFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
  section: {
    fields: [
      {
        label: 'Reimbursement Type Name',
        // isRequired: true,
        type: 'Text',
        id: 'name',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        config: {
          placeholder: 'Reimbursement Type Name',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'Description',
        type: 'Text',
        id: 'description',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        isMultiline: true,
        config: {
          placeholder: 'Description',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
    ],
  },
  texts: {
    key: 'reimbursementType',
    breadcrumbText: 'Reimbursement Type',
    drawerTitle: 'Add Reimbursement Type',
    mainTitle: 'Reimbursement Type',
    mainDescription: 'this is short description for division',
    sideTitle: 'Reimbursement Types',
    sideDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
};

export default function Page() {
  const {
    setOpenSideMenu,
    openSideMenu,
    editData,
    onDeleteClick,
    response,
    isLoading,
    editClickCB,
  } = useSettingFormPage(plan);

  return (
    <SettingPageLayout texts={plan.texts}>
      <SmartSideBarForm
        plan={plan}
        openSideMenu={openSideMenu}
        editData={editData}
        setOpenSideMenu={setOpenSideMenu}
      />
      {isLoading
        ? 'Loading'
        : response?.data?.map((e, index) => (
            <EditableList
              key={index}
              label={extractFromJSON(e, `$.name`)}
              cb={{
                Edit: () => editClickCB(e),
                Delete: () => onDeleteClick(e.id),
              }}
            />
          ))}
    </SettingPageLayout>
  );
}
