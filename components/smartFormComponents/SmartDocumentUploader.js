// ** React Imports
import { useState, useEffect } from 'react';

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

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4),
  },
}));

const SmartDocumentUploader = ({ field }) => {
  console.log("🚀 ~ file: SmartDocumentUploader.js:38 ~ SmartDocumentUploader ~ field", field)
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  // ** State
  const [files, setFiles] = useState([]);

  // ** Hook
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: {
      //   'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
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
  const img = files.map((file) => (
    <Image
      width={20}
      height={20}
      key={file.name}
      alt={file.name}
      className="single-file-image"
      src={URL.createObjectURL(file)}
    />
  ));

  useEffect(() => {
    setValue(field?.id, files);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  return (
    <>
      <Controller
        name={field?.id}
        control={control}
        rules={{ ...fieldValidationRules(field?.validations) }}
        render={({ field: { onChange, value, ref } }) => (
          <Box
            {...getRootProps({ className: 'dropzone' })}
            border={'1px solid black'}
            sx={acceptedFiles.length ? { height: 450 } : {}}
          >
            <input {...getInputProps()} />
            <Box
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
            </Box>
            {files.length ? img : null}
          </Box>
        )}
      />
    </>
  );
};

export default SmartDocumentUploader;
