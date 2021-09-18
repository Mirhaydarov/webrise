import { restore, forward, guard } from 'effector';
import { createForm } from 'effector-forms';
import { IEducation } from '../../../../../types';
import { rules } from '../../../../../utils';
import { resultToggler, onCancel } from './events'

const form = createForm({
  fields: {
    DiplomaNumber: {
      init: '' as IEducation['DiplomaNumber']
    },
    DiplomaSeries: {
      init: '' as IEducation['DiplomaSeries'],
      rules: [rules.minLength(6)],
    },
    Education: {
      init: '' as IEducation['Education'],
      rules: [rules.required('Уровень образования')]
    },
    YearOfEnding: {
      init: '' as IEducation['YearOfEnding'],
      rules: [rules.minLength(4)],
    },
    Qualification: {
      init: '' as IEducation['Qualification'],
      rules: [rules.required('Квалификация по диплому')]
    },
    Speciality: {
      init: '' as IEducation['Speciality'],
    },
    University: {
      init: '' as IEducation['University']
    },
    Nostrification: {
      init: false as IEducation['Nostrification'],
      rules: [rules.checkboxRequired('Нострификация')],
    }
  },
  validateOn: ['submit'],
});

const $isResultVisible = restore(resultToggler, false)
  .reset(form.reset)

guard({
  source: form.submit,
  filter: form.$isValid,
  target: resultToggler.prepend(() => true)
})

forward({
  from: onCancel,
  to: form.reset
})

export { form, $isResultVisible, onCancel };
