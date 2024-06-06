import { InputHTMLAttributes, memo } from 'react';

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const MyUploadInput = memo(({ ...inputAttributes }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
      Upload file
      <input className="clip" type="file" {...inputAttributes} />
    </Button>
  );
});

export default MyUploadInput;
