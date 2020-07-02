import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import routes from './route';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import './assets/css/grobal.css';
import 'antd/dist/antd.min.css';
import LoginPage from './pages/login';

function App() {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Helmet>
        <html lang="ko" />
        <title>Adminator</title>
        <meta name="description" content="React project boilerplate" />
      </Helmet>
      {me === null ? (
        <LoginPage />
      ) : (
        <AppLayout>
          <Switch>
            {routes.map((el, index) => (
              <Route
                exact={el.exact === true}
                path={el.path}
                name={el.name}
                component={el.component}
                key={`${el.index}-${el.path}`}
              />
            ))}
          </Switch>
        </AppLayout>
      )}
    </>
  );
}

export default App;
