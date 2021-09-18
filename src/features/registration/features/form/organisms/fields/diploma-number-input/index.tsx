import { ChangeEvent, FC } from 'react';
import { useField, useForm } from 'effector-forms/dist';
import { Input, FormErrors } from '../../../../../../ui';
import { form } from '../../../store';

export const DiplomaNumberInput: FC = () => {
  const { value, onChange } = useField(form.fields.DiplomaNumber);
  const { hasError, errorText } = useForm(form);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 7) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <Input
        error={hasError('DiplomaNumber')}
        value={value}
        onChange={onChangeHandler}
        label="Номер диплома"
      />
      <FormErrors errors={[errorText('DiplomaNumber')]} />
    </>
  );
};
