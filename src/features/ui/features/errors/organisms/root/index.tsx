import { FC } from 'react';
import { FormHelperText } from '@mui/material';

interface IProps {
  errors: string[];
}

export const FormErrors: FC<IProps> = ({ errors }) => {
  return (
    <FormHelperText error variant="filled">
      {errors.filter((error) => error).join(', ')}
    </FormHelperText>
  );
};
