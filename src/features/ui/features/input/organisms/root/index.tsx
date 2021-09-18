import { ReactNode, FC, FocusEvent, useMemo } from 'react';
import {
  TextField,
  Theme,
  StandardTextFieldProps,
  FilledInputProps,
} from '@mui/material';
import cn from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { onBlur, onFocus } from '../../store';
import { Asterisk } from '../asterisk';

interface IProps
  extends Omit<
    StandardTextFieldProps,
    'label' | 'className' | 'variant' | 'InputProps'
  > {
  label?: string;
  className?: string;
  error?: boolean;
  InputProps?: Partial<FilledInputProps>;
  Icon?: ReactNode
}

export const Input: FC<IProps> = ({
  className,
  error,
  onFocusCapture,
  onBlurCapture,
  required,
  InputProps,
  Icon,
  label,
  ...props
}) => {
  const classes = useStyles();

  const onFocusCaptureHandler = (e: FocusEvent<HTMLDivElement>) => {
    if (onFocusCapture) {
      return onFocusCapture(e);
    }

    return onFocus(e);
  };

  const onBlurCaptureHandler = (e: FocusEvent<HTMLDivElement>) => {
    if (onBlurCapture) {
      return onBlurCapture(e);
    }

    return onBlur(e);
  };

  const InputClassName = useMemo(
    () => cn(classes.root, error ? classes.error : '', className),
    [classes, className, error]
  );

  return (
    <>
      <TextField
        {...props}
        fullWidth
        className={InputClassName}
        label={required ? <Asterisk label={label} /> : label}
        variant="filled"
        onFocusCapture={onFocusCaptureHandler}
        onBlurCapture={onBlurCaptureHandler}
        InputProps={{
          ...InputProps,
          disableUnderline: true,
          startAdornment: Icon ? Icon : null
        }}
      />
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'unset',
      borderRadius: '1.2rem',
      padding: '0 1rem',
      boxShadow: `0 0 0 1px ${theme.palette.info.main},
        0 0 0 1px transparent
      `,

      '&:hover': {
        backgroundColor: 'unset',
        boxShadow: `0 0 0 1px ${theme.palette.primary.main},
          0 0 0 1px transparent
      `,
      },
      '&.Mui-focused': {
        backgroundColor: 'unset',
        boxShadow: `0 0 0 2px ${theme.palette.primary.main}
      `,
      },
    },
  },
  error: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgba(215, 44, 51, 0.07)',
      color: theme.palette.primary.main,

      '&:focus, &:hover': {
        backgroundColor: 'unset',
        color: 'unset',
      },
    },
  },
}));
