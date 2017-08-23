import React, { Component } from 'react';
import Carousel from 'components/carousel';

export default class Showcase extends Component {
  render() {
    const items = [
      { title: 'Walibi', className: 'bg-walibi' },
      { title: 'Florensis', className: 'bg-florensis' },
      { title: 'Oxxio', className: 'bg-oxxio' },
    ];

    return (
      <section id='showcase' className='hero'>
        <Carousel items={ items } exitTo='#intro' />
      </section>
    );
  }
}
