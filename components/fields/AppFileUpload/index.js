import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { Controller, useFieldArray } from 'react-hook-form';
import FileUploadList from './FileUploadList';
const style = {
  height: '155px',
  border: '2px dashed #BDCEDD',
  background: '#FAFAFA',
  borderRadius: '8px',
  // background: "url('/images/borderDashed.svg') no-repeat",
  // backgroundSize: 'contain',
};

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => {
      console.log('FILE UPLOAD:', error);
      reject(error);
    };
  });

const iconSrcs = [
  '/images/pdfIcon.svg',
  '/images/jpgIcon.svg',
  '/images/docIcon.svg',
  '/images/xlsIcon.svg',
];

export default function AppFileUpload(props) {
  const { label, register, name, error, isRequired, control } = props;

  const onDrop = async (item) => {
    console.log('dropped', item);

    for (let index = 0; index < item.files.length; index++) {
      const element = item.files[index];
      // const base64 = await toBase64(element);
      // if (base64) {
      append({ name: element.name, data: element });
      // }
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item) {
        if (onDrop) {
          onDrop(item);
        }
      },
      canDrop(item) {
        console.log('canDrop', item.files, item.items);
        return true;
      },
      hover(item) {
        console.log('hover', item.files, item.items);
      },
      collect: (monitor) => {
        const item = monitor.getItem();
        if (item) {
          console.log('collect', item.files, item.items);
        }
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [props]
  );

  useEffect(
    (_) => {
      console.log(fields);
    },
    [fields]
  );
  const isActive = canDrop && isOver;
  return (
    <>
      <Stack
        ref={drop}
        style={style}
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={2}>
          {iconSrcs &&
            iconSrcs.map((src) => (
              <Image
                src={src}
                alt="Vercel Logo"
                width={40}
                height={40}
                style={{ opacity: 0.7 }}
              />
            ))}
        </Box>
        <Box>
          {isActive ? (
            <Typography variant="body_medium_secondary" component="p">
              Release to drop
            </Typography>
          ) : (
            <Typography variant="body_medium_secondary" component="p">
              Drag & Drop your document here, or{' '}
              <Typography variant="body_bold_primary" component="span">
                Browse
              </Typography>
            </Typography>
          )}
        </Box>
        <Typography variant="smallcopy_regular_muted" component="p">
          Upload .pdf, .doc, .xls, .jpg & etc
        </Typography>
      </Stack>
      {fields.map((item, index) => (
        <>
          <input
            key={item.id} // important to include key with field's id
            {...register(`${name}.${index}.file`)}
            hidden
          />
          <Controller
            render={({ field: { value } }) => (
              <FileUploadList
                file={value}
                handleRemove={() => remove(index)}
                isLast={index === fields.length - 1}
              />
            )}
            name={`${name}.${index}.name`}
            control={control}
          />
        </>
      ))}

      {/* <button type="button" onClick={() => append(['a', 'b'])}>
        append
      </button> */}
    </>
  );
}
