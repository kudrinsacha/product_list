import { memo } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const styles = {
  '& input': { color: 'white' },
  '& textarea': { color: 'white' },
  '& label': { color: 'rgb(156 163 175 / var(--tw-text-opacity))' },
  '& .MuiOutlinedInput-root:hover': { '& > fieldset': { borderColor: 'rgb(59 130 246 / var(--tw-border-opacity));' } },
};

const MyTextField = memo(({ ...attributes }: TextFieldProps) => {
  return <TextField sx={styles} {...attributes} />;
});

export default MyTextField;
