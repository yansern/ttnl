import React, { Component } from 'react';

import Showcase from './showcase';
import Intro from './intro';
import Instagram from './instagram';

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { title: 'Florensis', imageUrl: 'florensis.jpg' },
        { title: 'Oxxio', imageUrl: 'oxxio.jpg' },
        { title: 'Walibi', imageUrl: 'walibi.jpg' },
      ],
    };
  }

  render() {
    return (
      <section id='home'>
        <Showcase />
        <Intro />
        <Instagram />
      </section>
    );
  }
}
