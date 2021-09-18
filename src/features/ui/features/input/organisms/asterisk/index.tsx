import { FC } from 'react';
import { useStore } from 'effector-react';
import { Theme } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { $inputFocus } from '../../store';

interface IProps {
  label?: string;
  asteriskColor?: string;
}

export const Asterisk: FC<IProps> = ({ asteriskColor, label }: IProps) => {
  const classes = useStyles();
  const isFocused = useStore($inputFocus);

  return (
    <div className={classes.wrap}>
      {isFocused ? (
        <p className={classes.focusedLabel}>
          {label}
          <span className={classes.asterisk}>*</span>
        </p>
      ) : (
        <p>
          <span className={classes.asterisk}>*</span>
          {label}
        </p>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    color: '#B2B2B2',
    padding: '0 1.4rem',
    width: '100%'
  },
  asterisk: {
    color: theme.palette.secondary.main,
  },
  focusedLabel: {
    fontSize: '0.8rem'
  },
}));
