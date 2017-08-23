import React, { Component } from 'react';

import FacebookSvg from '../../../assets/svg/facebook.svg';
import TwitterSvg from '../../../assets/svg/twitter.svg';
import InstagramSvg from '../../../assets/svg/instagram.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer id='app-footer'>
        <nav className='navbar navbar__footer'>
          <div className='navbar-brand'>
            <a className='navbar-item' target='_blank' href='https://www.facebook.com/tamtamnl' title='TamTam on Facebook'>
              <FacebookSvg className='navbar-icon' />
            </a>
            <a className='navbar-item' target='_blank' href='https://twitter.com/tamtamnl' title='TamTam on Twitter'>
              <TwitterSvg className='navbar-icon' />
            </a>
            <a className='navbar-item' target='_blank' href='https://www.instagram.com/tamtamnl' title='TamTam on Instagram'>
              <InstagramSvg className='navbar-icon' />
            </a>
          </div>
        </nav>
      </footer>
    );
  }
}
