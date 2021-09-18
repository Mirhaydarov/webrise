import { FC } from 'react';
import { useStore } from 'effector-react';
import { useForm } from 'effector-forms/dist';
import cn from 'classnames';
import { Grid, Theme, FormControlLabel, Checkbox } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import {
  $isResultVisible,
  form,
} from '../../../registration/features/form/store';
import { FileInput } from '../../../ui';

export const Result: FC = () => {
  const classes = useStyles();
  const isResultVisible = useStore($isResultVisible);
  const { values } = useForm(form);
  const {
    Education,
    YearOfEnding,
    University,
    DiplomaNumber,
    DiplomaSeries,
    Speciality,
    Qualification,
    Nostrification,
  } = values;

  const Card = ({
    title,
    desc,
  }: {
    title: string;
    desc?: string | number | boolean;
  }) => {
    return (
      <div className={classes.card}>
        <h2 className={classes.cardTitle}>{title}</h2>
        {desc ? <p>{desc}</p> : ''}
      </div>
    );
  };

  return (
    <div className={cn(classes.displayNone, isResultVisible ? classes.visible : '')}>
      <h1 className={classes.title}>Образование</h1>

      <div className={classes.wrap}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card title="Уровень образования" desc={Education} />
          </Grid>

          <Grid item xs={6}>
            <Card title="Год окончания" desc={YearOfEnding} />
          </Grid>

          <Grid item xs={12}>
            <Card title="Год окончания" desc={University} />
          </Grid>

          <Grid item xs={6}>
            <Card title="Серия диплома" desc={DiplomaSeries} />
          </Grid>

          <Grid item xs={6}>
            <Card title="Номер диплома" desc={DiplomaNumber} />
          </Grid>

          <Grid item xs={12}>
            <Card title="Специальность по диплому" desc={Speciality} />
          </Grid>

          <Grid item xs={12}>
            <Card title="Квалификация по диплому" desc={Qualification} />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              label="Нострификация"
              control={<Checkbox checked={Nostrification} />}
            />
          </Grid>

          <Grid item xs={12}>
            <FileInput desc="Скачать документ" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    marginTop: '2.25rem',
    width: '45vw',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 500,
    color: '#271919',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: '0.8rem',
    fontWeight: 400,
    color: theme.palette.info.light,
  },
  displayNone: {
    display: 'none',
  },
  visible: {
    display: 'block',
  },
}));
