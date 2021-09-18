import { ReactNode, FC } from 'react';
import {
  Autocomplete,
  Paper,
  StandardTextFieldProps,
  Theme,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { HighlightOff as HighlightOffIcon } from '@material-ui/icons';
import { Input } from '../../../input';

interface IProps extends Omit<StandardTextFieldProps, 'label'> {
  data: Array<{ id: number; label: string }>;
  label?: string;
  Icon?: ReactNode;
}

export const Dropdown: FC<IProps> = ({ data, ...props }) => {
  const classes = useStyles();

  const CustomPaper = (props: any) => {
    return (
      <Paper sx={{ borderRadius: '30px', marginTop: '0.2rem' }} {...props} />
    );
  };

  return (
    <>
      <Autocomplete
        fullWidth
        disablePortal
        clearIcon={<HighlightOffIcon className={classes.clear} />}
        selectOnFocus
        options={data}
        PaperComponent={CustomPaper}
        renderInput={(params) => <Input {...params} {...props} />}
      />
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  dropdown: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  options: {
    borderRadius: '130px',
  },
  search: {
    color: theme.palette.primary.main,
  },
  clear: {
    color: theme.palette.info.main,
  },
}));
