import { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spinner } from '../features/ui';
import { Book } from './book';

const Registration = lazy(() => import('../features/registration'));
const Error404Page = lazy(() => import('../features/ui/features/error404'));

export const Routes: FC = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact component={Registration} path={Book.root} />

        <Route component={Error404Page} path="*" />
      </Switch>
    </Suspense>
  </Router>
);
