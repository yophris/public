import * as React from 'react';
import AppButton from '@/components/AppButton';
import AppMenu from '@/components/AppMenu';
import SettingDrawer from '@/components/settings/SettingDrawer';
import SmartCards from '@/components/smartFormComponents/SmartCards';
import SmartTable from '@/components/common/SmartTable';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Button, Stack, Typography } from '@mui/material';

const asyncTableData = [
  {
    uid: 'sdffd123123123',
    name: 'Driving Licence',
    type: 'Identity Doc',
    requestedOn: '13-02-2022',
    valid: { from: '03 Oct 2020', to: '02 Oct 2030' },
    issuedCountry: 'USA',
  },
  {
    uid: 'sdffd1231245334',
    name: 'Experience Letter',
    type: 'Previous Experience',
    requestedOn: '13-07-2022',
    valid: { from: '03 Oct 2014', to: '02 Oct 2020' },
    issuedCountry: 'KSA',
  },
  {
    uid: 'sdffd123123123',
    name: 'Driving Licence',
    type: 'Identity Doc',
    requestedOn: '13-02-2022',
    valid: { from: '03 Oct 2020', to: '02 Oct 2030' },
    issuedCountry: 'USA',
  },
];

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

  const handleDelete = (e, item) => {
    const filteredItems = tableData.filter((d) => item !== d);
    setTableData(filteredItems);
  };

  const [tableData, setTableData] = React.useState([]);
  React.useEffect(() => {
    let modifyTableData = [];
    asyncTableData.map((td, i) =>
      modifyTableData.push([
        {
          name: td.name,
          component: (
            <Typography variant="body_medium_secondary">{td.name}</Typography>
          ),
        },
        {
          type: td.requestedOn,
          component: (
            <Stack rowGap={0.7}>
              <Typography variant="body_medium_secondary">{td.type}</Typography>
              <Typography variant="subbody_medium_muted" component="p">
                {td.requestedOn}
              </Typography>
            </Stack>
          ),
        },
        {
          valid: td.valid.from,
          component: (
            <Stack rowGap={0.7}>
              <Typography variant="body_medium_secondary">
                {td.valid.from}
                {' - '}
                {td.valid.to}{' '}
              </Typography>
              <Typography variant="subbody_medium_muted" component="p">
                {new Date(td.valid.to).getFullYear() -
                  new Date(td.valid.from).getFullYear()}{' '}
                {'years left'}
              </Typography>
            </Stack>
          ),
        },
        {
          issued: td.issuedCountry,
          component: (
            <Typography variant="body_medium_secondary">
              {td.issuedCountry}
            </Typography>
          ),
        },
        {
          sortValueRef: 'action',
          component: <DownloadComponent />,
        },
        {
          sortValueRef: 'action',
          component: <MenuComponent />,
        },
      ])
    );
    setTableData(modifyTableData);
  }, []);

  // const convertTableData = () => {
  //   tableData.
  // }

  // return (
  //   <DocTable
  //     tableData={tableData}
  //     tableHeader={tableHeader}
  //     actionComponents={actionComponents}
  //   />
  // );

  return (
    <SmartTable
      title="List of Documents"
      rows={tableData}
      headCells={headCells}
      handleDelete={handleDelete}
      optionalComponents={
        <AppButton onClick={() => {}}>Add Document</AppButton>
      }
    />
  );
}

function DownloadComponent(props) {
  return (
    <Stack direction="row" alignItems="center" sx={{}}>
      <Button disableRipple>
        <Typography variant="body_bold_primary">Download</Typography>
      </Button>
      <FileDownloadOutlinedIcon
        sx={{ fontSize: '2rem', color: 'text.primary' }}
      />
    </Stack>
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

// const actionComponents = [DownloadComponent, MenuComponent];

// const tableHeader = [
//   'Document Name',
//   'Document Type',
//   'Valid From - To',
//   'Issued Country',
//   '',
//   '',
// ];

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
          {
            label: 'Attach File',
            type: 'DocumentUpload',
            gridSizes: { xs: 12 },
            id: 'attachFile',

            validations: [
              {
                type: 'required',
              },
            ],
          },
        ],
      },
    },
  },
];

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Document Name',
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Document Type',
  },
  {
    id: 'valid',
    numeric: false,
    disablePadding: false,
    label: 'Valid From - To',
  },
  {
    id: 'issued',
    numeric: false,
    disablePadding: false,
    label: 'Issued Country',
  },
  {
    id: 'actionComp1',
    numeric: false,
    disablePadding: false,
    label: '',
  },
  {
    id: 'actionComp2',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];
