import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import 'babel-polyfill';

import configureStore from 'config/store';
import Client from 'views/bootstrap/client';

import es6Promise from 'es6-promise';
import 'isomorphic-fetch';

import WebFont from 'webfontloader';

// Load SCSS
import '../scss/app.scss';

WebFont.load({
  google: {
    families: ['Lato:300,400,900', 'sans-serif'],
  },
});


es6Promise.polyfill();

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render app
render(Client);

if (module.hot) {
  module.hot.accept('./views/bootstrap/client', () => {
    const NewClient = require('./views/bootstrap/client').default; // eslint-disable-line global-require

    render(NewClient);
  });
}
