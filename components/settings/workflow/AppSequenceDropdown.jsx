import { useCallback, useState } from 'react';
import { Box, Typography } from '@mui/material';
import AppButton from 'components/AppButton';
import update from 'immutability-helper';
import { AppItem } from './AppItem';
const options = [
  { text: 'Line Manager', value: 'lm' },
  { text: 'Senior Manage', value: 'sm' },
  { text: 'CEO', value: 'ceo' },
];
export default function AppSequenceDropdown({ ...rest }) {
  const [items, setItems] = useState([
    {
      id: 1,
      sequence: 1,
    },
    {
      id: 2,
      sequence: 2,
    },
  ]);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      console.log('move card: di, hi, items ', dragIndex, hoverIndex, items);
      setItems((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
      console.log('move card items after dragged: ', items);
    },
    [items]
  );
  const renderCard = useCallback(
    (item, index) => {
      return (
        <AppItem
          key={item.id}
          index={index}
          id={item.id}
          item={item}
          options={options}
          moveCard={moveCard}
          {...rest}
        />
      );
    },
    [items]
  );
  return (
    <Box sx={{ width: '100%' }}>
      {rest.headLabel && (
        <Typography variant="h3_bold_secondary" component="h3" mb={1}>
          {rest.headLabel}
        </Typography>
      )}
      <Typography variant="body_medium_muted" component="p" mb={1}>
        {rest.label}
        {rest.isRequired && (
          <Typography
            variant="body_bold"
            sx={{ marginLeft: '4px', color: '#F53E40' }}
          >
            *
          </Typography>
        )}
      </Typography>
      {items.map((item, i) => renderCard(item, i))}
      <AppButton
        onClick={() =>
          setItems([
            ...items,
            {
              id: items.length + 1,
              sequence: items.length + 1,
            },
          ])
        }
        styleOverrides={{
          width: '100%',
          my: 2,
          color: 'text.primary',
          fontWeight: 600,
          fontSize: '1.6rem',
        }}
        variant="outlined"
      >
        + Add another row
      </AppButton>{' '}
      {rest.error?.message && (
        <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
          {rest.error.message}
        </Typography>
      )}
    </Box>
  );

  //   const {
  //     headLabel,
  //     label,
  //     unit = '',
  //     inputAdornment = {
  //       text: '',
  //       placement: 'start',
  //     },
  //     register,
  //     // watch,
  //     name,
  //     error,
  //     isRequired,
  //     isMultiline,
  //     setValue,
  //     ...rest
  //   } = props;

  // return (
  //   <Box sx={{ width: '100%' }}>
  //     {rest.headLabel && (
  //       <Typography variant="h3_bold_secondary" component="h3" mb={1}>
  //         {rest.headLabel}
  //       </Typography>
  //     )}
  //     <Typography variant="body_medium_muted" component="p" mb={1}>
  //       {rest.label}
  //       {rest.isRequired && (
  //         <Typography
  //           variant="body_bold"
  //           sx={{ marginLeft: '4px', color: '#F53E40' }}
  //         >
  //           *
  //         </Typography>
  //       )}
  //     </Typography>
  //     {data &&
  //       data.map((d) => (
  //         <Stack
  //           direction="row"
  //           sx={{
  //             width: '100%',
  //             px: 1.2,
  //             py: 1,
  //             my: 1,
  //             border: '1px solid #efefef',
  //             borderRadius: '5px',
  //           }}
  //           alignItems="center"
  //           spacing={2}
  //         >
  //           <DragIndicatorIcon sx={{ fontSize: '2rem', color: '#333' }} />
  //           <Typography variant="h3_bold_secondary" component="h3" mb={1}>
  //             {d.sequence}
  //           </Typography>
  //           <AppDropdown hideLabel={true} {...rest} options={d.options} />
  //           <IconButton>
  //             <Image
  //               src="/images/trashIcon.svg"
  //               width={14}
  //               height={14}
  //               alt="checked"
  //             />
  //           </IconButton>
  //         </Stack>
  //       ))}
  //     <AppButton
  //       styleOverrides={{
  //         width: '100%',
  //         my: 2,
  //         color: 'text.primary',
  //         fontWeight: 600,
  //         fontSize: '1.6rem',
  //       }}
  //       variant="outlined"
  //     >
  //       + Add another row
  //     </AppButton>{' '}
  //     {rest.error?.message && (
  //       <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
  //         {rest.error.message}
  //       </Typography>
  //     )}
  //   </Box>
  // );
}
