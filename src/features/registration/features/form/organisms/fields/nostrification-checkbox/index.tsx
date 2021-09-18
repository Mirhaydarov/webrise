import { ChangeEvent } from 'react';
import { useForm, useField } from 'effector-forms/dist';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FormErrors } from '../../../../../../ui';
import { form } from '../../../store';

export const NostrificationCheckbox = () => {
  const { value, onChange } = useField(form.fields.Nostrification);
  const { errorText } = useForm(form);

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.checked);
  };

  return (
    <>
      <FormControlLabel
        label="Нострификация"
        control={<Checkbox checked={value} onChange={onChangeHandler} />}
      />
      <FormErrors errors={[errorText('Nostrification')]} />
    </>
  );
};
