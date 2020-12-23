import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainLayout from './pages/layout/Main';

function App() {
  return (
    <BrowserRouter history={createBrowserHistory()}>
      <Switch>
        <MainLayout />
      </Switch>
    </BrowserRouter>
  );
}

export default hot(App);
