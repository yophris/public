import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import AppProgressBar from 'components/AppProgressBar';
import { useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { render } from 'react-dom';
import { Controller, useFieldArray } from 'react-hook-form';
import { useMutation, useQueries, useQuery } from 'react-query';
import apiClient from 'requests';
import useFileUploadStore from 'store/useFileUploadStore';
const style = {
  boxSizing: 'border-box',
  height: '155px',
  background: '#FAFAFA',
  border: '1px dashed #BDCEDD',
  borderRadius: '8px',
};

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

  // let uploader = useMutation(
  //   (data) =>
  //     apiClient({
  //       path: '/app/file-manager/' + bucket,
  //       method: 'post',
  //       data: data,
  //       uploadProgessCB: setlocalProgess,
  //     }),
  //   {
  //     onSuccess: ({ data }) => {
  //       setlocalProgess(0);
  //       console.log(data);
  //       let key = data.key;
  //       append({ id: key, file: key, name: data.originalname });
  //       // append()
  //     },
  //     onError: (error) => {
  //       setError('Error Uploading File');
  //       setTimeout(
  //         (_) => {
  //           setError(null);
  //         },
  //         [2000]
  //       );
  //       // append()
  //     },
  //   }
  // );
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
      <div
        onClick={() => inputRef.current.click()}
        ref={localProgess == 0 ? drop : null}
        style={{
          ...style,
          background: isOver
            ? 'lightgreen'
            : fileError
            ? 'orange'
            : style.background,
        }}
      >
        {/* {(error) => {
          return;
        }} */}
        {localProgess ? (
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <AppProgressBar total={100} consumed={localProgess} light={false} />
          </div>
        ) : isActive ? (
          <Stack
            sx={{ height: '100%', textAlign: 'center' }}
            justifyContent="space-around"
          >
            <Typography variant="body_bold_primary" component="p">
              'Release to drop'
            </Typography>
          </Stack>
        ) : (
          <Stack
            sx={{ height: '100%', textAlign: 'center' }}
            justifyContent="space-around"
          >
            <Typography variant="body_bold_primary" component="a">
              {fileError ? fileError : 'Drag Here / Click'}
            </Typography>
          </Stack>
        )}
      </div>

      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input
              key={item.id}
              type="file" // important to include key with field's id
              {...register(`${name}.${index}`)}
              hidden
            />
            <Controller
              render={({ field: { value } }) => {
                return (
                  <>
                    <p>{value[index].name}</p>
                  </>
                );
              }}
              name={`${name}`}
              control={control}
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* 
      <button type="button" onClick={() => append(['a', 'b'])}>
        append
      </button> */}
    </>
  );
}
