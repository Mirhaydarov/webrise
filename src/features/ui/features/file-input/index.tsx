import { ReactNode, FC } from 'react';
import { Theme } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

interface IProps {
  desc: string | ReactNode
}

export const FileInput: FC<IProps> = ({ desc }) => {
  const classes = useStyles();

  return (
    <>
      <input style={{ display: 'none' }} id="button-file" type="file" />

      <label htmlFor="button-file">
        <span role="button" className={classes.button}>
          <span className={classes.buttonTitle}>Документ:&nbsp;</span>
          { desc }
        </span>
      </label>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    display: 'inline-block',
    cursor: 'pointer',
    padding: '0.8rem',
    marginBottom: '1rem',
    width: '100%',
    color: theme.palette.info.light,
    backgroundColor: 'unset',
    border: '1px dashed black',
    borderRadius: '1.2rem',
    textAlign: 'center',
  },
  buttonTitle: {
    color: theme.palette.primary.main,
  }
}));
