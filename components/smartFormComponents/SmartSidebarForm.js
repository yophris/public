import { Box, Stack } from '@mui/material';
import AppButton from 'components/AppButton';
import AppDivider from 'components/AppDivider';
import AppForm from 'components/fields/AppForm';
import SearchInput from 'components/fields/SearchInput';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { jsonToFormData } from 'requests';
import useFileUploadStore from 'store/useFileUploadStore';
import { extractFromJSON } from 'Utils';
import SettingDrawer from '../settings/SettingDrawer';
import SimpleSmartForm from './SimpleSmartForm';
// import EditableList from './EditableList';

const SmartSideBarForm = ({ plan, formData, clearEdit }) => {
  const { endpoint, postFn, key, putFn, transform = (data) => data } = plan;

  const setProgress = useFileUploadStore((state) => state.setProgress);
  const alert = useAlert();
  const qc = useQueryClient();
  const [openSideMenu, setOpenSideMenu] = React.useState(false);

  // create
  const onCreate = useMutation(
    (data) => {
      return !formData
        ? postFn(endpoint, transform(data), setProgress)
        : putFn(endpoint, formData.id, transform(data), setProgress);
    },
    {
      onSuccess: () => {
        setOpenSideMenu(false);
        qc.invalidateQueries('get' + key);
        alert.success(!formData.id ? 'created' : 'Updated');
      },
      onError: (data) => {
        alert.error('Failed');
      },
    }
  );

  useEffect(
    (_) => {
      if (formData) {
        console.log('Opening');
        setOpenSideMenu(true);
      }
    },
    [formData]
  );

  useEffect(
    (_) => {
      if (!openSideMenu) {
        clearEdit();
      }
    },
    [openSideMenu]
  );
  return (
    <Stack spacing={2} m={2} divider={<AppDivider />}>
      <Stack direction="row" spacing={3}>
        <SearchInput sx={{ flex: 1 }} />
        <AppButton variant="contained" onClick={() => setOpenSideMenu(true)}>
          {plan?.sideBarTitle}
        </AppButton>
        {openSideMenu && (
          <SettingDrawer
            open={openSideMenu}
            callback={setOpenSideMenu}
            title={
              formData?.id
                ? plan?.sideBarTitle?.replace('Add', 'Update')
                : plan?.sideBarTitle
            }
          >
            <Box p={2}>
              <SimpleSmartForm
                plan={plan}
                onSubmit={(data) => onCreate.mutate({ ...data })}
                formData={formData}
              />
            </Box>
          </SettingDrawer>
        )}
      </Stack>
    </Stack>
  );
};

export default SmartSideBarForm;
