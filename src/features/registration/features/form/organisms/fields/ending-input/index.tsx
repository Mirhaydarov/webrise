import { ChangeEvent, FC } from 'react';
import { useField, useForm } from 'effector-forms/dist';
import { Input, FormErrors } from '../../../../../../ui';
import { form } from '../../../store';

export const EndingInput: FC = () => {
  const { value, onChange } = useField(form.fields.YearOfEnding);
  const { hasError, errorText } = useForm(form);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <Input
        required
        error={hasError('YearOfEnding')}
        value={value}
        onChange={onChangeHandler}
        label="Год окончания"
      />
      <FormErrors errors={[errorText('YearOfEnding')]} />
    </>
  );
};
