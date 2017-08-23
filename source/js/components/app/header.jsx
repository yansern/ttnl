import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'routes';

import TamTamSvg from '../../../assets/svg/tamtam.svg';
import MenuSvg from '../../../assets/svg/menu.svg';
import CloseSvg from '../../../assets/svg/close.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDrawer: false,
    };
  }

  toggleDrawer = () => {
    this.setState({ showDrawer: !this.state.showDrawer });
  }

  hideDrawer = () => {
    this.setState({ showDrawer: false });
  }

  render() {
    return (
      <header id='app-header'>
        <nav className='navbar'>
          <div className='navbar-brand'>
            <div className='navbar-burger burger' onClick={ this.toggleDrawer } role='button' tabIndex='0'>
              <div className='navbar-item'>
                {this.state.showDrawer ? <CloseSvg /> : <MenuSvg />}
              </div>
            </div>
            <NavLink
              activeClassName='is-active'
              className='navbar-item'
              exact
              to={ ROUTES.HOME }
              onClick={ this.toggleDrawer }
            >
              <TamTamSvg />
            </NavLink>
          </div>
          <div className={ `navbar-menu ${ this.state.showDrawer ? 'is-active' : '' }` }>
            <div className='navbar-start'>
              <NavLink
                activeClassName='is-active'
                className='navbar-item'
                exact
                to={ ROUTES.HOME }
                onClick={ this.hideDrawer }
              >
              Home
              </NavLink>
              <NavLink
                activeClassName='is-active'
                className='navbar-item'
                to={ ROUTES.PEOPLE }
                onClick={ this.hideDrawer }
              >
              People
              </NavLink>
              <NavLink
                activeClassName='is-active'
                className='navbar-item'
                to={ ROUTES.CONTACT }
                onClick={ this.hideDrawer }
              >
              Contact
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
