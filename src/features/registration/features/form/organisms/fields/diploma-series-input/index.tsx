import { ChangeEvent, FC } from 'react';
import { useField, useForm } from 'effector-forms/dist';
import { Input, FormErrors } from '../../../../../../ui';
import { form } from '../../../store';

export const DiplomaSeriesInput: FC = () => {
  const { value, onChange } = useField(form.fields.DiplomaSeries);
  const { hasError, errorText } = useForm(form);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 6) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <Input
        required
        error={hasError('DiplomaSeries')}
        value={value}
        onChange={onChangeHandler}
        label="Серия диплома"
      />
      <FormErrors errors={[errorText('DiplomaSeries')]} />
    </>
  );
};
