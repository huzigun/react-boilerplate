import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import routes from './route';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          {routes.map((el, index) => (
            <Route key={`${el.index}-${el.path}`} path={el.path} component={el.component} />
          ))}
        </Switch>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
