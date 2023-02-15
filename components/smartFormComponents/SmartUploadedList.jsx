import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import AppDivider from 'components/AppDivider';
import { ListItemIcon } from '@mui/material';
const style = {
  border: '2px dashed #BDCEDD',
  background: '#FAFAFA',
  borderRadius: '8px',
  // background: "url('/images/borderDashed.svg') no-repeat",
  // backgroundSize: 'contain',
};
export default function FileUploadList({ file, handleRemove, isLast }) {
  console.log('files', file);
  return (
    <List
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', bgcolor: 'background.paper', px: 2, ...style }}
    >
      <ListItem sx={{ px: 0 }} alignItems="center">
        <ListItemAvatar>
          <Image
            alt="file image"
            src="/images/pdfIcon.svg"
            width={36}
            height={36}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component="p" variant="body_medium_primary">
              {file.path}
            </Typography>
          }
          secondary={
            <Typography component="p" variant="smallcopy_regular_muted">
              Document - {Number(file.size) / 1000000} MB - .PDF
            </Typography>
          }
        />
        <ListItemIcon
          onClick={handleRemove}
          sx={{ minWidth: 0, cursor: 'pointer' }}
        >
          <DeleteOutlineOutlinedIcon sx={{ fontSize: '2rem' }} />
        </ListItemIcon>
      </ListItem>
      {!isLast && <AppDivider borderColor="#F0F0F0" />}
    </List>
  );
}
