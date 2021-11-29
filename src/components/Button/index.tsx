import React from 'react';
import Button from '@material-ui/core/Button';
import type { TButtonProps } from './types';

const MyButton = React.memo(({
  children,
  ...props
}: TButtonProps) => (
  <Button
    color="primary"
    variant="contained"
    {...props}
  >
    {children}
  </Button>
));

export default MyButton;
