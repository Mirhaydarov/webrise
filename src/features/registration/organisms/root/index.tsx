import { FC } from 'react';
import { Theme } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { Form } from '../../features';
import { Result } from '../../../result'

export const Registration: FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Form />
      <Result />
    </main>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
