import { Stack, styled, Switch, Typography } from '@mui/material';
import Image from 'next/image';

export default function AppSwitch(props) {
  const { label, register, name, error, isRequired, isMultiline } = props;
  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <AntSwitch defaultChecked />
      <Typography variant="h3_medium_secondary" component="p">
        {label}
      </Typography>
      <Image src="/images/infoIcon.svg" width={15} height={15} alt="info" />

      {/* {error?.message && (
        <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
          {error.message}
        </Typography>
      )} */}
    </Stack>
  );
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 38,
  height: 23,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(14px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 19,
    height: 19,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 23 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
