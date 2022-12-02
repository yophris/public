import { Stack } from '@mui/material';
import AppButton from 'components/AppButton';
import AppDivider from 'components/AppDivider';
import AppForm from 'components/fields/AppForm';
import SearchInput from 'components/fields/SearchInput';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import EditableList from './EditableList';
import SettingDrawer from './SettingDrawer';

const ListWithSidebarLayout = ({ config }) => {
  const { endpoint, texts, getAllFn, postFn, key, deleteFn, validation } =
    config;

  const qc = useQueryClient();
  const [openSideMenu, setOpenSideMenu] = React.useState(false);

  // getSetting
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get' + key, () => getAllFn(endpoint));

  // create
  const onCreate = useMutation((data) => postFn(endpoint, data), {
    onSuccess: () => {
      qc.invalidateQueries('get' + key);
      alert(`${endpoint} created`);
      setOpenSideMenu(false);
    },
    onError: (data) => {
      alert('Failed');
    },
  });

  // Delete
  const onDelete = useMutation((data) => deleteFn(endpoint, data), {
    onSuccess: () => {
      qc.invalidateQueries('get' + key);
      alert('Deleted');
      setOpenSideMenu(false);
    },
    onError: (data) => {
      alert('Failed');
    },
  });

  const editClickCB = (id) => {
    setOpenSideMenu(true);
  };

  const onDeleteClick = (id) => {
    if (window.confirm('Do you want to delete this ? ')) {
      onDelete.mutate({ id: id });
    }
    // setOpenSideMenu(true)
  };
  console.log(response);
  // return "hi"
  return (
    <Stack spacing={2} m={2} divider={<AppDivider />}>
      <Stack direction="row" spacing={3}>
        <SearchInput sx={{ flex: 1 }} />
        <AppButton
          label={texts?.drawerTitle}
          variant="contained"
          onClick={() => setOpenSideMenu(true)}
        />
        {openSideMenu && (
          <SettingDrawer
            open={openSideMenu}
            callback={setOpenSideMenu}
            title={texts?.drawerTitle}
          >
            <AppForm
              form={config.form}
              submitData={(data) => onCreate.mutate({ ...data })}
              validationSchema={validation}
              cancelDrawer={() => setOpenSideMenu(false)}
            />
          </SettingDrawer>
        )}
      </Stack>
      <Stack sx={{ rowGap: 1 }}>
        {isLoading
          ? 'Loading'
          : response?.data?.map((e, index) => (
              <EditableList
                key={index}
                label={e[texts.key]}
                cb={{
                  Edit: () => editClickCB(e.id),
                  Delete: () => onDeleteClick(e.id),
                }}
              />
            ))}
      </Stack>
    </Stack>
  );
};

export default ListWithSidebarLayout;
