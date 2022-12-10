import React from 'react';
import useFileUploadStore from 'store/useFileUploadStore';

export default function FileUploadStatus() {
  return <div>{false ? 'Loading...' : ''}</div>;

  //getting error due to this. Please check this @Abdullah
  // const progress = (state) => state?.progress;
  // return <div>{progress}</div>
}
