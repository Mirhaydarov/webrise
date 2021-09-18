import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../../../../../../routes/book';
import classes from './style.module.css';

export const Error404Page: FC = () => {
  return (
    <div className={classes.wrap}>
      <h1>Страница не найдена</h1>

      <br />

      <Link to={Book.root}>Вернуться назад</Link>
    </div>
  );
};
