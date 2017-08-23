import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'views/home';
import People from 'views/people';
import Contact from 'views/contact';
import NotFound from 'views/notfound';

export const ROUTES = {
  HOME: '/',
  PEOPLE: '/people',
  CONTACT: '/contact',
};

export default () => (
  <Switch>
    <Route exact path={ ROUTES.HOME } component={ Home } />
    <Route path={ ROUTES.PEOPLE } component={ People } />
    <Route path={ ROUTES.CONTACT } component={ Contact } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
