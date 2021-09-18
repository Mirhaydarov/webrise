import { FormEvent } from 'react';
import { useForm } from 'effector-forms';
import cn from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Grid, Theme } from '@mui/material';
import { FileInput } from '../../../../../ui';
import * as Fields from '../fields';
import { form, onCancel } from '../../store';

export const Form = () => {
  const classes = useStyles();
  const { submit, eachValid } = useForm(form);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  const FileInputDesc = () => (
    <span>
      Загрузить файлы или&nbsp;
      <span className={classes.fileInputDesc}>открыть проводник</span>
    </span>
  );

  return (
    <div>
      <h1 className={classes.title}>Образование</h1>

      <form className={classes.wrap} onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Fields.EducationSelect />
          </Grid>

          <Grid item xs={6}>
            <Fields.EndingInput />
          </Grid>

          <Grid item xs={12}>
            <Fields.UniversitySelect />
          </Grid>

          <Grid item xs={6}>
            <Fields.DiplomaSeriesInput />
          </Grid>

          <Grid item xs={6}>
            <Fields.DiplomaNumberInput />
          </Grid>

          <Grid item xs={12}>
            <Fields.SpecialityInput />
          </Grid>

          <Grid item xs={12}>
            <Fields.QualificationInput />
          </Grid>

          <Grid item xs={12}>
            <Fields.NostrificationCheckbox />
          </Grid>

          <Grid item xs={12}>
            <FileInput desc={<FileInputDesc />} />
          </Grid>

          <div className={classes.innerWrap}>
            <div>
              <button
                className={cn(classes.button, classes.submit)}
                disabled={!eachValid}
                type="submit"
              >
                Сохранить
              </button>
              <p className={classes.asteriskDesc}>
                <span className={classes.asteriskRequired}>*</span>Поля обязательные для заполнения
              </p>
            </div>

            <div>
              <button
                className={classes.button}
                type="button"
                onClick={onCancel}
              >
                Отмена
              </button>
              <p className={classes.asteriskDesc}>
                <span className={classes.asteriskPublic}>*</span>Поля видны для всех пользователей
              </p>
            </div>
          </div>
        </Grid>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    width: '45vw',
    marginTop: '2.25rem',
    marginRight: '2rem',
    display: 'grid',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 500,
    color: '#271919',
  },
  innerWrap: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: '0 1rem',
  },
  button: {
    fontWeight: 500,
    width: '18vw',
    backgroundColor: 'unset',
    fontSize: '0.8rem',
    color: theme.palette.info.dark,
    padding: '1rem 4rem',
    outline: 'none',
    border: `1px solid ${theme.palette.info.light}`,
    cursor: 'pointer',
    borderRadius: '1.2rem',
    '&:disabled': {
      backgroundColor: theme.palette.info.dark,
      color: '#ffffff',
      cursor: 'not-allowed',
    },
  },
  submit: {
    backgroundColor: theme.palette.primary.main,
    border: '1px solid transparent',
    color: '#ffffff',
  },
  fileInputDesc: {
    color: '#000000',
  },
  asteriskDesc: {
    marginTop: '0.5rem',
    fontSize: '0.7rem',
    color: theme.palette.info.light
  },
  asteriskRequired: {
    color: theme.palette.primary.main,
    marginRight: '0.3rem'
  },
  asteriskPublic: {
    color: '#E78E24',
    marginRight: '0.3rem'
  }
}));
