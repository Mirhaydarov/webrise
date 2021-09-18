import { ChangeEvent, FC, FormEvent } from 'react';
import { Theme } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { Search as SearchIcon } from '@material-ui/icons';
import { useField } from 'effector-forms/dist';
import { Dropdown } from '../../../../../../ui';
import { form } from '../../../store';
import { universities } from './db.json';

export const UniversitySelect: FC = () => {
  const classes = useStyles();
  const { value, onChange } = useField(form.fields.University);

  const onSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onResetHandler = (e: FormEvent<HTMLDivElement>) => {
    console.log('e')
  }
  


  return (
    <Dropdown
      required
      data={universities}
      value={value}
      onReset={onResetHandler}
      label="Введите для выбора ВУЗа"
      Icon={<SearchIcon className={classes.search} />}
      onSelect={onSelectHandler}
    />
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    color: theme.palette.primary.main,
  },
}));
