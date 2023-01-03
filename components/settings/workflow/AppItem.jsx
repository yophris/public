import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import AppDropdown from '../../fields/AppDropdown';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Image from 'next/image';
import AppButton from 'components/AppButton';

const style = {
  cursor: 'move',
};

export const ItemTypes = {
  CARD: 'card',
};

export const AppItem = ({ id, item, options, index, moveCard, ...rest }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      console.log('item monitor', item, monitor);
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      <Stack
        direction="row"
        sx={{
          width: '100%',
          px: 1.2,
          py: 1,
          my: 1,
          border: '1px solid #efefef',
          borderRadius: '5px',
        }}
        alignItems="center"
        spacing={2}
      >
        <DragIndicatorIcon sx={{ fontSize: '2rem', color: '#333' }} />
        <Typography variant="h3_bold_secondary" component="h3" mb={1}>
          {item.sequence}
        </Typography>
        <AppDropdown hideLabel={true} {...rest} options={options} />
        <IconButton>
          <Image
            src="/images/trashIcon.svg"
            width={14}
            height={14}
            alt="checked"
          />
        </IconButton>
      </Stack>
    </div>
  );
};
