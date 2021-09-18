import { ChangeEvent, FC } from 'react';
import { useField, useForm } from 'effector-forms/dist';
import { Dropdown, FormErrors } from '../../../../../../ui';
import { form } from '../../../store';
import { educationsLevel } from './db.json';

export const EducationSelect: FC = () => {
  const { value, onChange } = useField(form.fields.Education);
  const { hasError, errorText } = useForm(form);

  const onSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <Dropdown
        required
        data={educationsLevel}
        error={hasError('Education')}
        value={value}
        label="Уровень образования"
        onSelect={onSelectHandler}
      />

      <FormErrors errors={[errorText('Education')]} />
    </>
  );
};
