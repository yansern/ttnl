import React, { Component } from 'react';
import Instacards from 'components/instacards';
import InstagramAPI from 'api/instagram';

export default class Instagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: [],
    };

    InstagramAPI.getFeed('tamtamnl')
      .then(feed => {
        // Take only the first 6 feed
        this.setState({ feed: feed.slice(0, 6) });
      });
  }

  render() {
    return (
      <section id='instagram' className='hero bg-winter'>
        <div className='hero-body'>
          <div className='container'>
            <h2 className='title has-text-centered has-text-blue is-uppercase is-size-3'>Follow Us On Instagram</h2>
            <h3 className='subtitle has-text-centered has-text-white has-weight-light is-size-3'>@tamtamnl</h3>
            <Instacards feed={ this.state.feed } />
          </div>
        </div>
      </section>
    );
  }
}
