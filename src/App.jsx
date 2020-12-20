import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { store } from 'store';
import history from './routes/history';
import MainLayout from './pages/layout/Main';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Switch>
          <MainLayout />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default hot(App);
