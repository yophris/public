import { useCallback, useState, useEffect } from 'react';
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
      approvers: '',
    },
    {
      id: 2,
      sequence: 2,
      approvers: '',
    },
  ]);

  useEffect(() => {
    rest.setValue(rest.name, items);
  }, [items]);

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      setItems((prevItems) =>
        update(prevItems, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevItems[dragIndex]],
          ],
        })
      );

      //set the sequence now, need to find how to update
      //in above sorting itself
      setItems((current) =>
        current.map((obj, index) => ({ ...obj, sequence: index + 1 }))
      );
    },
    [items]
  );
  const renderItem = useCallback(
    (item, index) => {
      return (
        <AppItem
          key={item.id}
          index={index}
          id={item.id}
          item={item}
          setItems={setItems}
          items={items}
          options={options}
          moveItem={moveItem}
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
      {items.map((item, i) => renderItem(item, i))}
      <AppButton
        onClick={() =>
          setItems([
            ...items,
            {
              id: items.length + 1,
              sequence: items.length + 1,
              approvers: '',
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
}
