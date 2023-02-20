// ** React Imports
import { useState, useEffect, useMemo } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// ** Third Party Imports
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { Controller, useFormContext } from 'react-hook-form';
import { fieldValidationRules } from 'Utils/SmartFieldValidation';
import FileUploadList from '../fields/AppFileUpload/FileUploadList';
import { Stack } from '@mui/material';
import SmartUploadedList from './SmartUploadedList';

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(15.75),
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    width: 160,
  },
}));

const style = {
  height: '155px',
  border: '2px dashed #BDCEDD',
  background: '#FAFAFA',
  borderRadius: '8px',
  // background: "url('/images/borderDashed.svg') no-repeat",
  // backgroundSize: 'contain',
};

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4),
  },
}));

const SmartDocumentUploader = ({ field }) => {
  const {
    control,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext();
  // ** State
  const [files, setFiles] = useState([]);
  const [existingFiles, setExistingFiles] = useState([]);

  // ** Hook
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: {
      //   'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
    },
    onDrop: (acceptedFiles) => {
      console.log('accepted files, ', acceptedFiles);
      setFiles(acceptedFiles.map((file) => file));
    },
  });

  const handleLinkClick = (event) => {
    event.preventDefault();
  };
  const iconSrcs = [
    '/images/pdfIcon.svg',
    '/images/jpgIcon.svg',
    '/images/docIcon.svg',
    '/images/xlsIcon.svg',
  ];
  // const img = files.map((file) => (
  //   <Image
  //     width={20}
  //     height={20}
  //     key={file.name}
  //     alt={file.name}
  //     className="single-file-image"
  //     src={URL.createObjectURL(file)}
  //   />
  // ));

  useEffect(() => {
    setValue(field?.id, files);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const exFile = watch(field.id);
  useEffect(
    (_) => {
      if (exFile) {
        setExistingFiles(
          exFile.map((e, i) => ({
            ...e,
            index: i,
          }))
        );
      }
    },
    [exFile]
  );
  console.log('files');
  //Logic has to be implemented
  // const fileList = useMemo(
  //   () => [...(existingFiles || []), ...files],
  //   [existingFiles, files]
  // );

  const remove = (item, idx) => {
    console.log('remove', item);
    if ('index' in item) {
      const dup = [...exFile];
      dup.splice(item.index, 1);
      setFiles(dup);
    } else {
      const dup = [...exFile];
      dup.splice(idx, 1);
      setFiles(dup);
    }
  };

  return (
    <>
      {exFile?.length ? (
        exFile.map((item, index) => (
          <>
            {/* <input
            key={item.id} // important to include key with field's id
            {...register(`${name}.${index}`)}
            hidden
          /> */}

            <Controller
              // key={index}
              render={() => (
                <SmartUploadedList
                  file={item}
                  handleRemove={() => remove(item, index)}
                  isLast={index === files.length - 1}
                />
              )}
              name={`${name}`}
              control={control}
            />
          </>
        ))
      ) : (
        <Controller
          name={field?.id}
          control={control}
          rules={{ ...fieldValidationRules(field?.validations) }}
          render={({ field: { onChange, value, ref } }) => (
            <Box
              {...getRootProps({ className: 'dropzone' })}
              // sx={{
              //   background: '#FAFAFA',
              //   border: '2px dashed #BDCEDD',
              //   borderRadius: '8px',
              //   height: '155px',
              // }}
            >
              <input {...getInputProps()} />
              <Stack
                // onClick={() => {inputRef?.current?.click()}}
                // ref={localProgess == 0 ? drop : null}
                style={{
                  ...style,
                  // background: isOver
                  //   ? 'lightgreen'
                  //   : fileError
                  //   ? 'orange'
                  //   : style.background,
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
                  <Typography variant="body_medium_secondary" component="p">
                    Drag & Drop your document here, or{' '}
                    <Typography variant="body_bold_primary" component="span">
                      Browse
                    </Typography>
                  </Typography>
                  {/* {isActive ? (
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
                        <Typography
                          variant="body_bold_primary"
                          component="span"
                        >
                          Browse
                        </Typography>
                      </>
                    )}
                  </Typography>
                )} */}
                </Box>
                <Typography variant="smallcopy_regular_muted" component="p">
                  Upload .pdf, .doc, .xls, .jpg & etc
                  {/* {!fileError && 'Upload .pdf, .doc, .xls, .jpg & etc'} */}
                </Typography>
              </Stack>
              {/* <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'column', 'row'],
                alignItems: 'center',
              }}
            >
              <Img alt="Upload img" src="/images/pdfIcon.svg" />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: ['center', 'center', 'inherit'],
                }}
              >
                <HeadingTypography variant="h5">
                  Drop files here or click to upload.
                </HeadingTypography>
                <Typography color="textSecondary">
                  Drop files here or click{' '}
                  <Link href="/" onClick={handleLinkClick}>
                    browse
                  </Link>{' '}
                  thorough your machine
                </Typography>
              </Box>
            </Box> */}
              {/* {files.length ? img : null} */}
            </Box>
          )}
        />
      )}
    </>
  );
};

export default SmartDocumentUploader;
