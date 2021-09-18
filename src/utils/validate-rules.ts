import { Rule } from 'effector-forms';

export const rules = {
  required: (title: string): Rule<string> => ({
    name: "minLength",
    validator: (value) => value.length !== 0,
    errorText: `${title} обязательно для заполнения`,
  }),
  checkboxRequired: (title: string): Rule<boolean> => ({
    name: "minLength",
    validator: (value) => value,
    errorText: `${title} обязательно для заполнения`,
  }),
  minLength: (min: number): Rule<string> => ({
    name: "minLength",
    validator: (value) => value.length >= min,
    errorText: `Длина не может быть меньше ${min}`,
  }),
  maxLength: (max: number): Rule<string> => ({
    name: "maxLength",
    validator: (value) => value.length <= max,
    errorText: `Длина не может быть больше ${max}`,
  }),
};
