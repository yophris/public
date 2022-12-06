import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { Controller, useFieldArray } from 'react-hook-form';
import FileUploadList from './FileUploadList';
import { useMutation, useQueries, useQuery } from 'react-query';
import apiClient from 'requests';
import useFileUploadStore from 'store/useFileUploadStore';
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
  const {
    label,
    limit,
    type,
    bucket,
    register,
    name,
    error,
    isRequired,
    control,
  } = props;

  const [fileError, setError] = useState(null);
  const [localProgess, setlocalProgess] = useState(0);

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
        return true;
      },
      hover(item) {
        setError(null);
      },
      collect: (monitor) => {
        const item = monitor.getItem();
        // setError(null);
        if (item) {
          console.log('Drag: collect', item.files, item.items);
        }
        return {
          isOver: monitor.isOver({ shallow: true }),
          canDrop: monitor.canDrop(),
          // allow:monitor.
        };
      },
    }),
    [props.name]
  );

  const onDrop = async (item) => {
    console.log('dropped', item);

    if (item.files.length > limit) {
      setError('Only ' + limit + ' files allowed');
      setTimeout(
        (_) => {
          setError(null);
        },
        [2000]
      );
      return;
    }

    if (item.files.some((e) => !type.includes(e.type))) {
      setError('File not allowed');
      setTimeout(
        (_) => {
          setError(null);
        },
        [2000]
      );
      return;
    }

    append(item.files);
  };

  useEffect(
    (_) => {
      console.log(fields);
    },
    [fields]
  );

  const handleChange = ({ target }) => {
    const { files } = target;
    console.log('files', files);
    append([files[0]]);
  };
  const inputRef = useRef();
  const isActive = canDrop && isOver;
  return (
    <>
      <input
        ref={inputRef}
        onChange={handleChange}
        type="file"
        hidden
        multiple={limit > 1 ? true : false}
        accept={type}
      />
      <Stack
        onClick={() => inputRef?.current?.click()}
        ref={localProgess == 0 ? drop : null}
        style={{
          ...style,
          background: isOver
            ? 'lightgreen'
            : fileError
            ? 'orange'
            : style.background,
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={2}>
          {iconSrcs &&
            iconSrcs.map((src) => (
              <Image
                key={src}
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
              {fileError ? (
                fileError
              ) : (
                <>
                  Drag & Drop your document here, or{' '}
                  <Typography variant="body_bold_primary" component="span">
                    Browse
                  </Typography>
                </>
              )}
            </Typography>
          )}
        </Box>
        <Typography variant="smallcopy_regular_muted" component="p">
          {!fileError && 'Upload .pdf, .doc, .xls, .jpg & etc'}
        </Typography>
      </Stack>
      {fields.map((item, index) => (
        <>
          <input
            key={item.id} // important to include key with field's id
            {...register(`${name}.${index}`)}
            hidden
          />
          <Controller
            key={index}
            render={({ field: { value } }) => (
              <FileUploadList
                file={value[index].name}
                handleRemove={() => remove(index)}
                isLast={index === fields.length - 1}
              />
            )}
            name={`${name}`}
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
