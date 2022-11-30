import React, { useEffect } from 'react';
import { Breadcrumbs, Card, CardHeader, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import AppButton from '../../components/AppButton';
import SearchInput from '../../components/fields/SearchInput';
import SettingDrawer from './templates/SettingDrawer';
import SettingPageLayout from './templates/SettingPageLayout';
import EditableList from './templates/EditableList';
import Link from 'next/link';

const ListWithSidebarLayout = ({config})=>{
  const {endpoint,texts,postFn,key,deleteFn,validation} = config ;


  // const validationSchema = form.validationSchema;
  const breadcrumbs = [
      <Link  href="/app/settings">
        SETTINGS
      </Link>,
    <Typography key="2" variant="h3_bold_secondary">
      {texts?.title}
    </Typography>,
  ]

  const qc = useQueryClient();
  const [openSideMenu, setOpenSideMenu] = React.useState(false);


  // getSetting
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get'+key, () => config.getAllFn());

  // create
  const onCreate = useMutation((data) => postFn(data), {
    onSuccess: () => {
      qc.invalidateQueries('get'+key);
      alert(`${endpoint} created`);
      setOpenSideMenu(false);
    },
    onError: (data) => {
      alert('Failed');
    },
  });


   // Delete
   const onDelete = useMutation((data) => deleteFn(data), {
    onSuccess: () => {
      qc.invalidateQueries('get'+key);
      alert('Deleted');
      setOpenSideMenu(false);
    },
    onError: (data) => {
      alert('Failed');
    },
  });

  const submitData = (data) => {
    console.log('submit data: ', key, data);
   
  };



  const editClickCB = (id)=>{
   
    setOpenSideMenu(true)
  }


  const onDeleteClick = (id)=>{
    if(window.confirm("Do you want to delete this ? ")){
      onDelete.mutate({id:id})
    }
    // setOpenSideMenu(true)
  }
  console.log(response)
  // return "hi"
  return (
    <Stack sx={{ background: '#F5F6FA', height: '100%', overflow: 'hidden' }}>
      <Stack
        sx={{
          padding: 2,
          background: '#FAFBFC',
          borderBottom: '1px solid #EBEBEB',
        }}
      >
        <Breadcrumbs
          separator={">"}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Stack sx={{ padding: 2, height: '100%', flex: 1 }}>
        <SettingPageLayout
          title={texts?.mainTitle}
          subtitle={texts?.shortDescription}
          longDescription={texts?.longDescription}
        >
          <Stack direction="row" spacing={3}>
            <SearchInput sx={{ flex: 1 }} />
            <AppButton
              label={texts?.drawerTitle}
              variant="contained"
              onClick={() => setOpenSideMenu(true)}
            />
            {/* 
            TODO: 
            The Corresponding Form Component Should be passes to the Setting Drawer
            Thus we can reuse the form where ever we need

            ----> 
            
            */}
            {openSideMenu && (
              <SettingDrawer
                open={openSideMenu}
                callback={setOpenSideMenu}
                form={config.form}
                title={texts?.drawerTitle}
                submitData={(data)=> onCreate.mutate({ ...data })}
                validationSchema={validation}
              />
            )}
          </Stack>
          <Stack sx={{ rowGap: 1 }}>
            {isLoading
              ? 'Loading'
              : response?.data?.map((e, index) => (
                  <EditableList key={index} label={e[texts.key]} cb={{
                    'Edit':()=>editClickCB(e.id),
                    'Delete' : ()=>onDeleteClick(e.id)
                  }}/>
                ))}
          </Stack>
        </SettingPageLayout>
      </Stack>
    </Stack>
  );

}



export default ListWithSidebarLayout;
