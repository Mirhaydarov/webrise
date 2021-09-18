import { ChangeEvent, FC } from 'react';
import { useField } from 'effector-forms/dist';
import { Input } from '../../../../../../ui';
import { form } from '../../../store';

export const SpecialityInput: FC = () => {
  const { value, onChange } = useField(form.fields.Speciality);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Input
      required
      value={value}
      onChange={onChangeHandler}
      label="Специальность по диплому"
    />
  );
};
