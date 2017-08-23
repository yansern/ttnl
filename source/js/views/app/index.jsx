import React, { Component } from 'react';
import Routes from 'routes';

import Header from 'components/app/header';
import Footer from 'components/app/footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    );
  }
}
