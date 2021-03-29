import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from './components/HomePage';

// Lazy loaded sub-applications
const Product = React.lazy(() => import('product/App'));
const Shopping = React.lazy(() => import('shopping/App'));
const Blog = React.lazy(() => import('blog/App'));
const Settings = React.lazy(() => import('settings/App'));

const Routes = ({ store, count }) => {
  const user = useSelector((state) => state?.user);

  return (
    <>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/product/'>
        <Product key={count} />
      </Route>
      <Route path='/blog/'>
        <Blog />
      </Route>
      {user?.isConnected && (
        <>
          <Route path='/settings/'>
            <Settings store={store} />
          </Route>
          <Route path='/shopping/'>
            <Shopping />
          </Route>
        </>
      )}
    </>
  );
};

export default Routes;
