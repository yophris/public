import React from 'react';
import useFileUploadStore from 'store/useFileUploadStore';

export default function FileUploadStatus() {
  const progress = (state) => state?.progress;
  return <div>{progress}</div>;
}
