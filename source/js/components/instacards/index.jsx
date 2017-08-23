import React, { Component } from 'react';

export default class Instacards extends Component {
  render() {
    const items = this.props.feed.map((item) => (
      <div className='instacard' key={ item.id }>
        <div className='card is-shadowless'>
          <div className='card-image'>
            <figure className='image is-1by1'>
              <img src={ item.thumbnail_src } alt='Image' />
            </figure>
          </div>
          <div className='card-content'>
            <div className='content'>{ item.caption }</div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className='instacards'>
        { items }
      </div>
    );
  }
}
