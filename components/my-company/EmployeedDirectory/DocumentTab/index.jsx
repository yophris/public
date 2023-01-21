import * as React from 'react';
import AppMenu from '@/components/AppMenu';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import DocTable from './DocTable';
import SettingDrawer from '@/components/settings/SettingDrawer';
import SimpleSmartForm from '@/components/smartFormComponents/SimpleSmartForm';
import SmartCards from '@/components/smartFormComponents/SmartCards';

export default function DocumentTab(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (option) => {
    let callback = cb[option];
    if (callback) {
      callback();
      handleClose();
    }
  };

  return <DocTable tableData={tableData} tableHeader={tableHeader} />;
}

function DownloadComponent(props) {
  return (
    <IconButton disableRipple onClick={() => {}}>
      <Button disableRipple>
        <Typography variant="body_bold_primary">Download</Typography>
      </Button>
      <FileDownloadOutlinedIcon
        sx={{ fontSize: '2rem', color: 'text.primary' }}
      />
    </IconButton>
  );
}

function MenuComponent(props) {
  // const {
  //   endpoint,
  //   texts,
  //   getAllFn,
  //   postFn,
  //   key,
  //   deleteFn,
  //   validation,
  //   putFn,
  //   transform = (data) => data,
  // } = config;

  // const setProgress = useFileUploadStore((state) => state.setProgress);
  // const alert = useAlert();
  // const qc = useQueryClient();

  // const [editId, setEditId] = useState(null);
  // // getSetting
  // const {
  //   isLoading,
  //   data: response,
  //   error,
  // } = useQuery('get' + key, () => getAllFn(endpoint, { page: 1 }));

  // // create
  // const onCreate = useMutation(
  //   (data) => {
  //     return !editId
  //       ? postFn(endpoint, transform(data), setProgress)
  //       : putFn(endpoint, editId, transform(data), setProgress);
  //   },
  //   {
  //     onSuccess: () => {
  //       setOpenSideMenu(false);
  //       qc.invalidateQueries('get' + key);
  //       alert.success(!editId ? 'created' : 'Updated');
  //     },
  //     onError: (data) => {
  //       alert.error('Failed');
  //     },
  //   }
  // );

  // // Delete
  // const onDelete = useMutation((data) => deleteFn(endpoint, data), {
  //   onSuccess: () => {
  //     qc.invalidateQueries('get' + key);
  //     alert('Deleted');
  //     setOpenSideMenu(false);
  //   },
  //   onError: (data) => {
  //     alert('Failed');
  //   },
  // });
  const [openSideMenu, setOpenSideMenu] = React.useState(false);
  const editClickCB = (id) => {
    setOpenSideMenu(true);
    // TODO: Very Crucial
    setEditId(id);
  };

  // const onDeleteClick = (id) => {
  //   if (window.confirm('Do you want to delete this ? ')) {
  //     onDelete.mutate({ id: id });
  //   }
  //   // setOpenSideMenu(true)
  // };

  // React.useEffect(
  //   (_) => {
  //     if (!openSideMenu) {
  //       setEditId(null);
  //     }
  //   },
  //   [openSideMenu]
  // );
  return (
    <Stack spacing={2} m={2}>
      <AppMenu
        handleDrawer={setOpenSideMenu}
        set
        options={['Update', 'Delete']}
      />

      {openSideMenu && (
        <SettingDrawer
          open={openSideMenu}
          callback={setOpenSideMenu}
          title="Update Document"
        >
          <SmartCards cardSections={formBuilder} />
          {/* <AppForm
            form={config.form}
            edit={
              editId ? { ...response.data.find((e) => e.id == editId) } : null
            }
            submitData={(data) => onCreate.mutate({ ...data })}
            validationSchema={validation}
            cancelDrawer={() => setOpenSideMenu(false)}
          /> */}
        </SettingDrawer>
      )}
    </Stack>
  );
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleMenu = (option) => {
  //   let callback = cb[option];
  //   if (callback) {
  //     callback();
  //     handleClose();
  //   }
  // };
}

const tableData = [
  {
    name: 'Driving Licence',
    type: 'Identity Doc',
    requestedOn: '13-02-2022',
    valid: { from: '03 Oct 2020', to: '02 Oct 2030' },
    issuedCountry: 'USA',
    DownloadComponent: <DownloadComponent />,
    MenuComponent: <MenuComponent />,
  },
  {
    name: 'Experience Letter',
    type: 'Previous Experience',
    requestedOn: '13-07-2022',
    valid: { from: '03 Oct 2014', to: '02 Oct 2020' },
    issuedCountry: 'KSA',
    DownloadComponent: <DownloadComponent />,
    MenuComponent: <MenuComponent />,
  },
];

const tableHeader = [
  'Document Name',
  'Document Type',
  'Valid From - To',
  'Issued Country',
  '',
  '',
];

const formBuilder = [
  {
    title: '',
    plan: {
      section: {
        title: '',
        submitBtnPlacement: 'footer',
        fields: [
          {
            label: 'Document Name',
            type: 'Select',
            id: 'docName',
            gridSizes: { xs: 12 },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Document Type Name',
            type: 'Select',
            id: 'middleName',
            gridSizes: { xs: 12 },
            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Document Validity',
            type: 'Heading',
            gridSizes: { xs: 12 },
          },
          {
            label: 'Date of Issue',
            type: 'Date',
            gridSizes: { xs: 12, sm: 6 },
            id: 'dateOfIssue',

            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Date of Expiry',
            type: 'Date',
            gridSizes: { xs: 12, sm: 6 },
            id: 'dateOfExpiry',

            validations: [
              {
                type: 'required',
              },
            ],
          },
          {
            label: 'Issued Country',
            type: 'Select',
            gridSizes: { xs: 12 },
            id: 'issuedCountry',

            validations: [
              {
                type: 'required',
                vtype: 'number',
              },
            ],
          },
        ],
      },
    },
  },
];
