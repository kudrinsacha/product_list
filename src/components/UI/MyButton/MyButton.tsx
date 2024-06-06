import { memo } from 'react';
import { Button, ButtonProps } from '@mui/material';

const MyButton = memo(({ children, ...attributes }: ButtonProps) => {
  return <Button {...attributes}>{children}</Button>;
});

export default MyButton;
