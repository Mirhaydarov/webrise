import { ChangeEvent, FC } from 'react';
import { useField, useForm } from 'effector-forms/dist';
import { Input, FormErrors } from '../../../../../../ui';
import { form } from '../../../store';

export const QualificationInput: FC = () => {
  const { value, onChange } = useField(form.fields.Qualification);
  const { hasError, errorText } = useForm(form);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <Input
        required
        error={hasError('Qualification')}
        value={value}
        onChange={onChangeHandler}
        label="Квалификация по диплому"
      />

      <FormErrors errors={[errorText('Qualification')]} />
    </>
  );
};
